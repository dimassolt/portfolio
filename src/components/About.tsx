'use client';

import { portfolioData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer bridging technology and business to create meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {portfolioData.personal.summary}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing Informatics: Digital Economics and Leadership at the University of Oslo, 
                I combine technical expertise with business acumen to build solutions that matter.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What drives me:</h4>
              <ul className="space-y-2">
                {portfolioData.personal.personality.map((trait, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats/Info cards */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="space-y-2">
                {portfolioData.personal.languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{language.split(' (')[0]}</span>
                    <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                      {language.includes('(') ? language.split('(')[1].replace(')', '') : 'Native'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Focus</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {portfolioData.education.program}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-xs text-gray-600">Technologies</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.certifications.map((cert, index) => (
                  <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
