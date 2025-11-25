import { ArrowRight } from 'lucide-react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import CheckListItem from './ui/CheckList';
import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-2.5">
            <Badge showPulse>
              Laboratorium zarabiania online dla ludzi, którzy nie chcą kolejnego kursu, tylko wyniki
            </Badge>

            <h1 className="text-[1.65rem] sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-[85%] mt-2 mb-1">
              Ułożymy Ci konkretną{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                ścieżkę zarabiania online
              </span>
              {' '}– zamiast kolejnego chaotycznego „kursu cud"
            </h1>

            <p className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-base text-white/80 leading-[1.75]">
              Pomagamy wybrać jedną prostą ścieżkę (e-commerce, AI-skills lub usługi), rozkładamy ją na kroki i prowadzimy Cię do pierwszych realnych wyników.
            </p>

            <div className="pt-1.5">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => document.getElementById('paths')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
              >
                Zobacz ścieżki zarabiania
              </Button>
            </div>

            <div className="space-y-2.5 pt-3">
              <CheckListItem>
                Dobieramy model zarabiania pod Ciebie - zamiast wciskać gotowe schematy
              </CheckListItem>
              <CheckListItem>
                Prowadzimy Cię od zera do pierwszych klientów lub zamówień
              </CheckListItem>
              <CheckListItem>
                Dostajesz feedback 1:1, żeby nie błądzić jak w kursach
              </CheckListItem>
              <CheckListItem>
                Zero ściemy — szybka droga do pierwszych wyników
              </CheckListItem>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
