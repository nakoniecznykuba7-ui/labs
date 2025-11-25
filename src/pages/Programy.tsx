import { Link } from 'react-router-dom';
import { ShoppingCart, Sparkles, Briefcase, Check, Clock, Coins, AlertCircle, Target } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';

export default function Programy() {
  return (
    <>
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="cyan" showPulse>
              Programy EarningLab
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Wybierz program, z którym{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                dowieziesz pierwsze wyniki
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              3 ścieżki: <strong>E-commerce</strong>, <strong>AI Skill</strong>, <strong>Service</strong>.
              Dostajesz plan + zadania + feedback 1:1. Zero teorii – same działania prowadzące do wyniku.
            </p>

            <div className="flex justify-center pt-6">
              <Link to="/konsultacja">
                <Button
                  variant="primary"
                  size="lg"
                >
                  Umów konsultację
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section id="programy-list" hasBorder>
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Nasze programy</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Każdy program prowadzi do konkretnego wyniku. Wybierz ten, który pasuje do Twojej sytuacji.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card variant="cyan" className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <Badge variant="cyan">Najczęstszy wybór</Badge>
            </div>

            <h3 className="text-2xl font-bold mb-2">EcomLab</h3>
            <p className="text-cyan-400 text-sm font-semibold mb-6">E-commerce & Dropshipping</p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Produkt + oferta w 48h</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Ruch → pierwsze zamówienia</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Prosty system dowozu</span>
              </li>
            </ul>

            <Button
              variant="primary"
              className="w-full"
              onClick={() => document.getElementById('ecomlab')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Przejdź do EcomLab
            </Button>
          </Card>

          <Card variant="purple" className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <Badge variant="purple">Najbardziej przyszłościowe</Badge>
            </div>

            <h3 className="text-2xl font-bold mb-2">AI Skill Lab</h3>
            <p className="text-purple-400 text-sm font-semibold mb-6">Umiejętności + AI</p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Skill, który płaci szybko</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Portfolio + oferta</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">AI workflow od razu</span>
              </li>
            </ul>

            <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 transition-all font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
              Przejdź do AI Skill Lab
            </button>
          </Card>

          <Card variant="blue" className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <Badge variant="blue">Największa dźwignia</Badge>
            </div>

            <h3 className="text-2xl font-bold mb-2">Service Growth Lab</h3>
            <p className="text-blue-400 text-sm font-semibold mb-6">Freelance & Skalowanie</p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Oferta, cennik, pakiety</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Pozyskiwanie bez spiny</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">Proces obsługi klienta</span>
              </li>
            </ul>

            <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 transition-all font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
              Przejdź do Service Growth Lab
            </button>
          </Card>
        </div>
      </Section>

      <Section id="porownie" hasBorder>
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Które rozwiązanie jest dla Ciebie?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Szybkie porównanie, żeby łatwiej podjąć decyzję.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="default" id="ecomlab">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                <h3 className="text-xl font-bold">EcomLab</h3>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-gray-400">Dla kogo:</span>
                </div>
                <p className="text-sm text-gray-300">
                  Osoby, które chcą sprzedawać produkty (fizyczne lub cyfrowe) bez budowania własnego brandu od zera
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-gray-400">Czas do 1. efektów:</span>
                </div>
                <p className="text-sm text-gray-300">2-7 Dni (pierwsze zamówienia)</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-gray-400">Wymagane zasoby:</span>
                </div>
                <p className="text-sm text-gray-300">Minimalny budżet 100-300 zł na testy reklam</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-gray-400">Ryzyko:</span>
                </div>
                <p className="text-sm text-gray-300">Niskie-średnie (testy rynkowe)</p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-sm font-semibold text-cyan-400 mb-1">Idealny start:</p>
                <p className="text-sm text-gray-300">Masz pomysł na produkt lub niszę, chcesz szybko zweryfikować, czy się sprzeda</p>
              </div>
            </div>
          </Card>

          <Card variant="default" id="ai-skill-lab">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-400" strokeWidth={2} />
                <h3 className="text-xl font-bold">AI Skill Lab</h3>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-gray-400">Dla kogo:</span>
                </div>
                <p className="text-sm text-gray-300">
                  Osoby, które chcą sprzedawać umiejętności (grafika, copywriting, social media) z pomocą AI
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-gray-400">Czas do 1. efektów:</span>
                </div>
                <p className="text-sm text-gray-300">1-5 Dni (pierwsze zlecenie)</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-gray-400">Wymagane zasoby:</span>
                </div>
                <p className="text-sm text-gray-300">Czas na naukę + ~50-100 zł na AI tools</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-gray-400">Ryzyko:</span>
                </div>
                <p className="text-sm text-gray-300">Niskie (brak wymaganych dużych inwestycji)</p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-sm font-semibold text-purple-400 mb-1">Idealny start:</p>
                <p className="text-sm text-gray-300">Chcesz oferować usługi, ale potrzebujesz przewagi technologicznej</p>
              </div>
            </div>
          </Card>

          <Card variant="default" id="service-growth-lab">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-400" strokeWidth={2} />
                <h3 className="text-xl font-bold">Service Growth Lab</h3>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-400">Dla kogo:</span>
                </div>
                <p className="text-sm text-gray-300">
                  Freelancerzy lub mikro-agencje, którzy chcą więcej klientów i lepszą organizację
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-400">Czas do 1. efektów:</span>
                </div>
                <p className="text-sm text-gray-300">5-10 Dni (nowy klient)</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-400">Wymagane zasoby:</span>
                </div>
                <p className="text-sm text-gray-300">Czas na reorganizację procesów</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-400">Ryzyko:</span>
                </div>
                <p className="text-sm text-gray-300">Minimalne (bazujesz na tym co już masz)</p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-sm font-semibold text-blue-400 mb-1">Idealny start:</p>
                <p className="text-sm text-gray-300">Już coś robisz, ale chcesz więcej klientów i przestać tonąć w chaosie</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="diagnoza" hasBorder className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nie wiesz co wybrać?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Pomożemy Ci podjąć decyzję. W 10-minutowej diagnozie określimy, która ścieżka ma największy sens dla Twojej sytuacji.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card variant="default">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Diagnoza</h3>
                <p className="text-sm text-gray-300">
                  Pytamy o cel, dostępny czas, zasoby i doświadczenie
                </p>
              </div>
            </Card>

            <Card variant="default">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Dobór programu</h3>
                <p className="text-sm text-gray-300">
                  Rekomendujemy program, który ma największą szansę na sukces
                </p>
              </div>
            </Card>

            <Card variant="default">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Plan na 7 dni</h3>
                <p className="text-sm text-gray-300">
                  Dostajesz konkretny pierwszy krok, żeby zacząć działać
                </p>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/konsultacja">
              <Button
                variant="primary"
                size="lg"
              >
                Umów konsultację
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-6 italic">
            Jeśli żadna ścieżka nie ma sensu – też Ci to powiemy.
          </p>
        </div>
      </Section>
    </>
  );
}
