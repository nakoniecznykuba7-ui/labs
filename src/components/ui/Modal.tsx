import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'blue' | 'default';
}

export default function Modal({ isOpen, onClose, children, variant = 'default' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl ${
          variant === 'cyan' ? 'bg-cyan-950/40' :
          variant === 'purple' ? 'bg-purple-950/40' :
          variant === 'blue' ? 'bg-blue-950/40' :
          'bg-gray-900/95'
        }`}
      >
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-gradient-to-b from-gray-900/95 to-transparent pointer-events-none">
          <button
            onClick={onClose}
            className="pointer-events-auto p-3 min-w-[44px] min-h-[44px] rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-8 pb-0 -mt-16">
          {children}
        </div>
      </div>
    </div>
  );
}
