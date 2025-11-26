import { useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';

export default function Zakup() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Dziękujemy za zakup | EarningLab"
        description="Instrukcje po zakupie i następne kroki."
        path="/zakup"
        robots="noindex, nofollow, noarchive"
      />
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Dziękujemy za zakup w EarningLab
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Twoja płatność została przyjęta. W ciągu kilku minut wyślemy na Twój e-mail szczegółowe instrukcje, jak wystartować z programem.
            </p>

            <div className="pt-8 pb-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Co dalej?</h2>

                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-gray-200">
                        Sprawdź skrzynkę mailową (oraz folder spam/oferty).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-gray-200">
                        W mailu znajdziesz linki, dostęp i pierwsze kroki.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-gray-200">
                        Jeśli czegoś brakuje – napisz na{' '}
                        <a
                          href="mailto:kontakt@earninglab.pl"
                          className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                        >
                          kontakt@earninglab.pl
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Wróć na stronę główną
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
