import { CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface CheckListItemProps {
  children: ReactNode;
}

export default function CheckListItem({ children }: CheckListItemProps) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-xs sm:text-sm lg:text-base text-gray-200">{children}</p>
    </div>
  );
}
