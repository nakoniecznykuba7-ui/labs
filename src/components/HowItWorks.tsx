import { Search, Map, Rocket } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="programy" className="py-10 md:py-14 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Jak to działa w praktyce?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nie ma tu kursu na 200 filmów. Dostajesz konkretny plan dopasowany do Ciebie i wsparcie 1:1
            w każdym kroku, żeby faktycznie dojść do wyniku.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div className="text-cyan-400 text-sm font-semibold mb-2">Krok 1</div>
              <h3 className="text-xl font-bold mb-3">Diagnoza</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Sprawdzamy Twój punkt startu i dostępny czas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Określamy budżet (jeśli jakiś masz)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Dopasowujemy najlepszą ścieżkę dla Ciebie</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-blue-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Map className="w-7 h-7 text-white" />
              </div>
              <div className="text-blue-400 text-sm font-semibold mb-2">Krok 2</div>
              <h3 className="text-xl font-bold mb-3">Plan działania</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Konkretne zadania na najbliższe 1–4 tygodnie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Zero teorii – same działania prowadzące do celu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Plan elastyczny, dostosowany do Twojego tempa</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="text-purple-400 text-sm font-semibold mb-2">Krok 3</div>
              <h3 className="text-xl font-bold mb-3">Wdrożenie i feedback</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Działasz i wysyłasz wyniki do sprawdzenia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Dostajesz konkretny feedback, co poprawić</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Korygujemy plan na bieżąco, jeśli coś nie działa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 bg-white/5 rounded-lg p-4 inline-block border border-white/5">
            Jeśli żadna ścieżka nie będzie miała sensu – mówimy wprost, zamiast wciskać na siłę.
          </p>
        </div>
      </div>
    </section>
  );
}
