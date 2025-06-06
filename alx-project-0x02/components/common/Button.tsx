import React from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  className = '',
  ...props
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const shapeClasses: Record<ButtonShape, string> = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      type="button"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
