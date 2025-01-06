import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent z-10" />
      
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://cdn.pixabay.com/vimeo/147785699/neural-5157.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-16 h-16 text-gold mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Monetize<span className="text-gold">AI</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your AI innovations into revenue. The premier marketplace for
            buying, selling, and discovering cutting-edge AI models.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="text-lg px-8 py-3 w-full md:w-auto"
              onClick={() => navigate('/marketplace')}
            >
              Explore Models
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-3 w-full md:w-auto"
              onClick={() => navigate('/upload')}
            >
              Upload Your Model
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}