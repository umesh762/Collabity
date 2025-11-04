import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'gradient-primary text-white hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-purple-300 text-purple-600 hover:bg-purple-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
