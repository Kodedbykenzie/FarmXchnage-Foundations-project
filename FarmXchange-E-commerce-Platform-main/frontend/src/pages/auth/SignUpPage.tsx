import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Progress } from '../../components/ui/Progress';
import { RoleSelection } from '../../components/signup/RoleSelection';
import { BasicInfoForm } from '../../components/signup/BasicInfoForm';
import { motion, AnimatePresence } from 'framer-motion';

type Role = 'farmer' | 'business';
type SignupStep = {
  title: string;
  description: string;
};

const SIGNUP_STEPS: SignupStep[] = [
  {
    title: 'Choose Account Type',
    description: "Select whether you're a farmer or business buyer"
  },
  {
    title: 'Basic Information',
    description: 'Fill in your personal details'
  },
  {
    title: 'Additional Details',
    description: 'Complete your profile information'
  },
  {
    title: 'Verification',
    description: 'Verify your account'
  }
];

type FormData = {
  email: string;
  password: string;
  farmName?: string;
  location?: string;
  description?: string;
  name?: string;
  role?: Role;
};

export function SignUpPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth(); // Ensure you destructure and use signUp if needed

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setFormData(prev => ({ ...prev, role }));
    setCurrentStep(1);
  };

  const handleBasicInfoSubmit = async (data: { email: string; password: string; name: string }) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleAdditionalDetailsSubmit = async (data: { farmName: string; location: string; description: string }) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const handleVerification = async () => {
    try {
      setLoading(true);

      if (!selectedRole) {
        throw new Error('Role must be selected before signing up.');
      }

      await signUp({
        name: formData.name || '',
        email: formData.email,
        password: formData.password,
        role: selectedRole,
        ...(selectedRole === 'farmer' ? {
          farmName: formData.farmName,
          location: formData.location,
          description: formData.description
        } : {
          businessName: formData.farmName, // Consider renaming to businessName in your FormData type
          location: formData.location,
          description: formData.description
        })
      });

      // Updated navigation paths to match the route structure
      navigate(selectedRole === 'farmer' ? '/farmer' : '/business');

    } catch (error) {
      console.error('Signup failed:', error);
      if (error instanceof Error) {
        alert(`Signup failed: ${error.message}`);
      } else {
        alert('Signup failed: An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
            sign in to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Progress steps={SIGNUP_STEPS.length} currentStep={currentStep} />

          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-900">
              {SIGNUP_STEPS[currentStep].title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {SIGNUP_STEPS[currentStep].description}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep === 0 && (
                <RoleSelection
                  selectedRole={selectedRole}
                  onSelectRole={handleRoleSelect}
                />
              )}

              {currentStep === 1 && (
                <BasicInfoForm
                  onSubmit={handleBasicInfoSubmit}
                  stepPrefix="step1"
                />
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="farmName-2" className="block text-sm font-medium text-gray-700">
                      Farm/Business Name
                    </label>
                    <input
                      type="text"
                      id="farmName-2"
                      name="farmName"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      onChange={e => setFormData(prev => ({ ...prev, farmName: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="location-2" className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location-2"
                      name="location"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="description-2" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description-2"
                      name="description"
                      rows={4}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (formData.farmName && formData.location && formData.description) {
                        handleAdditionalDetailsSubmit({
                          farmName: formData.farmName,
                          location: formData.location,
                          description: formData.description
                        });
                      }
                    }}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Continue
                  </button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center">
                  <button
                    onClick={handleVerification}
                    disabled={loading}
                    className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                  >
                    {loading ? 'Verifying...' : 'Verify Account'}
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {currentStep > 0 && currentStep < 3 && (
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
