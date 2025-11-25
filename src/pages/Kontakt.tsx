import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Temat jest wymagany';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana';
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
      formPayload.append('message', `Temat: ${formData.subject}\n\n${formData.message}`);
      formPayload.append('from_name', 'EarningLab Website');
      formPayload.append('subject', 'Nowa wiadomość z formularza kontaktowego EarningLab');

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
          subject: '',
          message: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      <section className="pt-28 md:pt-36 pb-8 md:pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Napisz do nas
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Masz pytanie o programy, współpracę albo chcesz sprawdzić, czy możemy Ci pomóc?
              Napisz – odpowiemy możliwie szybko.
            </p>

            <div className="flex items-center justify-center gap-2 pt-6">
              <Mail className="w-5 h-5 text-[#00baff]" strokeWidth={1.5} />
              <a
                href="mailto:kontakt@earninglab.pl"
                className="text-lg font-medium text-[#00baff] hover:text-cyan-300 transition-colors"
              >
                kontakt@earninglab.pl
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 px-6">
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Jeśli wolisz szybszy kontakt niż mail — wypełnij formularz poniżej.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Imię
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
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
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
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Temat
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.subject ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500`}
                placeholder="W jakiej sprawie piszesz?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors.message ? 'border-red-500' : 'border-white/10'
                } focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-500 resize-none`}
                placeholder="Twoja wiadomość..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Send className="w-5 h-5 mr-2 animate-pulse" />
                  Wysyłanie...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij wiadomość
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-300">
                  <strong>Dzięki!</strong> Dostaliśmy Twoją wiadomość. Odezwę się maksymalnie w 6 godzin.
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-300">
                  Coś poszło nie tak przy wysyłaniu formularza. Spróbuj ponownie za chwilę albo napisz bezpośrednio na{' '}
                  <a href="mailto:kontakt@earninglab.pl" className="underline hover:text-red-200">
                    kontakt@earninglab.pl
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
