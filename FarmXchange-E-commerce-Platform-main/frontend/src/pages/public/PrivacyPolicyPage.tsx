import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="text-gray-600 mb-8">
        Effective Date: [Month/Day/Year]<br/>
        Last Updated: [Month/Day/Year]
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
        <p>We collect information to provide better services to our agricultural community:</p>
        <ul className="list-disc pl-6">
          <li>Account Information: Name, email, farm/business details</li>
          <li>Transaction Data: Purchase history, payment details</li>
          <li>Usage Data: IP addresses, device information, browsing patterns</li>
          <li>Location Data: For delivery and regional pricing</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. How We Use Information</h2>
        <ul className="list-disc pl-6">
          <li>Process agricultural product transactions</li>
          <li>Connect farmers with buyers</li>
          <li>Improve marketplace features</li>
          <li>Send farming-related updates</li>
          <li>Prevent fraudulent activities</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Data Sharing</h2>
        <p>We only share data with:</p>
        <ul className="list-disc pl-6">
          <li>Verified delivery partners</li>
          <li>Payment processors (Mobile Money, Credit Cards)</li>
          <li>Legal authorities when required</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
        <p>Farmers and buyers can:</p>
        <ul className="list-disc pl-6">
          <li>Access/update account information</li>
          <li>Request data deletion</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <p className="mt-8 text-gray-600">
        Contact us at: [Your Email Address]<br/>
        [Physical Address if applicable]
      </p>
    </div>
  );
}