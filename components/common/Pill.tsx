import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean; // Optional: To style active filters
  className?: string; // Optional: For additional custom styling
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-150
        ${isActive
          ? 'bg-blue-500 text-white border-blue-500'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
