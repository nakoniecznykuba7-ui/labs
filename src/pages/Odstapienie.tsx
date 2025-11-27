import { useState } from 'react';
import { Send } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageTitle } from '../hooks/usePageTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Odstapienie() {
  usePageTitle('Formularz odstąpienia od umowy');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purchaseDate: '',
    program: '',
    transactionNumber: '',
    serviceStartDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = {
      access_key: '86cbb94c-68e4-45a1-9b3f-0fff3d973d5f',
      subject: 'Nowy formularz odstąpienia od umowy - EarningLab',
      from_name: 'EarningLab - Formularz odstąpienia',
      ...formData,
      statement: 'Oświadczam, że odstępuję od umowy o świadczenie usług zawartej z EarningLab.pl.',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          purchaseDate: '',
          program: '',
          transactionNumber: '',
          serviceStartDate: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SEO
        title="Formularz odstąpienia od umowy"
        description="Formularz odstąpienia od umowy - EarningLab.pl"
        path="/odstapienie"
      />

      <div className="min-h-screen pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Formularz odstąpienia od umowy
            </h1>
            <p className="text-xl text-gray-300">
              Jeśli chcesz odstąpić od umowy, wypełnij formularz poniżej.
            </p>
          </div>

          <Card className="mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Adres e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="jan@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="purchaseDate"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Data zakupu
                  </label>
                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceStartDate"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Data rozpoczęcia korzystania z usługi
                  </label>
                  <input
                    type="date"
                    id="serviceStartDate"
                    name="serviceStartDate"
                    value={formData.serviceStartDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Nazwa programu/pakietu
                </label>
                <input
                  type="text"
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Np. Trading Base Camp"
                />
              </div>

              <div>
                <label
                  htmlFor="transactionNumber"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Numer transakcji <span className="text-gray-500">(opcjonalne)</span>
                </label>
                <input
                  type="text"
                  id="transactionNumber"
                  name="transactionNumber"
                  value={formData.transactionNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Np. TXN123456789"
                />
              </div>

              <div className="pt-4">
                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4 mb-6">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <span className="font-semibold text-cyan-400">Oświadczenie:</span>
                    <br />
                    Oświadczam, że odstępuję od umowy o świadczenie usług zawartej z EarningLab.pl.
                  </p>
                </div>

                {isSuccess && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <p className="text-green-400 text-sm">
                      Formularz został wysłany. Odpowiemy maksymalnie w 48h.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Wysyłanie...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Wyślij formularz
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>

          <Card className="bg-amber-500/5 border-amber-500/20">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-400 text-lg font-bold">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">
                  Informacja prawna
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Zgodnie z art. 38 pkt 1 i 13 ustawy o prawach konsumenta – jeśli usługa została rozpoczęta (np. otrzymałeś plan działania lub materiały), prawo odstąpienia może nie przysługiwać.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
