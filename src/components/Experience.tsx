'use client';

import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey across research, education, and industry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-blue-600 font-semibold">{exp.organization}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        {exp.current && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                        <span className="text-gray-500 text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Business Contact</h4>
              <p className="text-blue-600 font-semibold text-sm mb-2">Digitus – Student Association</p>
              <p className="text-gray-500 text-sm mb-3">August 2023 – February 2024</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Planned and conducted meetings with companies across Norway to increase interest in students. 
                Entered into collaboration agreements with Genus AS and expanded students&apos; awareness of career opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Student Contact</h4>
              <p className="text-blue-600 font-semibold text-sm mb-2">Tekna – Technical-Natural Science Association</p>
              <p className="text-gray-500 text-sm mb-3">January 2025 – Present</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Arranged academic and social courses for students. Worked on student politics and students&apos; rights. 
                Gained organizational experience and opportunities for board and leadership tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
