import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Marketplace from './pages/Marketplace';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;