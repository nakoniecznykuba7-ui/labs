import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'cyan' | 'purple' | 'blue' | 'green';
  showPulse?: boolean;
}

export default function Badge({ children, variant = 'default', showPulse = false }: BadgeProps) {
  const variantClasses = {
    default: 'bg-white/5 border-cyan-500/20',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    green: 'bg-[#00e676]/10 border-[#00e676]/20 text-white',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm ${variantClasses[variant]}`}
    >
      {showPulse && <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true"></div>}
      <span className="text-sm text-gray-200">{children}</span>
    </div>
  );
}
