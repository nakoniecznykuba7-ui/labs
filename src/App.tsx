import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programy from './pages/Programy';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0d1228] to-[#0a0e1a] text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programy" element={<Programy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
