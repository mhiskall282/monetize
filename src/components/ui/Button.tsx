import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  loading = false,
  icon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gold text-black hover:bg-yellow-500',
    secondary: 'bg-black text-gold hover:bg-gray-900',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}