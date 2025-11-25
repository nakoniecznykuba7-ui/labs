import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  showArrow = false,
}: ButtonProps) {
  const baseClasses = 'rounded-xl font-semibold transition-all flex items-center justify-center gap-2';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-white',
    secondary:
      'bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`group ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}
