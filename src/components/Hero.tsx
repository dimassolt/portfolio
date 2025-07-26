'use client';

import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            Hello, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dmitry
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {portfolioData.personal.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </a>
          <a 
            href="#projects"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors"
          >
            View my work
          </a>
        </div>

        {/* Location and quick info */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-lg">📍</span>
            <span>{portfolioData.personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">💼</span>
            <span>Available for opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <span>Product-focused developer</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
