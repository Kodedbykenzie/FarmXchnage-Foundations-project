import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, StoreIcon } from 'lucide-react';
type Role = 'farmer' | 'business';
type RoleSelectionProps = {
  selectedRole: Role | null;
  onSelectRole: (role: Role) => void;
};
export function RoleSelection({
  selectedRole,
  onSelectRole
}: RoleSelectionProps) {
  return <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center text-gray-800">
        Choose your account type
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} onClick={() => onSelectRole('farmer')} className={`p-6 rounded-lg border-2 transition-colors ${selectedRole === 'farmer' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-200'}`}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900">Farmer</h4>
              <p className="mt-1 text-sm text-gray-500">
                List and sell your agricultural products
              </p>
            </div>
          </div>
        </motion.button>
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} onClick={() => onSelectRole('business')} className={`p-6 rounded-lg border-2 transition-colors ${selectedRole === 'business' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-200'}`}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <StoreIcon className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900">
                Business Buyer
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Purchase products in bulk from farmers
              </p>
            </div>
          </div>
        </motion.button>
      </div>
    </div>;
}