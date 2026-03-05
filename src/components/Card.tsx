import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'white' | 'navy';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'white', 
  padding = 'md', 
  className,
  ...props 
}) => {
  const variants = {
    glass: 'glass-effect',
    white: 'bg-white shadow-premium border border-gray-100/50',
    navy: 'gradient-navy text-white shadow-lg shadow-navy-900/20',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-[2.5rem] transition-all duration-300',
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
