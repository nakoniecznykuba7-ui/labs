import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PathCards from './components/PathCards';
import ForWhom from './components/ForWhom';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0d1228] to-[#0a0e1a] text-white">
      <Navigation />
      <Hero />
      <HowItWorks />
      <PathCards />
      <ForWhom />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
