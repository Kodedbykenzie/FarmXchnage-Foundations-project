import React from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
export function ContactPage() {
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
    { name: 'Facebook', url: 'https://facebook.com', icon: '' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

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

      {/* Contact Form Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
          </div>
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg mt-6" rows="5"></textarea>
          <button type="submit" className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            Send Message
          </button>
        </form>
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

      {/* Map Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2aabc5e4f1e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
            className="w-full h-full rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      <div>
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
    </div>
  );
}