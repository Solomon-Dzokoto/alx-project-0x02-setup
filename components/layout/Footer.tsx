import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            We are dedicated to helping you find the best properties worldwide.
            Explore our listings and discover your next dream destination.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          {/* Add social media icons or links here if needed */}
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-200 pt-6">
        <p>&copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
