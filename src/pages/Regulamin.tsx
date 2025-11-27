import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Regulamin() {
  usePageTitle('Regulamin');

  return (
    <>
      <SEO
        title="Regulamin świadczenia usług"
        description="Regulamin świadczenia usług drogą elektroniczną EarningLab.pl"
        path="/regulamin"
      />

      <div className="min-h-screen pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Strona główna
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Regulamin</span>
          </nav>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Regulamin świadczenia usług drogą elektroniczną
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
                  <li>Niniejszy Regulamin określa zasady świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego EarningLab.pl.</li>
                  <li>Usługodawcą jest właściciel Serwisu Jakub Nakonieczny</li>
                  <li>Korzystając z Serwisu Użytkownik akceptuje niniejszy Regulamin zgodnie z art. 8 ust. 1 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (UŚUDE).</li>
                  <li>Serwis świadczy usługi drogą elektroniczną w rozumieniu art. 2 pkt 4 UŚUDE, w szczególności:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>a) udostępnianie treści cyfrowych,</li>
                      <li>b) realizację płatnych programów rozwojowych,</li>
                      <li>c) dostarczanie planów działania oraz wskazówek indywidualnych,</li>
                      <li>d) możliwość kontaktu za pośrednictwem formularzy elektronicznych.</li>
                    </ul>
                  </li>
                  <li>Regulamin jest dostępny nieodpłatnie w formie umożliwiającej jego pobieranie, utrwalanie i odtwarzanie.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§2.</span>
                  DEFINICJE
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Serwis – strona internetowa EarningLab.pl.</li>
                  <li>Użytkownik / Klient – osoba fizyczna korzystająca z Serwisu, zawierająca umowę o świadczenie usług.</li>
                  <li>Usługa – płatny program, pakiet, konsultacja, plan działania lub wsparcie 1:1 oferowane przez Serwis.</li>
                  <li>Materiały – treści cyfrowe, instrukcje, zadania, wideo, plany działania oraz wszelkie treści dostarczane Klientowi.</li>
                  <li>Program – indywidualna usługa rozwojowa (np. EcomLab, AI Skill Lab), dostarczana w sposób elektroniczny.</li>
                  <li>Konsultacja – usługa świadczona jednorazowo lub cyklicznie polegająca na analizie sytuacji Klienta.</li>
                  <li>Administrator – Usługodawca będący administratorem danych osobowych zgodnie z RODO.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§3.</span>
                  WARUNKI TECHNICZNE
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Do korzystania z Serwisu wymagane jest:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>a) dostęp do sieci Internet,</li>
                      <li>b) urządzenie z aktualną przeglądarką internetową,</li>
                      <li>c) aktywny adres e-mail do komunikacji.</li>
                    </ul>
                  </li>
                  <li>Usługodawca nie odpowiada za problemy wynikające z ograniczeń technicznych po stronie Klienta.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§4.</span>
                  ZAKRES USŁUG
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Usługodawca świadczy usługi polegające m.in. na:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>a) udostępnianiu indywidualnych programów działania,</li>
                      <li>b) przygotowaniu planu działania powiązanego z wybraną ścieżką (e-commerce, AI-skills, usługi),</li>
                      <li>c) udzielaniu wsparcia 1:1 zgodnie z opisem wybranego programu,</li>
                      <li>d) konsultacjach w formie elektronicznej.</li>
                    </ul>
                  </li>
                  <li>Usługi mają charakter usług rozwojowych i doradczych. Nie stanowią kursu w formie tradycyjnej.</li>
                  <li>Klient otrzymuje instrukcje i zadania indywidualne, zgodnie z art. 2 pkt 5 ustawy o prawach konsumenta (treści cyfrowe nie dostarczane na nośniku materialnym).</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§5.</span>
                  ZAWARCIE UMOWY
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Umowa o świadczenie usług zostaje zawarta z chwilą dokonania płatności przez Klienta.</li>
                  <li>Płatności realizowane są poprzez operatora płatności Stripe.</li>
                  <li>Zakup oznacza zgodę na dostarczenie treści cyfrowych przed upływem 14 dni od zakupu zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta.</li>
                  <li>Klient wyraża zgodę na utratę prawa odstąpienia od umowy w momencie uzyskania dostępu do planu działania i materiałów (art. 38 pkt 13 ustawy).</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§6.</span>
                  PRAWO ODSTĄPIENIA
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Klient będący konsumentem ma prawo odstąpić od umowy w terminie 14 dni, o ile nie doszło do rozpoczęcia wykonania usługi.</li>
                  <li>Ze względu na charakter usług indywidualnych i dostarczanie treści cyfrowych – po udostępnieniu planu działania oraz rozpoczęciu realizacji wsparcia 1:1, prawo odstąpienia NIE PRZYSŁUGUJE (art. 38 pkt 1 i pkt 13 ustawy).</li>
                  <li>Klient może złożyć reklamację poprzez e-mail.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§7.</span>
                  REKLAMACJE
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Reklamacje można kierować na adres: kontakt@earninglab.pl.</li>
                  <li>Reklamacja powinna zawierać: imię, e-mail, opis problemu i żądanie.</li>
                  <li>Usługodawca rozpatruje reklamacje w terminie 14 dni.</li>
                  <li>Usługodawca może odmówić świadczenia usług, jeśli uzna, że program nie przyniesie Klientowi efektów z przyczyn niezależnych od instrukcji.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§8.</span>
                  ODPOWIEDZIALNOŚĆ
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Usługodawca nie gwarantuje określonych wyników finansowych ani biznesowych – rezultaty zależą od Klienta.</li>
                  <li>Serwis dostarcza narzędzia, strukturę działania i instrukcje, jednak nie odpowiada za decyzje biznesowe Klienta.</li>
                  <li>Użytkownik zobowiązany jest do korzystania z materiałów zgodnie z prawem i zasadami etyki.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§9.</span>
                  PRAWA AUTORSKIE
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Wszelkie treści udostępniane w ramach usług są chronione prawem autorskim na podstawie ustawy z 4 lutego 1994 r.</li>
                  <li>Zabrania się kopiowania, rozpowszechniania i udostępniania materiałów osobom trzecim.</li>
                  <li>W przypadku naruszeń Usługodawca ma prawo zakończyć współpracę i podjąć kroki prawne.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§10.</span>
                  OCHRONA DANYCH OSOBOWYCH
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Administratorem danych osobowych jest Usługodawca.</li>
                  <li>Dane przetwarzane są zgodnie z RODO oraz Polityką Prywatności dostępną na stronie /polityka.</li>
                  <li>Dane przetwarzane są w celu realizacji umowy, obsługi Klienta i celów marketingowych zgodnych z prawem.</li>
                  <li>Użytkownik ma prawo dostępu, sprostowania, usunięcia lub ograniczenia przetwarzania danych.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">§11.</span>
                  POSTANOWIENIA KOŃCOWE
                </h2>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Regulamin może ulec zmianie. Zmiany publikowane są na stronie Serwisu.</li>
                  <li>W sprawach nieuregulowanych zastosowanie mają przepisy:
                    <ul className="mt-2 ml-6 space-y-1 list-none">
                      <li>– Kodeksu cywilnego,</li>
                      <li>– ustawy o świadczeniu usług drogą elektroniczną,</li>
                      <li>– ustawy o prawach konsumenta,</li>
                      <li>– RODO.</li>
                    </ul>
                  </li>
                  <li>Regulamin wchodzi w życie z dniem publikacji.</li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
