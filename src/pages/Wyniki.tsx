import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Zap, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import CheckList from '../components/ui/CheckList';

interface CaseStudy {
  id: string;
  program: 'ecomlab' | 'ai-skill-lab' | 'service-growth-lab';
  programLabel: string;
  title: string;
  start: string;
  actions: string[];
  timeframe: string;
  result: string;
  verificationNote: string;
  steps: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    program: 'ecomlab',
    programLabel: 'EcomLab',
    title: 'Case #1: Sklep 0→5k w miesiąc',
    start: 'Pomysł na produkt, zero sprzedaży, brak rozpoznawalności',
    actions: [
      'Zbudowanie MVP sklepu (Shopify) w 3 dni',
      'Kampanie Meta Ads na cold traffic (budżet 1500 zł)',
      'Optymalizacja landing page i checkout (A/B testy)'
    ],
    timeframe: '21 dni',
    result: '5200 zł przychodu, 12 zamówień, AOV 433 zł',
    verificationNote: 'Dashboard Shopify + screeny z Meta Ads Manager',
    steps: [
      'Diagnoza: niszowy produkt z wysokim marginesem',
      'Ustawienie sklepu + integracje płatności w 72h',
      'Kampanie testowe na 3 kreacje (500 zł każda)',
      'Skalowanie wygrywającej kreacji (CPA < 100 zł)',
      'Upsell w checkout (zwiększenie AOV o 18%)',
      'Feedback co 48h + iteracje kampanii'
    ]
  },
  {
    id: 'case-2',
    program: 'ai-skill-lab',
    programLabel: 'AI Skill Lab',
    title: 'Case #2: Freelance AI → 8k zlecenia',
    start: 'Doświadczenie w IT, zero oferty AI, brak klientów',
    actions: [
      'Stworzenie portfolio z 3 case studies (własne projekty)',
      'Cold outreach do 150 firm (LinkedIn + email)',
      'Pakietyzacja usług: audyt + wdrożenie + training'
    ],
    timeframe: '14 dni',
    result: '8400 zł z jednego projektu (audyt + prototyp chatbota)',
    verificationNote: 'Umowa + faktura + LinkedIn recommendations',
    steps: [
      'Pozycjonowanie: "AI automation dla e-commerce"',
      'Zbudowanie 3 demo projektów w 5 dni',
      'Cold outreach z personalizacją (response rate 11%)',
      'Pakiet: 3500 audyt + 4900 prototyp (łącznie 8400)',
      'Delivery w 10 dni roboczych',
      'Upsell: maintenance 1200/msc (nie wzięty w pierwszym projekcie)'
    ]
  },
  {
    id: 'case-3',
    program: 'service-growth-lab',
    programLabel: 'Service Growth Lab',
    title: 'Case #3: Agencja design 3k→12k MRR',
    start: '3000 zł/msc z 2 klientów, brak systemu pozyskiwania',
    actions: [
      'Rebranding oferty na pakiety subskrypcyjne',
      'LinkedIn content + DM strategy (30 dni aktywności)',
      'Referral program dla obecnych klientów'
    ],
    timeframe: '30 dni',
    result: '12 400 zł MRR (4 nowych klientów na pakiety)',
    verificationNote: 'Panel Stripe + LinkedIn analytics + faktury',
    steps: [
      'Analiza churn: dlaczego klienci odchodzą',
      'Pakiety: 1800/2900/4500 (starter/pro/enterprise)',
      'LinkedIn: 20 postów + 100 DM w miesiąc',
      '3 klientów z referrals (bonus: -10% przez 3 msc)',
      'Onboarding: proces 7 dni od wpłaty do startu',
      'Feedback co tydzień + optymalizacja oferty'
    ]
  },
  {
    id: 'case-4',
    program: 'ecomlab',
    programLabel: 'EcomLab',
    title: 'Case #4: Dropshipping → profitable w 10 dni',
    start: 'Testowanie produktów bez wyników, strata 2k w kampaniach',
    actions: [
      'Zmiana modelu: od losowych produktów do research-driven selection',
      'Nowa struktura kampanii (interest stacking + lookalike)',
      'Retargeting + email follow-up (sekwencje 7 dni)'
    ],
    timeframe: '10 dni',
    result: 'Pierwszy zyskowny produkt: 4100 zł przychodu, 1200 zł profit',
    verificationNote: 'Dashboard Shopify + Meta Ads (ROAS 2.1)',
    steps: [
      'Analiza failed campaigns: dlaczego nie działały',
      'Research: winning products z ostatnich 30 dni (narzędzia spy)',
      'Test 3 produktów po 300 zł budżetu',
      'Wygrał: gadżet lifestyle, CPA 38 zł, AOV 120 zł',
      'Skalowanie: 1500 zł → 3000 zł/dzień',
      'Email flow: abandoned cart + upsell (conversion +9%)'
    ]
  },
  {
    id: 'case-5',
    program: 'ai-skill-lab',
    programLabel: 'AI Skill Lab',
    title: 'Case #5: SaaS micro-niche → pierwsi płacący',
    start: 'Pomysł na AI tool, brak MVP, zero userów',
    actions: [
      'MVP w 7 dni (no-code + OpenAI API)',
      'Beta launch na Product Hunt + IndieHackers',
      'Pricing: freemium → paid tier (39$/msc)'
    ],
    timeframe: '21 dni',
    result: '12 płacących userów, 468$ MRR',
    verificationNote: 'Dashboard Stripe + Product Hunt analytics',
    steps: [
      'Walidacja: 50 rozmów z potencjalnymi userami',
      'MVP: Bubble.io + OpenAI API integration',
      'Landing page + onboarding w 3 dni',
      'Launch: Product Hunt (87 upvotes, #5 of the day)',
      'Cold outreach do 200 osób z waitlisty',
      'Iteracje UX co 48h na podstawie feedbacku'
    ]
  },
  {
    id: 'case-6',
    program: 'service-growth-lab',
    programLabel: 'Service Growth Lab',
    title: 'Case #6: Konsulting → podwojenie stawek',
    start: 'Godzinowe rozliczenia 150 zł/h, niestabilne zlecenia',
    actions: [
      'Pivot: od godzin do projektów pakietowych',
      'Repositioning: ekspert niszowy zamiast generalisty',
      'Case studies + testimonials na landing page'
    ],
    timeframe: '14 dni',
    result: 'Nowy pakiet 8500 zł (ekwiwalent 280 zł/h), 2 sprzedaże',
    verificationNote: 'Umowy + faktury + LinkedIn testimonials',
    steps: [
      'Analiza: co przynosi najwięcej value klientom',
      'Pakiet: "90-day growth audit + implementation plan"',
      'Positioning: "Growth dla SaaS B2B 10-50 osób"',
      'Outreach do 30 firm z targetem (10% conversion)',
      'Delivery: 2 spotkania/tydzień + raport końcowy',
      'Upsell: retainer 3500/msc (1 z 2 klientów wziął)'
    ]
  }
];

const faqItems = [
  {
    question: 'Czy te wyniki są gwarantowane?',
    answer: 'Nie gwarantujemy konkretnych wyników, bo zależą od Twojego startu, zasobów, czasu i egzekucji. Case studies pokazują realne scenariusze, ale każda sytuacja jest inna. Jeśli w konsultacji nie widzimy realnej ścieżki do wyniku – powiemy wprost.'
  },
  {
    question: 'Co jeśli startuję od zera?',
    answer: 'Większość case studies to start 0→1 lub optymalizacja czegoś, co nie działa. Nie musisz mieć produktu, klientów ani budżetu. Musisz mieć czas (min. 10h/tydzień) i gotowość do egzekucji. Resztę ustawiamy w planie.'
  },
  {
    question: 'Ile czasu tygodniowo potrzeba?',
    answer: 'Minimum 10h/tydzień na egzekucję zadań. Jeśli masz mniej – lepiej poczekać, aż będziesz gotowy. Program to nie teoria, tylko działania. Bez czasu na wdrożenie – nie ma wyniku.'
  },
  {
    question: 'Czy potrzebuję budżetu na start?',
    answer: 'Zależy od ścieżki. EcomLab: tak, min. 1500-3000 zł na testy kampanii. AI Skill Lab: nie, możesz startować z portfolio i cold outreach. Service Growth Lab: nie, ale dobrze mieć bufor na narzędzia (CRM, landing page).'
  },
  {
    question: 'Jak weryfikujecie case studies?',
    answer: 'Każdy case ma notatkę "dowód": screeny z dashboardów (Shopify, Stripe, Meta Ads), faktury, umowy, LinkedIn recommendations. Nie publikujemy danych bez zgody klienta. Jeśli coś brzmi zbyt pięknie – pytaj o szczegóły.'
  },
  {
    question: 'Dlaczego niektóre case studies mają krótszy timeframe?',
    answer: 'Bo skupiamy się na "czasie do pierwszego efektu", nie na pełnym ROI. 7-21 dni to realistyczny horyzont na pierwsze sygnały (sprzedaż, lead, kontrakt). Skalowanie i stabilizacja to kolejne fazy, które trwają dłużej.'
  },
  {
    question: 'Co jeśli mój case nie będzie taki spektakularny?',
    answer: 'To normalne. Większość wyników to małe kroki: 500 zł pierwszej sprzedaży, 1 client, 5 leadów. Te case studies to po prostu przykłady. Twój wynik zależy od Twojej sytuacji. Jeśli osiągniesz mniejszy cel, ale będzie to progress – to sukces.'
  }
];

export default function Wyniki() {
  usePageTitle('Wyniki klientów | EarningLab');

  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleCase = (id: string) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const getProgramBadgeVariant = (program: string) => {
    switch (program) {
      case 'ecomlab':
        return 'cyan';
      case 'ai-skill-lab':
        return 'purple';
      case 'service-growth-lab':
        return 'blue';
      default:
        return 'default';
    }
  };

  return (
    <>
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="cyan" showPulse>
              Case Studies
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Wyniki, które da się{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                zrozumieć i zweryfikować
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Case studies + konkretne metryki. Bez magii, bez teorii – proces, decyzje i efekty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/konsultacja">
                <Button variant="primary" size="lg">
                  Umów konsultację
                </Button>
              </Link>
              <Link to="/programy#programy-list">
                <Button variant="secondary" size="lg">
                  Zobacz programy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section hasBorder>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card variant="cyan">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1–5 dni*</div>
              <div className="text-gray-300">Czas do 1. efektu</div>
            </div>
          </Card>

          <Card variant="purple">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0→1 Dni</div>
              <div className="text-gray-300">Najczęstszy start</div>
            </div>
          </Card>

          <Card variant="default">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Plan + 1:1</div>
              <div className="text-gray-300 text-sm">Model pracy</div>
            </div>
          </Card>
        </div>

        <p className="text-sm text-gray-400 mt-8 text-center italic">
          *Zależy od punktu startu, czasu i budżetu. Pokazujemy zakresy z case studies.
        </p>
      </Section>

      <Section id="case-studies" hasBorder>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Case Studies</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Realne projekty, realne wyniki. Kliknij "Zobacz jak to zrobiliśmy", żeby zobaczyć proces krok po kroku.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} variant={getProgramBadgeVariant(caseStudy.program)} className="flex flex-col">
              <div className="mb-4">
                <Badge variant={getProgramBadgeVariant(caseStudy.program)}>
                  {caseStudy.programLabel}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>

              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Start:</div>
                  <p className="text-gray-300 text-sm">{caseStudy.start}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Działania:</div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {caseStudy.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Efekt w:</div>
                  <p className="text-gray-300 text-sm">{caseStudy.timeframe}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Wynik:</div>
                  <p className="text-white font-semibold text-sm">{caseStudy.result}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Dowód / weryfikacja:</div>
                  <p className="text-gray-400 text-xs italic">{caseStudy.verificationNote}</p>
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => toggleCase(caseStudy.id)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 hover:border-cyan-500/30"
                >
                  <span className="text-sm font-semibold">Zobacz jak to zrobiliśmy</span>
                  {expandedCase === caseStudy.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {expandedCase === caseStudy.id && (
                  <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-sm font-semibold text-cyan-400 mb-3">Krok po kroku:</div>
                    <ol className="space-y-2">
                      {caseStudy.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section hasBorder>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Jak to działa</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nie sprzedajemy marzeń — sprzedajemy egzekucję.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="cyan">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Diagnoza sytuacji</h3>
            <p className="text-gray-300 text-sm">
              Cel / zasoby / ograniczenia. Ustalamy, co jest realne w Twoim przypadku.
            </p>
          </Card>

          <Card variant="purple">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Oferta i plan na 7 dni</h3>
            <p className="text-gray-300 text-sm">
              Co sprzedajesz, komu, za ile. Plus konkretne zadania na pierwszy tydzień.
            </p>
          </Card>

          <Card variant="blue">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Egzekucja</h3>
            <p className="text-gray-300 text-sm">
              Wykonujesz zadania. Dostajesz feedback 1:1 i poprawki w czasie rzeczywistym.
            </p>
          </Card>

          <Card variant="default">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-2">Iteracja</h3>
            <p className="text-gray-300 text-sm">
              Optymalizujemy to, co działa. Wycinamy to, co nie działa. Skalujemy wyniki.
            </p>
          </Card>
        </div>
      </Section>

      <Section hasBorder>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Co skealuje najbardziej</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            3 obszary, które decydują o wyniku. Każdy musi działać.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card variant="cyan">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold">Oferta</h3>
            </div>
            <CheckList
              items={[
                'Jasny promise (co dostanę, kiedy, za ile)',
                'Pricing dopasowany do value i grupy docelowej',
                'Pakiety (starter/pro/enterprise) zamiast custom',
                'Social proof (case studies, testimonials, liczby)'
              ]}
              variant="cyan"
            />
          </Card>

          <Card variant="purple">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Dystrybucja</h3>
            </div>
            <CheckList
              items={[
                'Ruch: organiczny (SEO/content) lub płatny (ads)',
                'DM strategy (cold outreach z personalizacją)',
                'Reklamy (Meta/Google) z jasnym targetem',
                'Partnerzy / referrals (polecenia + program bonusowy)'
              ]}
              variant="purple"
            />
          </Card>

          <Card variant="blue">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">System</h3>
            </div>
            <CheckList
              items={[
                'Proces sprzedaży (lead → close w max 7 dni)',
                'Follow-up automatyczny (email sequences)',
                'Dowóz usługi/produktu bez chaosu',
                'Feedback loop (mierzenie + optymalizacja)'
              ]}
              variant="blue"
            />
          </Card>
        </div>
      </Section>

      <Section hasBorder>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">FAQ</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Najczęściej zadawane pytania o wyniki i proces.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold pr-4">{item.question}</span>
                {expandedFaq === `faq-${index}` ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>

              {expandedFaq === `faq-${index}` && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section hasBorder>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Chcesz sprawdzić, czy to ma sens u Ciebie?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Jeśli nie widzimy realnej ścieżki — powiemy wprost. Bez marnowania czasu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/konsultacja">
              <Button variant="primary" size="lg">
                Umów konsultację
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="secondary" size="lg">
                Napisz do nas
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
