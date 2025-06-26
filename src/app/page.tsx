'use client';

import { useLang } from '@/context/LangContext';

export default function HomePage() {
  const { lang } = useLang();

  const text = {
    en: {
      hero: 'Hi, I’m Dmitrii 👋',
      subtitle: 'Informatics student, frontend developer & digital strategist.',
      about: 'About Me',
      projects: 'Selected Projects',
      contact: 'Get in Touch',
    },
    no: {
      hero: 'Hei, jeg er Dmitrii 👋',
      subtitle: 'Informatikkstudent, frontend-utvikler og digital strateg.',
      about: 'Om meg',
      projects: 'Utvalgte Prosjekter',
      contact: 'Kontakt meg',
    },
  }[lang];

  return (
    <main className="space-y-24 px-6 py-12 max-w-4xl mx-auto text-gray-900">
      {/* Hero Section */}
      <section id="hero" className="text-center">
        <h1 className="text-5xl font-bold mb-4">{text.hero}</h1>
        <p className="text-xl text-gray-600">{text.subtitle}</p>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="text-3xl font-semibold mb-4">{text.about}</h2>
        <p className="text-gray-700">
          I’m passionate about creating digital products that are both beautiful and functional.
          With a background in cross-country skiing and a strong interest in design, code, and business —
          I build projects that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-3xl font-semibold mb-4">{text.projects}</h2>
        <p className="text-gray-700">
          Soon I’ll showcase some of the things I’ve built — from ski school websites to AI dashboards.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4">{text.contact}</h2>
        <p className="text-gray-700">
          You can reach me at <a href="mailto:dmitrii@example.com" className="text-blue-600 underline">dmitrii@example.com</a>
        </p>
      </section>
    </main>
  );
}
