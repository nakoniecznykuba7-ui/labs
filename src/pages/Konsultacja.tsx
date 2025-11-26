import { useState, FormEvent } from 'react';
import { Target, CheckCircle, AlertCircle, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import SEO from '../components/SEO';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';

export default function Konsultacja() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentStage: '',
    program: '',
    budget: '',
    timeWeekly: '',
    situation: '',
    source: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    currentStage: '',
    program: '',
    budget: '',
    timeWeekly: '',
    situation: '',
    agreement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      currentStage: '',
      program: '',
      budget: '',
      timeWeekly: '',
      situation: '',
      agreement: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Imię jest wymagane';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Podaj poprawny adres email';
      isValid = false;
    }

    if (!formData.currentStage) {
      newErrors.currentStage = 'To pole jest wymagane';
      isValid = false;
    }

    if (!formData.program) {
      newErrors.program = 'To pole jest wymagane';
      isValid = false;
    }

    if (!formData.budget) {
      newErrors.budget = 'To pole jest wymagane';
      isValid = false;
    }

    if (!formData.timeWeekly) {
      newErrors.timeWeekly = 'To pole jest wymagane';
      isValid = false;
    }

    if (!formData.situation.trim()) {
      newErrors.situation = 'Opis sytuacji jest wymagany';
      isValid = false;
    }

    if (!formData.agreement) {
      newErrors.agreement = 'Musisz zaakceptować warunki';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', '86cbb94c-68e4-45a1-9b3f-0fff3d973d5f');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('from_name', 'EarningLab Website');
      formPayload.append('subject', 'Nowa konsultacja – EarningLab');
      formPayload.append('form_name', 'ConsultationForm');
      formPayload.append('botcheck', '');

      const message = `
NOWE ZGŁOSZENIE NA KONSULTACJĘ

Imię: ${formData.name}
Email: ${formData.email}

Gdzie jesteś teraz: ${formData.currentStage}
Program: ${formData.program}
Budżet na start: ${formData.budget}
Czas tygodniowo: ${formData.timeWeekly}

Sytuacja i cel na 3 miesiące:
${formData.situation}

Skąd się dowiedział: ${formData.source || 'Nie podano'}
      `.trim();

      formPayload.append('message', message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          currentStage: '',
          program: '',
          budget: '',
          timeWeekly: '',
          situation: '',
          source: '',
          agreement: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <>
      <SEO
        title="Konsultacja wstępna — EarningLab (dopasowanie ścieżki)"
        description="Szybko sprawdzimy, czy EarningLab ma sens w Twojej sytuacji. Jeśli nie — powiemy wprost. Dostaniesz rekomendację i plan startu."
        path="/konsultacja"
      />
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="cyan" showPulse>
              Konsultacja wstępna EarningLab
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Umów konsultację wstępną z EarningLab
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              W 15 minut sprawdzimy, czy któryś z programów EarningLab ma sens dla Twojej
              sytuacji. Bez wciskania, bez zobowiązań – jeśli nie widzimy szans, mówimy to wprost.
            </p>

            <div className="pt-6 max-w-2xl mx-auto">
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-gray-200">
                    Przeanalizujemy Twój punkt startowy (czas, budżet, doświadczenie).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-gray-200">
                    Dobierzemy konkretny program albo szczerze powiemy, że nie ma sensu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-gray-200">
                    Dostaniesz szkic planu na pierwsze 7 dni działania.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document.getElementById('konsultacja-form')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Wypełnij formularz
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="jak-wyglada" hasBorder>
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Jak wygląda konsultacja?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Chcemy, żebyś dokładnie wiedział, na co się zapisujesz. Bez niespodzianek.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card variant="cyan" className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <span className="text-cyan-400 font-bold text-3xl">1</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Diagnoza</h3>

            <p className="text-gray-200">
              Analiza wprowadzonych przez ciebie odpowiedzi. Zadajemy
              konkretne pytania, bez small talku.
            </p>
          </Card>

          <Card variant="purple" className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <span className="text-purple-400 font-bold text-3xl">2</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Rekomendacja</h3>

            <p className="text-gray-200">
              Mówimy wprost, czy EcomLab, AI Skill Lab albo Service Growth Lab mają sens dla Twojej
              sytuacji. Jeśli nie – też Ci to powiemy.
            </p>
          </Card>

          <Card variant="blue" className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <span className="text-blue-400 font-bold text-3xl">3</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Plan startu</h3>

            <p className="text-gray-200">
              Dostajesz szkic planu na pierwsze 7 dni oraz checklistę, co przygotować przed startem
              programu.
            </p>
          </Card>
        </div>
      </Section>

      <Section hasBorder>
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Dla kogo jest ta konsultacja?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card variant="default" className="border-l-4 border-l-green-500">
            <div className="flex items-center gap-3 mb-6">
              <ThumbsUp className="w-8 h-8 text-green-400" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-green-400">Dla kogo TAK</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Chcesz realnie dowieźć pierwsze wyniki w ciągu kilku tygodni, nie „kiedyś".
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Masz minimum 5–7 godzin tygodniowo na pracę nad programem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Możesz przeznaczyć przynajmniej kilkaset złotych na testy (albo jesteś gotów to
                  wypracować).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Akceptujesz, że wyniki zależą też od Ciebie, nie tylko od systemu.
                </span>
              </li>
            </ul>
          </Card>

          <Card variant="default" className="border-l-4 border-l-red-500">
            <div className="flex items-center gap-3 mb-6">
              <ThumbsDown className="w-8 h-8 text-red-400" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-red-400">Dla kogo NIE</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Szukasz „magicznego systemu", który zrobi wszystko za Ciebie.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Nie masz absolutnie żadnego czasu w tygodniu na wdrażanie zadań.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Interesuje Cię wyłącznie gwarancja konkretnego zarobku w X dni.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-200">
                  Nie jesteś gotów słyszeć szczerego feedbacku na temat swojej sytuacji.
                </span>
              </li>
            </ul>
          </Card>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8 italic max-w-3xl mx-auto">
          Jeśli po wypełnieniu formularza zobaczymy, że to nie jest dobry moment – też Ci to
          powiemy. Bez sprzedażowego bullshitu.
        </p>
      </Section>

      <Section id="konsultacja-form" hasBorder>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">Formularz konsultacji</h2>
            <p className="text-lg text-gray-300">
              Im dokładniej opiszesz sytuację, tym lepiej przygotujemy się do rozmowy i tym
              większa szansa, że konsultacja faktycznie coś Ci da.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="botcheck" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Imię <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.name ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500`}
                placeholder="Twoje imię"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mail <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.email ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500`}
                placeholder="twoj@email.pl"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="currentStage" className="block text-sm font-medium text-gray-300 mb-2">
                Gdzie jesteś teraz? <span className="text-red-400">*</span>
              </label>
              <select
                id="currentStage"
                name="currentStage"
                value={formData.currentStage}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.currentStage ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white`}
              >
                <option value="">Wybierz opcję</option>
                <option value="Dopiero startuję – nie mam jeszcze wyników">
                  Dopiero startuję – nie mam jeszcze wyników
                </option>
                <option value="Mam już pierwsze przychody, ale wszystko jest chaotyczne">
                  Mam już pierwsze przychody, ale wszystko jest chaotyczne
                </option>
                <option value="Działam na większą skalę, chcę to poukładać i skalować">
                  Działam na większą skalę, chcę to poukładać i skalować
                </option>
              </select>
              {errors.currentStage && (
                <p className="mt-1 text-sm text-red-400">{errors.currentStage}</p>
              )}
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-2">
                Który program najbardziej Cię interesuje? <span className="text-red-400">*</span>
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.program ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white`}
              >
                <option value="">Wybierz opcję</option>
                <option value="Nie wiem – pomóżcie wybrać">Nie wiem – pomóżcie wybrać</option>
                <option value="EcomLab (e-commerce & dropshipping)">
                  EcomLab (e-commerce & dropshipping)
                </option>
                <option value="AI Skill Lab (umiejętności + AI)">
                  AI Skill Lab (umiejętności + AI)
                </option>
                <option value="Service Growth Lab (freelance & usługi)">
                  Service Growth Lab (freelance & usługi)
                </option>
              </select>
              {errors.program && <p className="mt-1 text-sm text-red-400">{errors.program}</p>}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                Budżet na start <span className="text-red-400">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.budget ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white`}
              >
                <option value="">Wybierz opcję</option>
                <option value="0–200 zł">0–200 zł</option>
                <option value="200–500 zł">200–500 zł</option>
                <option value="500–2000 zł">500–2000 zł</option>
                <option value="Powyżej 2000 zł">Powyżej 2000 zł</option>
              </select>
              {errors.budget && <p className="mt-1 text-sm text-red-400">{errors.budget}</p>}
            </div>

            <div>
              <label htmlFor="timeWeekly" className="block text-sm font-medium text-gray-300 mb-2">
                Ile realnie czasu tygodniowo możesz poświęcić?{' '}
                <span className="text-red-400">*</span>
              </label>
              <select
                id="timeWeekly"
                name="timeWeekly"
                value={formData.timeWeekly}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.timeWeekly ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white`}
              >
                <option value="">Wybierz opcję</option>
                <option value="5–7 godzin">5–7 godzin</option>
                <option value="8–15 godzin">8–15 godzin</option>
                <option value="16–25 godzin">16–25 godzin</option>
                <option value="Ponad 25 godzin">Ponad 25 godzin</option>
              </select>
              {errors.timeWeekly && (
                <p className="mt-1 text-sm text-red-400">{errors.timeWeekly}</p>
              )}
            </div>

            <div>
              <label htmlFor="situation" className="block text-sm font-medium text-gray-300 mb-2">
                Opisz krótko swoją sytuację i cel na najbliższe 3 miesiące{' '}
                <span className="text-red-400">*</span>
              </label>
              <textarea
                id="situation"
                name="situation"
                value={formData.situation}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.situation ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500 resize-none`}
                placeholder="Np. Pracuję na etacie 8h dziennie, chcę mieć dodatkowy przychód 2-3k zł miesięcznie w ciągu 3 miesięcy..."
              />
              {errors.situation && (
                <p className="mt-1 text-sm text-red-400">{errors.situation}</p>
              )}
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-300 mb-2">
                Skąd się o nas dowiedziałeś? (opcjonalne)
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500"
                placeholder="Np. Google, Facebook, polecenie od..."
              />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <span className="text-sm text-gray-300">
                  Rozumiem, że konsultacja nie jest obietnicą konkretnych zarobków, tylko wspólnym
                  sprawdzeniem, czy współpraca ma sens. <span className="text-red-400">*</span>
                </span>
              </label>
              {errors.agreement && (
                <p className="mt-1 text-sm text-red-400">{errors.agreement}</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Send className="w-5 h-5 mr-2 animate-pulse" />
                  Wysyłanie...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij zgłoszenie
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-300">
                  <strong>Dzięki!</strong> Dostaliśmy Twoje zgłoszenie. Odezwiemy się możliwie
                  szybko (zwykle tego samego dnia).
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-300">
                  Coś poszło nie tak przy wysyłaniu formularza. Spróbuj ponownie za chwilę albo
                  napisz bezpośrednio na{' '}
                  <a href="mailto:kontakt@earninglab.pl" className="underline hover:text-red-200">
                    kontakt@earninglab.pl
                  </a>
                  .
                </div>
              </div>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}
