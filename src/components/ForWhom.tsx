import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

export default function ForWhom() {
  return (
    <section className="py-10 md:py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Dla kogo to ma sens?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-white" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold mb-4">Uczniowie i studenci</h3>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Masz mało czasu, ale chcesz zacząć dorabiać</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Szukasz pierwszego dochodu online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Nie wiesz od czego zacząć i komu zaufać</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-white" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold mb-4">Osoby pracujące</h3>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Chcesz drugiej nogi finansowej, nie zależeć od etatu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Masz ograniczony czas po pracy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Szukasz czegoś konkretnego, bez 100 godzin teorii</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-blue-500/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold mb-4">Freelancerzy / właściciele usług</h3>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Chcesz podnieść stawki i przestać robić wszystko za grosze</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Musisz poukładać ofertę i system pracy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Chcesz więcej klientów bez tonięcia w chaosie</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            Jeśli jesteś poza tymi kategoriami, i tak możemy sprawdzić, czy da się coś z tego zbudować.
          </p>
        </div>
      </div>
    </section>
  );
}
