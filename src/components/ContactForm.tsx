import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    path: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontakt" className="py-10 md:py-12 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Zobacz, czy EarningLab ma sens dla Ciebie
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Wypełnij formularz, a odezwiemy się, żeby umówić krótką, darmową konsultację.
            Bez wciskania na siłę – jeśli uznamy, że to nie dla Ciebie, szczerze Ci to powiemy.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors text-white placeholder-gray-500"
                placeholder="Jak mamy się do Ciebie zwracać?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors text-white placeholder-gray-500"
                placeholder="Twój adres e-mail"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="age" className="block text-sm font-medium mb-2">
                Wiek
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="13"
                max="100"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors text-white placeholder-gray-500"
                placeholder="Ile masz lat?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="path" className="block text-sm font-medium mb-2">
                Wybrana ścieżka
              </label>
              <select
                id="path"
                name="path"
                value={formData.path}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors text-white"
              >
                <option value="" className="bg-[#0d1228]">
                  Wybierz ścieżkę
                </option>
                <option value="ecomlab" className="bg-[#0d1228]">
                  EcomLab – E-commerce & Dropshipping
                </option>
                <option value="aiskillab" className="bg-[#0d1228]">
                  AI Skill Lab – Umiejętności + AI
                </option>
                <option value="servicegrowth" className="bg-[#0d1228]">
                  Service Growth Lab – Freelance & Usługi
                </option>
                <option value="notsure" className="bg-[#0d1228]">
                  Jeszcze nie wiem
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Krótka wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Powiedz nam kilka słów o swojej sytuacji (opcjonalne)"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-semibold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              Wyślij i umów konsultację
              <Send className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              Twoje dane są bezpieczne i nie udostępnimy ich nikomu. Nie wysyłamy spamu.
              Odezwiemy się tylko w sprawie umówienia konsultacji.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
