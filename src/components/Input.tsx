import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-500 px-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-white border border-gray-100 rounded-2xl px-5 py-4 text-sakani-navy placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sakani-navy/10 focus:border-sakani-navy transition-all duration-200 shadow-inner-soft',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 px-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
