import React from 'react';

export function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">1. Account Responsibility</h2>
        <ul className="list-disc pl-6">
          <li>Farmers must provide accurate crop information</li>
          <li>Buyers must maintain valid payment methods</li>
          <li>Prohibit fake product listings</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Transactions</h2>
        <ul className="list-disc pl-6">
          <li>Prices in local currency (UGX)</li>
          <li>Delivery timelines vary by region</li>
          <li>Returns within 48 hours for damaged goods</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Content Rules</h2>
        <ul className="list-disc pl-6">
          <li>No misleading farm product descriptions</li>
          <li>Ownership of uploaded farming content</li>
          <li>Report inappropriate agricultural content</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Termination</h2>
        <p>We may suspend accounts for:</p>
        <ul className="list-disc pl-6">
          <li>Fraudulent farming practices</li>
          <li>Multiple unresolved disputes</li>
          <li>Violation of community guidelines</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Governing Law</h2>
        <p>These terms are governed by the laws of [Your Country], 
        specifically addressing agricultural commerce regulations.</p>
      </section>

      <p className="mt-8 text-gray-600">
        Last Updated: [Month/Day/Year]<br/>
        Contact: [Your Support Email]
      </p>
    </div>
  );
}