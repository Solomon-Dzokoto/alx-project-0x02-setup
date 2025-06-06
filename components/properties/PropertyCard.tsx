import React from 'react';
import Image from 'next/image'; // Using next/image for optimized images
import { PropertyProps } from '@/interfaces'; // Assuming interfaces/index.ts

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative w-full h-56"> {/* Fixed height for image container */}
        <Image
          src={property.image}
          alt={property.name}
          layout="fill" // Fills the parent container
          objectFit="cover" // Scales the image nicely
          className="transition-transform duration-300 hover:scale-105"
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 truncate" title={property.name}>{property.name}</h3>
        <p className="text-sm text-gray-600 mb-2 truncate" title={`${property.address.city}, ${property.address.state}`}>
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-bold text-blue-600">${property.price.toLocaleString()}</p>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.966z"></path>
            </svg>
            <span className="text-sm text-gray-700">{property.rating.toFixed(2)}</span>
          </div>
        </div>
        {/* Optional: Add more details like offers here if needed */}
        {/* <div className="text-xs text-gray-500">
          {property.offers.bed} Beds · {property.offers.shower} Baths · Max {property.offers.occupants} Occupants
        </div> */}
      </div>
    </div>
  );
};

export default PropertyCard;
