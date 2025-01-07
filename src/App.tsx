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
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import About from './pages/About';
import Blog from './pages/Blog';
import Upload from './pages/Upload';
import News from './pages/News';
import Donate from './pages/Donate';
import Documentation from './pages/Documentation';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/news" element={<News />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;