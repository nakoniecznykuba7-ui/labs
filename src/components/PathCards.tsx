import { Link } from 'react-router-dom';
import { ShoppingCart, Sparkles, Briefcase } from 'lucide-react';

export default function PathCards() {
  return (
    <section id="paths" className="py-10 md:py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Wybierz ścieżkę, która pasuje do Ciebie
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Możesz zacząć od jednej ścieżki i później zmienić, jeśli uznasz, że inna będzie dla Ciebie lepsza.
            Nie jesteś związany na stałe.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-2">EcomLab</h3>
            <p className="text-cyan-400 text-sm font-semibold mb-4">E-commerce & Dropshipping</p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Dla osób, które chcą budować sklepy internetowe lub sprzedawać produkty online.
              Nie musisz mieć swoich produktów – możesz zacząć od dropshippingu lub produktów cyfrowych.
            </p>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Pomagamy dobrać produkty i model sklepu</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Prosty lejek: ruch → oferta → pierwsze zamówienia</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Opcja: robisz sam albo zlecasz część zadań</span>
              </li>
            </ul>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                Najlepsze, jeśli lubisz cyfrowe produkty albo fizyczne rzeczy i masz minimalny budżet na testy.
              </p>
            </div>

            <Link to="/programy#ecomlab" className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-center">
              Zobacz szczegóły EcomLab
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-2">AI Skill Lab</h3>
            <p className="text-purple-400 text-sm font-semibold mb-4">Umiejętności + AI</p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Dla osób, które chcą sprzedawać swoje umiejętności (grafika, teksty, montaż, social media)
              szybciej i lepiej dzięki narzędziom AI.
            </p>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Pomagamy wybrać skill, który realnie ktoś kupi</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Tworzymy razem pierwszą ofertę i przykładowe realizacje</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Pokazujemy jak używać AI, żeby robić to szybciej i lepiej</span>
              </li>
            </ul>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 mb-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                Opcja dla osób, które wolą usługi niż sklep.
              </p>
            </div>

            <Link to="/programy#ai-skill-lab" className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 transition-all font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 text-center">
              Zobacz szczegóły AI Skill Lab
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-2">Service Growth Lab</h3>
            <p className="text-blue-400 text-sm font-semibold mb-4">Freelance & Skalowanie usług</p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Dla freelancerów lub właścicieli mikro-agencji, którzy chcą więcej klientów, lepsze stawki
              i przestać tonąć w chaosie.
            </p>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Pomoc w ustawieniu oferty, cennika i pakietów</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Prosty system pozyskiwania klientów (DM / ogłoszenia / polecenia)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Podstawowy system obsługi klienta, żeby nie tonąć w chaosie</span>
              </li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                Dla osób, które już coś robią dla innych albo chcą szybko zacząć.
              </p>
            </div>

            <Link to="/programy#service-growth-lab" className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 transition-all font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 text-center">
              Zobacz szczegóły Service Growth Lab
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
