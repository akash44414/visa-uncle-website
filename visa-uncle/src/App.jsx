import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UsaVisa from './pages/services/UsaVisa';
import UkVisa from './pages/services/UkVisa';
import SchengenVisa from './pages/services/SchengenVisa';
import EVisa from './pages/services/EVisa';
import StickerVisa from './pages/services/StickerVisa';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usa-visa" element={<UsaVisa />} />
            <Route path="/uk-visa" element={<UkVisa />} />
            <Route path="/schengen-visa" element={<SchengenVisa />} />
            <Route path="/e-visa" element={<EVisa />} />
            <Route path="/sticker-visa" element={<StickerVisa />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
