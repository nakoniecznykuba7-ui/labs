import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-200 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Czy muszę mieć doświadczenie?',
      answer:
        'Nie. Większość osób, z którymi pracujemy, zaczyna od totalnego zera. Ważne jest to, żebyś był gotowy działać i uczyć się po drodze. Jeśli masz jakieś doświadczenie – super, będzie szybciej. Jeśli nie – nie ma problemu, zaczynamy od podstaw.',
    },
    {
      question: 'Co jeśli nie mam budżetu na reklamy?',
      answer:
        'Większość ścieżek da się zacząć bez żadnego budżetu lub z minimalnym (50–100 zł na testy). W AI Skill Lab i Service Growth Lab nie potrzebujesz reklam – skupiamy się na organicznym ruchu, DM i poleceń. W EcomLab czasem warto przetestować płatny ruch, ale nie jest to konieczne na start.',
    },
    {
      question: 'Ile czasu tygodniowo potrzebuję?',
      answer:
        'Minimum to 5–10 godzin tygodniowo, jeśli chcesz realne wyniki w rozsądnym czasie. Możesz robić więcej, jeśli masz czas – wtedy pójdzie szybciej. Jeśli masz mniej niż 5 godzin, szczerze mówiąc, ciężko będzie cokolwiek ruszyć – wtedy lepiej poczekać, aż będziesz miał więcej czasu.',
    },
    {
      question: 'Czym różnicie się od zwykłego kursu online?',
      answer:
        'W kursie dostajesz 50 modułów wideo i jesteś sam. U nas dostajesz konkretny plan dopasowany do Ciebie + feedback 1:1. Nie uczysz się teorii – od razu działasz. Korygujemy plan na bieżąco, jeśli coś nie działa. To bardziej przypomina mentoring niż kurs.',
    },
    {
      question: 'Czy dajecie jakąś gwarancję efektów?',
      answer:
        'Tak – dajemy gwarancję działania do efektu, a nie gwarancję konkretnych kwot. Jeśli wykonasz zadania z planu i będziesz działać zgodnie ze wskazówkami, a mimo to nie zobaczysz żadnych efektów (brak pierwszych klientów / zamówień / realnego progresu), to pracujemy z Tobą dalej za darmo, aż ten efekt się pojawi. W praktyce: Ty działasz i wdrażasz zadania, my odpowiadamy za plan, kierunek i poprawki. Finalnie nie możesz „przegrać" – albo masz efekt szybko, albo masz dłuższe wsparcie za tę samą cenę.',
    },
  ];

  return (
    <section className="py-10 md:py-12 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            FAQ – najczęstsze pytania
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
