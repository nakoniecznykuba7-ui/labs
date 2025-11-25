import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'cyan' | 'purple' | 'blue' | 'default';
  className?: string;
  id?: string;
}

export default function Card({ children, variant = 'default', className = '', id }: CardProps) {
  const variantClasses = {
    cyan: 'bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20 hover:border-cyan-500/40',
    purple:
      'bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20 hover:border-purple-500/40',
    blue: 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border-blue-500/20 hover:border-blue-500/40',
    default: 'bg-white/5 border-white/10 hover:border-cyan-500/30',
  };

  return (
    <div
      id={id}
      className={`backdrop-blur-xl rounded-2xl border p-8 transition-all ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
