import SEO from '../components/SEO';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PathCards from '../components/PathCards';
import ForWhom from '../components/ForWhom';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EarningLab',
    url: 'https://earninglab.pl',
    logo: 'https://earninglab.pl/earninglab-icon.png',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EarningLab',
    url: 'https://earninglab.pl',
  };

  return (
    <>
      <SEO
        title="EarningLab — konkretna ścieżka zarabiania online (plan + zadania + feedback 1:1)"
        description="Dobieramy ścieżkę i dajemy plan krok po kroku: zadania, checklisty i feedback 1:1. Bez lania wody — tylko to, co prowadzi do pierwszych wyników."
        path="/"
        ogType="website"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <HowItWorks />
      <PathCards />
      <ForWhom />
      <SocialProof />
      <FAQ />
    </>
  );
}
