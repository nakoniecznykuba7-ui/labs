import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PathCards from '../components/PathCards';
import ForWhom from '../components/ForWhom';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zacznij Zarabiać Online</title>
      </Helmet>
      <Hero />
      <HowItWorks />
      <PathCards />
      <ForWhom />
      <SocialProof />
      <FAQ />
    </>
  );
}
