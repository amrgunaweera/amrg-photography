import { Routes, Route } from 'react-router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCpjSxqqgcmB4R--o0tegy2fwF4tsoUoxI",
  authDomain: "amrg-projects.firebaseapp.com",
  projectId: "amrg-projects",
  storageBucket: "amrg-projects.firebasestorage.app",
  messagingSenderId: "983114754283",
  appId: "1:983114754283:web:303a7448a687b5eed676ae",
  measurementId: "G-QFQYBHP894"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:category" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
