import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Polityka() {
  usePageTitle('Polityka Prywatności');

  return (
    <>
      <SEO
        title="Polityka Prywatności i Cookies"
        description="Polityka Prywatności i plików Cookies serwisu EarningLab.pl"
        path="/polityka"
        robots="noindex, nofollow"
      />

      <div className="min-h-screen pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Strona główna
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Polityka prywatności</span>
          </nav>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Polityka Prywatności i Plików Cookies
            </h1>
            <p className="text-xl text-gray-300 mb-2">EARNINGLAB.PL</p>
            <p className="text-sm text-gray-400 mb-12">Ostatnia aktualizacja: 25.11.2025</p>

            <div className="space-y-12 text-gray-200 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§1.</span>
                  POSTANOWIENIA OGÓLNE
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych Użytkowników serwisu EarningLab.pl oraz zasady stosowania plików cookies.</li>
                  <li>Administratorem danych osobowych („Administrator") jest właściciel serwisu EarningLab.pl.</li>
                  <li>Dane osobowe przetwarzane są zgodnie z:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>— Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO),</li>
                      <li>— ustawą o ochronie danych osobowych,</li>
                      <li>— ustawą o świadczeniu usług drogą elektroniczną,</li>
                      <li>— ustawą Prawo telekomunikacyjne.</li>
                    </ul>
                  </li>
                  <li>Korzystanie z Serwisu oznacza akceptację niniejszej Polityki.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§2.</span>
                  CELE I PODSTAWY PRZETWARZANIA DANYCH
                </h2>
                <p className="mb-4">Administrator przetwarza dane osobowe użytkowników w następujących celach:</p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li><strong className="text-white">Realizacja zamówienia / programu</strong><br />
                    <span className="text-gray-300">Podstawa: art. 6 ust. 1 lit. b RODO (wykonanie umowy).</span>
                  </li>
                  <li><strong className="text-white">Kontakt poprzez formularz kontaktowy lub e-mail</strong><br />
                    <span className="text-gray-300">Podstawa: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora – obsługa zapytań).</span>
                  </li>
                  <li><strong className="text-white">Prowadzenie rozliczeń finansowych i obsługa płatności (Stripe)</strong><br />
                    <span className="text-gray-300">Podstawa: art. 6 ust. 1 lit. c RODO (obowiązki prawne) oraz art. 6 ust. 1 lit. b RODO.</span>
                  </li>
                  <li><strong className="text-white">Wysyłanie komunikacji marketingowej</strong><br />
                    <span className="text-gray-300">Podstawa: art. 6 ust. 1 lit. a RODO (zgoda).</span>
                  </li>
                  <li><strong className="text-white">Analiza działania serwisu (statystyki, bezpieczeństwo)</strong><br />
                    <span className="text-gray-300">Podstawa: art. 6 ust. 1 lit. f RODO (uzasadniony interes administratora).</span>
                  </li>
                  <li><strong className="text-white">Tworzenie i przechowywanie dokumentacji finansowej</strong><br />
                    <span className="text-gray-300">Podstawa: art. 6 ust. 1 lit. c RODO (obowiązki podatkowe).</span>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§3.</span>
                  ZAKRES PRZETWARZANYCH DANYCH
                </h2>
                <p className="mb-3">Administrator może przetwarzać dane takie jak:</p>
                <ul className="space-y-2 ml-6 list-none">
                  <li>— imię,</li>
                  <li>— adres e-mail,</li>
                  <li>— numer telefonu (jeśli podany),</li>
                  <li>— dane dotyczące płatności,</li>
                  <li>— treść wiadomości z formularza,</li>
                  <li>— adres IP,</li>
                  <li>— dane techniczne urządzenia (przeglądarka, cookies).</li>
                </ul>
                <p className="mt-4">Administrator NIE przetwarza szczególnych kategorii danych (art. 9 RODO).</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§4.</span>
                  PRZEKAZYWANIE DANYCH
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Dane osobowe mogą być przekazywane:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>a) operatorowi płatności Stripe,</li>
                      <li>b) dostawcom hostingu i usług IT,</li>
                      <li>c) firmom księgowym,</li>
                      <li>d) podmiotom uprawnionym z mocy prawa.</li>
                    </ul>
                  </li>
                  <li>Dane nie są przekazywane do państw trzecich poza UE, z wyjątkiem usług, które zapewniają odpowiednie zabezpieczenia zgodnie z RODO (np. Stripe – Tarcza Danych).</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§5.</span>
                  OKRES PRZETWARZANIA
                </h2>
                <p className="mb-3">Dane przetwarzane są:</p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Do momentu realizacji usługi – dane kontraktowe.</li>
                  <li>Do czasu przedawnienia roszczeń – dane związane z zakupem (maks. 6 lat).</li>
                  <li>Do wycofania zgody – dane marketingowe.</li>
                  <li>Przez 180 dni – dane z formularzy kontaktowych, jeśli nie doszło do współpracy.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§6.</span>
                  PRAWA UŻYTKOWNIKA
                </h2>
                <p className="mb-3">Użytkownik ma prawo do:</p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Dostępu do swoich danych (art. 15 RODO).</li>
                  <li>Sprostowania danych (art. 16 RODO).</li>
                  <li>Usunięcia danych („prawo do bycia zapomnianym", art. 17 RODO).</li>
                  <li>Ograniczenia przetwarzania (art. 18 RODO).</li>
                  <li>Przeniesienia danych (art. 20 RODO).</li>
                  <li>Sprzeciwu wobec przetwarzania (art. 21 RODO).</li>
                  <li>Wniesienia skargi do Prezesa UODO.</li>
                </ol>
                <p className="mt-4">Wniosek można wysłać na adres: <a href="mailto:kontakt@earninglab.pl" className="text-cyan-400 hover:text-cyan-300 transition-colors">kontakt@earninglab.pl</a>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§7.</span>
                  BEZPIECZEŃSTWO DANYCH
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Administrator stosuje techniczne i organizacyjne środki bezpieczeństwa:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>— szyfrowanie SSL,</li>
                      <li>— kontrola dostępu,</li>
                      <li>— ochrona serwerów,</li>
                      <li>— zasada minimalizacji danych.</li>
                    </ul>
                  </li>
                  <li>Dane nie są profilowane w sposób wywołujący skutki prawne.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§8.</span>
                  PLIKI COOKIES
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Serwis wykorzystuje pliki cookies w celu:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>— zapewnienia prawidłowego działania strony,</li>
                      <li>— analityki,</li>
                      <li>— personalizacji treści,</li>
                      <li>— utrzymania sesji użytkownika.</li>
                    </ul>
                  </li>
                  <li>Użytkownik może zmienić ustawienia cookies w swojej przeglądarce.</li>
                  <li>Serwis może stosować cookies:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>— techniczne,</li>
                      <li>— analityczne (np. Google Analytics),</li>
                      <li>— marketingowe.</li>
                    </ul>
                  </li>
                  <li>Korzystanie z Serwisu bez zmiany ustawień przeglądarki oznacza zgodę na cookies.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§9.</span>
                  KONTAKT Z ADMINISTRATOREM
                </h2>
                <p>W sprawach dotyczących danych osobowych Użytkownik może kontaktować się na adres:<br />
                  <a href="mailto:kontakt@earninglab.pl" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">kontakt@earninglab.pl</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§10.</span>
                  ZMIANY POLITYKI
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Administrator zastrzega sobie prawo do zmian Polityki Prywatności.</li>
                  <li>O zmianach użytkownicy będą informowani poprzez publikację nowej wersji dokumentu na stronie /polityka.</li>
                  <li>Korzystanie z servisu po zmianach oznacza akceptację aktualnej Polityki.</li>
                </ol>
                <p className="mt-6 text-gray-300 italic">Polityka obowiązuje od dnia publikacji.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
