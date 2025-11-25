import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== path) {
      navigate(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="EarningLab Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              EarningLab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              EarningLab
            </Link>
            <Link
              to="/programy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Programy
            </Link>
            <Link
              to="/wyniki"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Wyniki
            </Link>
            <Link
              to="/kontakt"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Kontakt
            </Link>
            <Link
              to="/konsultacja"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-medium shadow-lg shadow-cyan-500/20"
            >
              Umów Konsultację
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0e1a]/95 backdrop-blur-md border-b border-white/5 py-4">
            <div className="flex flex-col gap-4 px-6">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                EarningLab
              </Link>
              <Link
                to="/programy"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Programy
              </Link>
              <Link
                to="/wyniki"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Wyniki
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
              >
                Kontakt
              </Link>
              <Link
                to="/konsultacja"
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-medium shadow-lg shadow-cyan-500/20 text-center"
              >
                Umów Konsultację
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
