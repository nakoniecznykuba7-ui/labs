import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programy from './pages/Programy';
import Kontakt from './pages/Kontakt';
import Zakup from './pages/Zakup';
import Konsultacja from './pages/Konsultacja';
import Wyniki from './pages/Wyniki';
import Regulamin from './pages/Regulamin';

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
      <Navigation />
      <main role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programy" element={<Programy />} />
          <Route path="/wyniki" element={<Wyniki />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/zakup" element={<Zakup />} />
          <Route path="/konsultacja" element={<Konsultacja />} />
          <Route path="/regulamin" element={<Regulamin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
