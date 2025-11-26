import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import Modal from '../components/ui/Modal';

interface CaseStudy {
  id: string;
  program: 'ecomlab' | 'ai-skill-lab' | 'service-growth-lab';
  programLabel: string;
  title: string;
  start: string;
  quickActions: string[];
  timeframe: string;
  result: string;
  verificationNote: string;
  fullActions: string[];
  steps: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    program: 'ecomlab',
    programLabel: 'EcomLab',
    title: 'Sklep 0→5k w miesiąc',
    start: 'Pomysł na produkt, zero sprzedaży',
    quickActions: [
      'MVP sklepu w 24h',
      'Meta Ads: budżet 300 zł',
      'A/B testy checkout'
    ],
    timeframe: '21 dni',
    result: '5 200 zł przychodu, 12 zamówień',
    verificationNote: 'Dashboard Shopify + Meta Ads Manager',
    fullActions: [
      'Zbudowanie MVP sklepu (Shopify) w 24h',
      'Kampanie Meta Ads na cold traffic (budżet 300 zł)',
      'Optymalizacja landing page i checkout (A/B testy)'
    ],
    steps: [
      'Diagnoza: niszowy produkt z wysokim marginesem',
      'Ustawienie sklepu + integracje płatności w 24h',
      'Kampanie testowe na 3 kreacje (100 zł każda)',
      'Skalowanie wygrywającej kreacji (CPA < 20 zł)',
      'Upsell w checkout (zwiększenie AOV o 18%)',
      'Feedback co 48h + iteracje kampanii'
    ]
  },
  {
    id: 'case-2',
    program: 'ai-skill-lab',
    programLabel: 'AI Skill Lab',
    title: 'Freelance AI → 8k zlecenia',
    start: 'IT bez oferty AI, brak klientów',
    quickActions: [
      'Portfolio: 3 case studies',
      'Cold outreach: 150 firm',
      'Pakiety usług: audyt + wdrożenie'
    ],
    timeframe: '14 dni',
    result: '8 400 zł z jednego zlecenia',
    verificationNote: 'Umowa + faktura + LinkedIn',
    fullActions: [
      'Stworzenie portfolio z 3 case studies (własne projekty)',
      'Cold outreach do 150 firm (LinkedIn + email)',
      'Pakietyzacja usług: audyt + wdrożenie + training'
    ],
    steps: [
      'Pozycjonowanie: "AI automation dla e-commerce"',
      'Zbudowanie 3 demo projektów w 5 dni',
      'Cold outreach z personalizacją (response rate 11%)',
      'Pakiet klienta: 3 500 zł audyt + 4 900 zł prototyp (łącznie 8 400 zł)',
      'Delivery w 10 dni roboczych',
      'Upsell: maintenance 1 200 zł/msc (nie wzięty w pierwszym zleceniu)'
    ]
  },
  {
    id: 'case-3',
    program: 'service-growth-lab',
    programLabel: 'Service Growth Lab',
    title: 'Agencja design 3k→12k MRR',
    start: '3000 zł/msc, brak systemu',
    quickActions: [
      'Pakiety subskrypcyjne',
      'LinkedIn: content + DM',
      'Referral program'
    ],
    timeframe: '30 dni',
    result: '12 400 zł MRR (4 nowych klientów)',
    verificationNote: 'Stripe + LinkedIn analytics',
    fullActions: [
      'Rebranding oferty na pakiety subskrypcyjne',
      'LinkedIn content + DM strategy (30 dni aktywności)',
      'Referral program dla obecnych klientów'
    ],
    steps: [
      'Analiza churn: dlaczego klienci odchodzą',
      'Pakiety: 1 800 zł / 2 900 zł / 4 500 zł (starter/pro/enterprise)',
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
    title: 'Dropshipping → zysk w 10 dni',
    start: 'Strata bez naszej pomocy 500 zł w kampaniach',
    quickActions: [
      'Research-driven selection',
      'Interest stacking + lookalike',
      'Retargeting + email'
    ],
    timeframe: '10 dni',
    result: '4 100 zł przychodu, 2750 zł zysku',
    verificationNote: 'Shopify + Meta Ads (ROAS 2.1)',
    fullActions: [
      'Zmiana modelu: od losowych produktów do research-driven selection',
      'Nowa struktura kampanii (interest stacking + lookalike)',
      'Retargeting + email follow-up (sekwencje 7 dni)'
    ],
    steps: [
      'Analiza failed campaigns: dlaczego nie działały',
      'Research: winning products z ostatnich 30 dni (narzędzia spy)',
      'Test 3 produktów po 150 zł budżetu',
      'Wygrał: gadżet lifestyle, CPA 38 zł, AOV 120 zł',
      'Skalowanie: 1 500 zł → 3 000 zł/dzień',
      'Email flow: abandoned cart + upsell (conversion +9%)'
    ]
  },
  {
    id: 'case-5',
    program: 'ai-skill-lab',
    programLabel: 'AI Skill Lab',
    title: 'SaaS micro-niche → płacący',
    start: 'Pomysł na AI tool, brak MVP',
    quickActions: [
      'MVP w 7 dni (no-code + API)',
      'Product Hunt + IndieHackers',
      'Freemium → paid (39 USD/msc)'
    ],
    timeframe: '21 dni',
    result: '12 płacących użytkowników, 468 USD MRR',
    verificationNote: 'Stripe + Product Hunt',
    fullActions: [
      'MVP w 7 dni (no-code + OpenAI API)',
      'Beta launch na Product Hunt + IndieHackers',
      'Pricing: freemium → paid tier (39$/msc)'
    ],
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
    title: 'Konsulting → podwojenie stawek',
    start: '150 zł/h, niestabilne zlecenia',
    quickActions: [
      'Od godzin do pakietów',
      'Repositioning: ekspert niszowy',
      'Case studies na landing'
    ],
    timeframe: '14 dni',
    result: 'Pakiet 8 500 zł (280 zł/h), 2 sprzedaże',
    verificationNote: 'Umowy + faktury + LinkedIn',
    fullActions: [
      'Pivot: od godzin do projektów pakietowych',
      'Repositioning: ekspert niszowy zamiast generalisty',
      'Case studies + testimonials na landing page'
    ],
    steps: [
      'Analiza: co przynosi najwięcej value klientom',
      'Pakiet: "90-day growth audit + implementation plan"',
      'Positioning: "Growth dla SaaS B2B 10-50 osób"',
      'Outreach do 30 firm z targetem (10% conversion)',
      'Delivery: 2 spotkania/tydzień + raport końcowy',
      'Upsell: retainer 3 500 zł/msc (1 z 2 klientów wziął)'
    ]
  }
];

const faqItems = [
  {
    question: 'Czy te wyniki są gwarantowane?',
    answer: 'Tak - gwarantujemy, że będziemy działać z Tobą aż do efektu. Nie obiecujemy sztywnej liczby na koniec, bo każdy projekt ma inne zasoby i punkt startu - ale gwarantujemy proces, który prowadzimy aż do momentu, w którym pojawiają się realne wyniki. Dostajesz od nas długoterminowe wsparcie, bez dodatkowych kosztów - jesteśmy z Tobą, dopóki ścieżka działa i dowozimy kolejne kroki.'
  },
  {
    question: 'Co jeśli startuję od zera?',
    answer: 'Większość case studies to start 0→1 lub optymalizacja czegoś, co nie działa. Nie musisz mieć produktu, klientów ani budżetu. Musisz mieć czas (min. 5h/tydzień) i gotowość do działania. Resztę ustawiamy w planie.'
  },
  {
    question: 'Ile czasu tygodniowo potrzeba?',
    answer: 'Minimum 5h/tydzień na wykonanie zadań. Jeśli masz mniej – lepiej poczekać, aż będziesz gotowy. Program to nie teoria, tylko działania. Bez czasu na wdrożenie – nie ma wyniku.'
  },
  {
    question: 'Czy potrzebuję budżetu na start?',
    answer: 'Zależy od ścieżki. EcomLab: tak, min. 100-300 zł na testy kampanii. AI Skill Lab: nie, możesz startować z portfolio i cold outreach. Service Growth Lab: nie, ale dobrze mieć bufor na narzędzia (CRM, landing page).'
  },
  {
    question: 'Jak weryfikujecie case studies?',
    answer: 'Każdy case ma notatkę "dowód": screeny z dashboardów (Shopify, Stripe, Meta Ads), faktury, umowy, LinkedIn recommendations które otrzymaliśmy od naszych klientów. Nie publikujemy danych bez zgody klienta. Jeśli coś brzmi zbyt pięknie – pytaj o szczegóły.'
  },
  {
    question: 'Dlaczego niektóre case studies mają krótszy timeframe?',
    answer: 'Bo skupiamy się na "czasie do pierwszego efektu", nie na pełnym ROI. 5-10 dni to realistyczny horyzont na pierwsze sygnały (sprzedaż, lead, kontrakt). Skalowanie i stabilizacja to kolejne fazy, które trwają dłużej.'
  },
  {
    question: 'Co jeśli mój case nie będzie taki spektakularny?',
    answer: 'To normalne. Większość wyników to małe kroki: 500 zł pierwszej sprzedaży, 1 client, 5 leadów. Te case studies to po prostu przykłady. Twój wynik zależy od Twojej sytuacji. Jeśli osiągniesz mniejszy cel, ale będzie to progress – to sukces.'
  }
];

type FilterType = 'all' | 'ecomlab' | 'ai-skill-lab' | 'service-growth-lab';
type ScaleTab = 'oferta' | 'dystrybucja' | 'system';

export default function Wyniki() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://earninglab.pl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Wyniki',
        item: 'https://earninglab.pl/wyniki',
      },
    ],
  };

  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ScaleTab>('oferta');

  const filteredCases = filter === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.program === filter);

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

  const scrollToCaseStudies = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scaleContent = {
    oferta: {
      title: 'Oferta',
      description: 'Jasna obietnica + konkretny target + cena. Bez tego nawet dobry ruch się marnuje.',
      points: [
        'Jedna persona, jeden problem',
        'Jedno zdanie: co dostajesz i po co',
        'Prosta struktura pakietu (bez chaosu)'
      ]
    },
    dystrybucja: {
      title: 'Dystrybucja',
      description: 'Najpierw kanał, który dowiezie pierwsze rozmowy / zamówienia. Potem dopiero skalowanie.',
      points: [
        'DM / cold outreach / organic - na start',
        'Małe testy płatne tam, gdzie ma sens',
        'Retargeting dopiero po podstawach'
      ]
    },
    system: {
      title: 'System',
      description: 'Dowóz i iteracja co tydzień. Plan jest prosty, ale musi być wykonywany.',
      points: [
        'Checklisty + standard pracy',
        'Feedback loop: co 48h / co tydzień',
        'Jedno KPI na etap (bez rozkmin)'
      ]
    }
  };

  return (
    <>
      <SEO
        title="Wyniki | EarningLab"
        description="Przykłady wyników z realnych projektów: co zrobiliśmy, w jakim czasie i jaki był efekt. Zobacz proces krok po kroku."
        path="/wyniki"
        jsonLd={breadcrumbSchema}
      />
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

            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
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
              <div className="text-gray-200">Czas do 1. efektu</div>
            </div>
          </Card>

          <Card variant="purple">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0→1 Dni</div>
              <div className="text-gray-200">Najczęstszy start</div>
            </div>
          </Card>

          <Card variant="default">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Plan + 1:1</div>
              <div className="text-gray-200 text-sm">Model pracy</div>
            </div>
          </Card>
        </div>

        <p className="text-sm text-gray-400 mt-8 text-center italic">
          *Zależy od punktu startu, czasu i budżetu. Pokazujemy zakresy z case studies.
        </p>
      </Section>

      <Section id="case-studies" hasBorder>
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Przykłady wyników</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Realne projekty i liczby. Kliknij "Zobacz proces", żeby zobaczyć kroki – bez ściemy i bez lania wody.
          </p>
          <p className="text-sm text-gray-400 mt-3 max-w-2xl mx-auto">
            Pokazujemy konkretne przypadki. Wyniki zależą od branży, budżetu i wykonania.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-lg font-medium transition-all border ${
              filter === 'all'
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => setFilter('ecomlab')}
            className={`px-5 py-2 rounded-lg font-medium transition-all border ${
              filter === 'ecomlab'
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            EcomLab
          </button>
          <button
            onClick={() => setFilter('ai-skill-lab')}
            className={`px-5 py-2 rounded-lg font-medium transition-all border ${
              filter === 'ai-skill-lab'
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            AI Skill Lab
          </button>
          <button
            onClick={() => setFilter('service-growth-lab')}
            className={`px-5 py-2 rounded-lg font-medium transition-all border ${
              filter === 'service-growth-lab'
                ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            Service Growth Lab
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredCases.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              variant={getProgramBadgeVariant(caseStudy.program)}
              className="flex flex-col min-h-[520px]"
            >
              <div className="mb-4">
                <Badge variant={getProgramBadgeVariant(caseStudy.program)}>
                  {caseStudy.programLabel}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>

              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Start:</div>
                  <p className="text-gray-200 text-sm">{caseStudy.start}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Efekt w:</div>
                  <p className="text-gray-200 text-sm">{caseStudy.timeframe}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Wynik:</div>
                  <p className="text-white font-semibold text-sm">{caseStudy.result}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Dowód / weryfikacja:</div>
                  <p className="text-gray-400 text-xs italic">{caseStudy.verificationNote}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-cyan-400 mb-2">Co zrobiliśmy:</div>
                  <ul className="text-gray-200 text-sm space-y-1">
                    {caseStudy.quickActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => setSelectedCase(caseStudy)}
                  className="w-full h-11 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all font-medium text-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                >
                  Zobacz proces
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section hasBorder>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Co skaluje najbardziej</h2>
          <p className="text-lg text-gray-200 max-w-2xl">
            3 obszary, które decydują o wyniku. Każdy musi działać.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <div className="flex gap-2 mb-6 border-b border-white/10 justify-center">
            <button
              onClick={() => setActiveTab('oferta')}
              role="tab"
              aria-selected={activeTab === 'oferta'}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === 'oferta'
                  ? 'text-cyan-400 border-b-2 border-cyan-400 shadow-[0_2px_8px_rgba(6,182,212,0.2)]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Oferta
            </button>
            <button
              onClick={() => setActiveTab('dystrybucja')}
              role="tab"
              aria-selected={activeTab === 'dystrybucja'}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === 'dystrybucja'
                  ? 'text-purple-400 border-b-2 border-purple-400 shadow-[0_2px_8px_rgba(168,85,247,0.2)]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Dystrybucja
            </button>
            <button
              onClick={() => setActiveTab('system')}
              role="tab"
              aria-selected={activeTab === 'system'}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === 'system'
                  ? 'text-blue-400 border-b-2 border-blue-400 shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              System
            </button>
          </div>

          <Card variant="default" className="w-full max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              {activeTab === 'oferta' && <Target className="w-8 h-8 text-cyan-400" />}
              {activeTab === 'dystrybucja' && <Zap className="w-8 h-8 text-purple-400" />}
              {activeTab === 'system' && <TrendingUp className="w-8 h-8 text-blue-400" />}
              <h3 className="text-2xl font-bold">{scaleContent[activeTab].title}</h3>
            </div>

            <p className="text-gray-200 mb-6 leading-relaxed">
              {scaleContent[activeTab].description}
            </p>

            <ul className="space-y-3 mb-6">
              {scaleContent[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeTab === 'oferta' ? 'bg-cyan-500/20 text-cyan-400' :
                    activeTab === 'dystrybucja' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="text-gray-200 pt-0.5">{point}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToCaseStudies}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium inline-flex items-center gap-2"
            >
              Zobacz przykłady w case studies ⭡
            </button>
          </Card>
        </div>
      </Section>

      <Section hasBorder>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Jak to działa</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Nie sprzedajemy marzeń - sprzedajemy działanie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="cyan">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Diagnoza sytuacji</h3>
            <p className="text-gray-200 text-sm">
              Cel / zasoby / ograniczenia. Ustalamy, co jest realne w Twoim przypadku.
            </p>
          </Card>

          <Card variant="purple">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Oferta i plan na 7 dni</h3>
            <p className="text-gray-200 text-sm">
              Co sprzedajesz, komu, za ile. Plus konkretne zadania na pierwszy tydzień.
            </p>
          </Card>

          <Card variant="blue">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Egzekucja</h3>
            <p className="text-gray-200 text-sm">
              Wykonujesz zadania. Dostajesz feedback 1:1 i poprawki w czasie rzeczywistym.
            </p>
          </Card>

          <Card variant="default">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-2">Iteracja</h3>
            <p className="text-gray-200 text-sm">
              Optymalizujemy to, co działa. Wycinamy to, co nie działa. Skalujemy wyniki.
            </p>
          </Card>
        </div>
      </Section>

      <Section hasBorder>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">FAQ</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
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
                  <p className="text-gray-200 leading-relaxed">{item.answer}</p>
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
          <p className="text-lg text-gray-200 mb-8">
            Jeśli nie widzimy realnej ścieżki - powiemy wprost. Bez marnowania czasu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

      <Modal isOpen={selectedCase !== null} onClose={() => setSelectedCase(null)}>
        {selectedCase && (
          <div className="relative">
            <div className="mb-6 pt-4">
              <Badge variant={getProgramBadgeVariant(selectedCase.program)} className="mb-3">
                {selectedCase.programLabel}
              </Badge>
              <h2 className="text-3xl font-bold">{selectedCase.title}</h2>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Start</h3>
                <p className="text-gray-200">{selectedCase.start}</p>
              </div>

              <div className="pb-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Działania</h3>
                <ul className="space-y-2">
                  {selectedCase.fullActions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-200">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pb-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Krok po kroku</h3>
                <ol className="space-y-3">
                  {selectedCase.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-200">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pb-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Efekt w / Wynik</h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-gray-200 mb-2">
                    <span className="font-semibold">Timeframe:</span> {selectedCase.timeframe}
                  </p>
                  <p className="text-white font-semibold text-lg mb-4">{selectedCase.result}</p>

                  <div className="text-sm pt-3 border-t border-white/10">
                    <span className="text-gray-400 font-semibold">Dowód / weryfikacja:</span>
                    <p className="text-gray-400">{selectedCase.verificationNote}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gray-900/98 backdrop-blur-xl border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Link to="/programy" className="flex-1">
                <Button variant="primary" className="w-full h-12">
                  Wybierz program dla siebie
                </Button>
              </Link>
              <Link to="/konsultacja" className="flex-1">
                <Button variant="secondary" className="w-full h-12">
                  Umów konsultację
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
