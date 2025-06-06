import React from 'react';
import Link from 'next/link';

const ACCOMMODATION_TYPES = ["Rooms", "Mansion", "Countryside", "Apartments", "Pool Villas"];

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        {/* Top Bar: Logo and Auth Buttons */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-blue-600">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link href="/signin" className="text-gray-600 hover:text-blue-600">
              Sign In
            </Link>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Accommodation Types */}
        <nav>
          <ul className="flex space-x-6 justify-center">
            {ACCOMMODATION_TYPES.map((type) => (
              <li key={type}>
                <Link href={`/search?type=${encodeURIComponent(type.toLowerCase())}`} className="text-gray-700 hover:text-blue-600 pb-1 border-b-2 border-transparent hover:border-blue-600">
                  {type}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
