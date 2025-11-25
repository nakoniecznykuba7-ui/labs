import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

export default function SocialProof() {
  return (
    <section id="wyniki" className="py-10 md:py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Przykłady efektów i historii
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold">
                K.M.
              </div>
              <div>
                <div className="font-semibold">17 lat, uczeń</div>
                <div className="text-sm text-gray-400">AI Skill Lab</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-cyan-400 font-semibold mb-1">PRZED</div>
                <p className="text-sm text-gray-300">
                  Zero doświadczenia w zarabianiu online. Oglądał filmiki na YouTube o „zarabianiu z AI",
                  ale nie wiedział od czego zacząć.
                </p>
              </div>

              <div>
                <div className="text-xs text-blue-400 font-semibold mb-1">CO ZROBILIŚMY</div>
                <p className="text-sm text-gray-300">
                  Wybraliśmy prosty skill (grafiki z AI do social media). Stworzyliśmy portfolio
                  i ofertę. Pokazaliśmy jak szukać pierwszych klientów.
                </p>
              </div>

              <div>
                <div className="text-xs text-emerald-400 font-semibold mb-1">EFEKT</div>
                <p className="text-sm text-gray-300">
                  Po 3 dniach pierwsze zlecenie (150 zł). Po 2 miesiącach stabilnie kilka zleceń
                  dziennie po 200–400 zł.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Pierwsze wyniki w 3 dni</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-xl font-bold">
                A.N.
              </div>
              <div>
                <div className="font-semibold">24 lata, pracuje na etacie</div>
                <div className="text-sm text-gray-400">Service Growth Lab</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-purple-400 font-semibold mb-1">PRZED</div>
                <p className="text-sm text-gray-300">
                  Chciała dorabiać montażem wideo, ale nie wiedziała jak znaleźć klientów.
                  Miała 2–3 godziny dziennie po pracy.
                </p>
              </div>

              <div>
                <div className="text-xs text-pink-400 font-semibold mb-1">CO ZROBILIŚMY</div>
                <p className="text-sm text-gray-300">
                  Ułożyliśmy prosty system: profil + portfolio + strategia DM do lokalnych firm i twórców.
                  Przygotowaliśmy pakiety i cennik.
                </p>
              </div>

              <div>
                <div className="text-xs text-emerald-400 font-semibold mb-1">EFEKT</div>
                <p className="text-sm text-gray-300">
                  Po tygodniu pierwsi 2 klienci stali (900 zł miesięcznie łącznie). Po 3 miesiącach
                  15 stałych klientów i dorabia więcej niż zarabia na etacie.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Stali klienci w tydzień</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl font-bold">
                M.W.
              </div>
              <div>
                <div className="font-semibold">22 lata, freelancer</div>
                <div className="text-sm text-gray-400">Service Growth Lab</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-blue-400 font-semibold mb-1">PRZED</div>
                <p className="text-sm text-gray-300">
                  Robił grafiki dla klientów po 50–100 zł. Tonął w chaosie, brak systemu, brak czasu na rozwój.
                  Za dużo roboty za mało hajsu.
                </p>
              </div>

              <div>
                <div className="text-xs text-indigo-400 font-semibold mb-1">CO ZROBILIŚMY</div>
                <p className="text-sm text-gray-300">
                  Uporządkowaliśmy ofertę i podzieliliśmy na pakiety. Podnieśliśmy stawki (300–600 zł za projekt).
                  Wprowadziliśmy prosty system do obsługi.
                </p>
              </div>

              <div>
                <div className="text-xs text-emerald-400 font-semibold mb-1">EFEKT</div>
                <p className="text-sm text-gray-300">
                  Po 2 tygodniach przestał brać zlecenia poniżej 300 zł. Teraz obsługuje mniej klientów,
                  zarabia 2x więcej i ma czas na rozwój.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Podwojone zarobki, mniej pracy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-sm text-gray-400 bg-white/5 rounded-lg p-4 inline-block border border-white/5 max-w-3xl">
            Efekty zależą od Twojego zaangażowania – my dajemy plan i korekty, ale za Ciebie nikt nie zrobi roboty.
          </p>
          <div className="flex justify-center">
            <Link to="/wyniki">
              <Button variant="primary" size="lg">
                Zobacz więcej Wyników
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
