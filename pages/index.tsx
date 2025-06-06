import React, { useState } from 'react';
import { HERO_BACKGROUND_IMAGE_URL, PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/common/Pill';
import PropertyCard from '@/components/properties/PropertyCard'; // Import PropertyCard
import { PropertyProps } from '@/interfaces'; // Import PropertyProps

const FILTER_LABELS = ["Top Villa", "Self Checkin", "Pool", "Mountain View", "Pet Friendly", "Beachfront"];

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  // In a real app, you'd filter PROPERTYLISTINGSAMPLE based on activeFilter
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);


  const handleFilterClick = (filterLabel: string) => {
    const newActiveFilter = activeFilter === filterLabel ? null : filterLabel;
    setActiveFilter(newActiveFilter);

    if (newActiveFilter) {
      // Example filter logic (case-insensitive, checks category array and name)
      setFilteredProperties(
        PROPERTYLISTINGSAMPLE.filter(property =>
          property.category.some(cat => cat.toLowerCase().includes(newActiveFilter.toLowerCase())) ||
          property.name.toLowerCase().includes(newActiveFilter.toLowerCase())
        )
      );
    } else {
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    }
    console.log("Selected filter:", newActiveFilter);
  };

  return (
    <div>
      {/* Hero Section (already implemented) */}
      <section
        className="relative bg-cover bg-center py-32 md:py-48"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section (already implemented) */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Filter by</h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              onClick={() => handleFilterClick(label)}
              isActive={activeFilter === label}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
          {activeFilter ? `Showing results for "${activeFilter}"` : "Our Latest Properties"}
        </h2>
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No properties found matching your criteria. Try adjusting your filters.
          </p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
