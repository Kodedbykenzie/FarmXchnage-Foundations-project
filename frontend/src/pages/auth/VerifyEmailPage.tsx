import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Toaster } from 'sonner';
import { Button, Card, Typography } from "@material-tailwind/react";

export function VerifyEmailPage() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    // Simulate email verification
    const verifyEmail = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Email verified with token:', token);
        navigate('/signin', { state: { verified: true }, replace: true });
      } catch (error) {
        console.error('Email verification failed:', error);
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (canResend && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    if (countdown === 0) {
      setCanResend(false);
      setCountdown(30);
    }
    return () => clearInterval(timer);
  }, [canResend, countdown]);

  const handleResend = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Resending verification email');
      setCanResend(true);
    } catch (error) {
      console.error('Failed to resend email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          {loading ? (
            <div className="space-y-4">
              <div className="animate-spin inline-block w-12 h-12 border-4 border-green-500 rounded-full border-t-transparent" />
              <p className="text-gray-600">Verifying your email...</p>
              <button
                onClick={handleResend}
                disabled={canResend || loading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                Resend Verification Email
              </button>
              <DashboardLayout />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-red-600">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Email Verification Failed</h2>
              <p className="text-gray-600">
                The verification link is invalid or has expired.
              </p>
              <button
                onClick={handleResend}
                disabled={canResend || loading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                {canResend ? `Resend in ${countdown}s` : 'Resend Verification Email'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}