import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { ProductsPage } from './pages/public/ProductsPage';
import { ProductDetailsPage } from './pages/public/ProductDetailsPage';
import { HowItWorksPage } from './pages/public/HowItWorksPage';
import { AboutPage } from './pages/public/AboutPage';
import { ContactPage } from './pages/public/ContactPage';
import { BlogPage } from './pages/public/BlogPage';
import { PostPage } from './pages/public/PostPage';
import { FAQPage } from './pages/public/FAQPage';
import { PrivacyPolicyPage } from './pages/public/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/public/TermsofServicePage';

// Auth Pages
import { SignInPage } from './pages/auth/SignInPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/auth/ResetPasswordPage';
import { VerifyEmailPage } from './pages/auth/VerifyEmailPage';

// Dashboard Pages
import { ProfilePage } from './pages/dashboards/ProfilePage';
import { NotificationsPage } from './pages/dashboards/NotificationsPage';

// Admin Dashboard Pages
import { AdminDashboard } from './pages/dashboards/admin/AdminDashboard';
import { UserManagement } from './pages/dashboards/admin/UserManagement';
import { ProductApprovals } from './pages/dashboards/admin/ProductApprovals';
import { AdminAnalytics } from './pages/dashboards/admin/AdminAnalytics';
import { AdminReports } from './pages/dashboards/admin/AdminReports';
import { AdminSettings } from './pages/dashboards/admin/AdminSettings';

// Farmer Dashboard Pages
import { FarmerDashboard } from './pages/dashboards/farmer/FarmerDashboard';
import { ProductManagement } from './pages/dashboards/farmer/ProductManagement';
import { FarmerOrders } from './pages/dashboards/farmer/FarmerOrders';
import { FarmerWallet } from './pages/dashboards/farmer/FarmerWallet';
import { FarmerMessages } from './pages/dashboards/farmer/FarmerMessages';
import { FarmerSettings } from './pages/dashboards/farmer/FarmerSettings';
import { OrderDetailsPage } from './pages/dashboards/farmer/OrderDetailsPage';

// Business Dashboard Pages
import { BusinessDashboard } from './pages/dashboards/business/BusinessDashboard';
import { Marketplace } from './pages/dashboards/business/Marketplace';
import { BusinessOrders } from './pages/dashboards/business/BusinessOrders';
import { BusinessWallet } from './pages/dashboards/business/BusinessWallet';
import { BusinessMessages } from './pages/dashboards/business/BusinessMessages';
import { BusinessSettings } from './pages/dashboards/business/BusinessSettings';

// Shared Components
import { NotFoundPage } from './pages/NotFoundPage';
import { OrderTrackingPage } from './pages/public/OrderTrackingPage';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
          <Route path="faq" element={<FAQPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/track-order/:orderId" element={<OrderTrackingPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            {/* Admin Dashboard */}
            <Route path="admin" element={<ProtectedRoute role="admin" />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="approvals" element={<ProductApprovals />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="reports" element={<AdminReports />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
            </Route>

            {/* Farmer Dashboard */}
            <Route path="farmer" element={<ProtectedRoute role="farmer" />}>
              <Route index element={<FarmerDashboard />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="orders">
                <Route index element={<FarmerOrders />} />
                <Route path=":orderId" element={<OrderDetailsPage />} />
              </Route>
              <Route path="wallet" element={<FarmerWallet />} />
              <Route path="messages" element={<FarmerMessages />} />
              <Route path="settings" element={<FarmerSettings />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
            </Route>

            {/* Business Dashboard */}
            <Route path="business" element={<ProtectedRoute role="business" />}>
              <Route index element={<BusinessDashboard />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="orders">
                <Route index element={<BusinessOrders />} />
                <Route path=":orderId" element={<OrderDetailsPage />} />
              </Route>
              <Route path="wallet" element={<BusinessWallet />} />
              <Route path="messages" element={<BusinessMessages />} />
              <Route path="settings" element={<BusinessSettings />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
            </Route>
          </Route>
        </Route>

        {/* Error Handling */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      <Toaster position="top-right" richColors expand={true} />
    </AuthProvider>
  );
}

export default App;