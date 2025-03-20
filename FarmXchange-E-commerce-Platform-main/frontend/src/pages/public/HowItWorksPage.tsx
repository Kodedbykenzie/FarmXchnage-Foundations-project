import React from 'react';

export function HowItWorksPage() {
  const steps = [
    {
      icon: '👨‍🌾',
      title: 'Step 1: Sign Up',
      description: 'Create an account as a farmer, business buyer, or admin. Provide necessary details and verify your identity.',
    },
    {
      icon: '🛒',
      title: 'Step 2: Browse or List Products',
      description: 'Farmers can list their products for sale, while buyers can browse and search for fresh produce.',
    },
    {
      icon: '💳',
      title: 'Step 3: Make a Purchase',
      description: 'Buyers can add products to their cart, choose a payment method, and complete the purchase securely.',
    },
    {
      icon: '🚚',
      title: 'Step 4: Delivery & Tracking',
      description: 'Farmers ship the products, and buyers can track the delivery in real-time.',
    },
    {
      icon: '⭐',
      title: 'Step 5: Rate & Review',
      description: 'After receiving the products, buyers can rate and review the farmers and their produce.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">How It Works</h1>

      {/* Steps Section */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-6xl">{step.icon}</div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Join FarmXchange today and experience a seamless agricultural marketplace.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}