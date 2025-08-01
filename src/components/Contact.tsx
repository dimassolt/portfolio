'use client';

import { portfolioData } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Let&apos;s discuss how we can create something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
              Email Me
            </h3>
            <p className="text-gray-300">{portfolioData.personal.email}</p>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${portfolioData.personal.phone}`}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
              Call Me
            </h3>
            <p className="text-gray-300">{portfolioData.personal.phone}</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Find me online</h3>
          <div className="flex justify-center gap-6">
            <a 
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>📍</span>
            Based in {portfolioData.personal.location}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a 
            href={`mailto:${portfolioData.personal.email}?subject=Let's work together`}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
