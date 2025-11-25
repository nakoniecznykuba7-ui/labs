import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programy from './pages/Programy';
import Kontakt from './pages/Kontakt';
import Zakup from './pages/Zakup';
import Konsultacja from './pages/Konsultacja';
import Wyniki from './pages/Wyniki';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0d1228] to-[#0a0e1a] text-white">
      <Helmet defaultTitle="Zacznij Zarabiać Online" titleTemplate="%s - EarningLab">
        <title>Zacznij Zarabiać Online</title>
      </Helmet>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programy" element={<Programy />} />
        <Route path="/wyniki" element={<Wyniki />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/zakup" element={<Zakup />} />
        <Route path="/konsultacja" element={<Konsultacja />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
