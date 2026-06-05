import React from 'react';
import { Link } from 'react-router';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-brand-gold text-white hover:bg-brand-gold-dark',
    secondary: 'bg-brand-gray text-white hover:bg-black dark:bg-brand-white dark:text-black dark:hover:bg-brand-white-dark',
    outline: 'border border-brand-gray text-brand-gray hover:bg-brand-gray hover:text-white dark:border-brand-white dark:text-brand-white dark:hover:bg-brand-white dark:hover:text-black',
    ghost: 'text-brand-gray hover:bg-black/5 dark:text-brand-white dark:hover:bg-white/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
