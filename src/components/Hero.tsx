import { CheckCircle, ArrowRight, Users } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-20 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Laboratorium zarabiania online dla ludzi, którzy nie chcą kolejnego kursu, tylko wyniki
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[1.65rem] sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-[85%] mt-2 mb-1">
              Ułożymy Ci konkretną{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                ścieżkę zarabiania online
              </span>
              {' '}– zamiast kolejnego chaotycznego „kursu cud"
            </h1>

            {/* Description */}
            <p className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-base text-white/80 leading-[1.75]">
              Pomagamy wybrać jedną prostą ścieżkę (e-commerce, AI-skills lub usługi), rozkładamy ją na kroki i prowadzimy Cię do pierwszych realnych wyników.
            </p>

            {/* CTA Button */}
            <div className="pt-1.5">
              <button
                onClick={() => document.getElementById('paths')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-semibold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
              >
                Zobacz ścieżki zarabiania
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3.5 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                  Dobieramy model zarabiania pod Ciebie — zamiast wciskać gotowe schematy
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                  Prowadzimy Cię od zera do pierwszych klientów lub zamówień
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                  Dostajesz feedback 1:1, żeby nie błądzić jak w kursach
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                  Zero ściemy — szybka droga do pierwszych wyników
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
