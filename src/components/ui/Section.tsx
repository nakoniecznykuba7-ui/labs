import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  hasBorder?: boolean;
}

export default function Section({ children, id, className = '', hasBorder = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 px-6 ${hasBorder ? 'border-t border-white/5' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
