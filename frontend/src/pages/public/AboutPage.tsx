import React from 'react';

export function AboutPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'John has over 10 years of experience in agricultural technology and business development.',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/150',
      bio: 'Jane is a tech enthusiast with a passion for building scalable and efficient systems.',
    },
    {
      name: 'Alice Johnson',
      role: 'Head of Marketing',
      image: 'https://via.placeholder.com/150',
      bio: 'Alice specializes in digital marketing and brand strategy for agricultural businesses.',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📸' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      {/* Mission and Vision Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-gray-600 text-center mb-6">
          Our mission is to provide our customers with the highest quality farm produce while ensuring sustainable and eco-friendly farming practices. We aim to support local farmers and promote healthy eating habits.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
        <p className="text-gray-600 text-center">
          Our vision is to revolutionize the agricultural supply chain by connecting farmers directly to customers through an easy-to-use digital marketplace.
        </p>
      </div>

      {/* History Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our History</h2>
        <p className="text-gray-600 text-center">
          Founded in 2025, FarmXchange has come a long way from its beginnings. When we first started out, our passion for providing the best quality farm produce drove us to start our own business.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Connect With Us</h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} className="text-4xl hover:text-green-500 transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">"FarmXchange has revolutionized the way we buy and sell agricultural products. Highly recommended!"</p>
            <p className="font-semibold">- Sarah T.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">"The platform is user-friendly, and the team is very supportive. Great experience overall!"</p>
            <p className="font-semibold">- Michael R.</p>
          </div>
        </div>
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