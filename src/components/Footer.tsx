import { Link } from 'react-router-dom';
import Logo from '../assets/1000012979-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="py-8 md:py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="EarningLab Logo" className="h-9 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              EarningLab
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/regulamin"
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Regulamin
            </Link>
            <div className="text-sm text-gray-400">
              © 2025 EarningLab. Wszystkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
