import React, { useCallback, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Demo users data
const DEMO_USERS = {
  admin: {
    id: '1',
    name: 'Admin User',
    email: 'admin@farmxchange.com',
    password: 'Admin123',
    role: 'admin' as const
  },
  farmer: {
    id: '2',
    name: 'John Farmer',
    email: 'farmer@farmxchange.com',
    password: 'Farmer123',
    role: 'farmer' as const
  },
  business: {
    id: '3',
    name: 'Business Owner',
    email: 'business@farmxchange.com',
    password: 'Business123',
    role: 'business' as const
  }
};

// Type definitions
type UserRole = 'admin' | 'farmer' | 'business';

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  demoUsers: typeof DEMO_USERS;
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
  role: Exclude<UserRole, 'admin'>;
};

// Create and export context
export const AuthContext = createContext<AuthContextType | null>(null);

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const demoUser = Object.values(DEMO_USERS).find(
        user => user.email === email && user.password === password
      );

      if (demoUser) {
        const { password: _, ...userData } = demoUser;
        setUser(userData);
        const redirectPath = `/${userData.role}/dashboard`;
        console.log('User data:', userData); // Log user data
        console.log('User role:', userData.role); // Log user role
        console.log('Redirecting to:', redirectPath);
        toast.success('Successfully signed in!');
        
        // Redirect to dashboard path
        navigate(redirectPath);
        return;
      }
      toast.error('Invalid credentials. Try demo accounts shown below.');
    } catch (error) {
      toast.error('Failed to sign in');
    }
  }, [navigate]);

  const signUp = useCallback(async (data: SignUpData) => {
    try {
      const newUser = {
        id: Math.random().toString(),
        ...data
      };
      setUser(newUser);
      toast.success('Successfully signed up!');
      navigate(`/${data.role}/dashboard`);
    } catch (error) {
      toast.error('Failed to sign up');
    }
  }, [navigate]);

  const signOut = useCallback(() => {
    setUser(null);
    navigate('/');
    toast.success('Successfully signed out!');
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
        isAuthenticated: !!user,
        demoUsers: DEMO_USERS
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
