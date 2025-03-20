import React from 'react';

export function FAQPage() {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button and follow the registration process...'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept mobile money, credit cards, and bank transfers...'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}