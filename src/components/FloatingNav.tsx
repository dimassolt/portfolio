'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'contact', label: 'Contact' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'hero', label: 'Home' },
];

const DISC_SIZE = 50; // Base size for calculations
const TOTAL_ITEMS = sections.length + 1; // +1 for the toggle button

export default function FloatingNav() {
  const [open, setOpen] = useState(false);

  // Auto-open menu after a delay (like in the example)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setOpen(true);
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Radial Navigation */}
      <nav 
        className={`fixed select-none transition-transform duration-500 ease-[cubic-bezier(0.3,1.4,0.5,0.9)] ${
          open 
            ? 'transform-none' 
            : 'translate-x-6 -translate-y-6'
        }`}
        style={{
          width: `${DISC_SIZE * TOTAL_ITEMS * 2}px`,
          height: `${DISC_SIZE * TOTAL_ITEMS * 2}px`,
          top: `-${DISC_SIZE * (TOTAL_ITEMS - 2.2)}px`,
          right: `-${DISC_SIZE * (TOTAL_ITEMS - 2.2)}px`,
          zIndex: 1000,
        }}
      >
        {/* Navigation items */}
        {sections.map((section, index) => {
          const itemIndex = index + 1; // Start from 1 since 0 will be the toggle
          const progress = index / sections.length;
          
          // Create color gradient from gold to tomato
          const hue1 = 45; // gold
          const hue2 = 9;  // tomato
          const hue = hue1 + (hue2 - hue1) * progress;
          const saturation = 80 + (20 * progress);
          const lightness = 60 - (10 * progress);
          
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick(section.id);
              }}
              className={`absolute inline-block text-center cursor-pointer font-bold transition-all duration-500 ease-[cubic-bezier(0.3,1.4,0.5,0.9)] rounded-full ${
                open 
                  ? 'pointer-events-auto opacity-100 scale-100 hover:brightness-90 active:brightness-50' 
                  : 'pointer-events-none opacity-0 scale-50'
              }`}
              style={{
                top: `${itemIndex * DISC_SIZE}px`,
                left: `${itemIndex * DISC_SIZE + 60}px`,
                right: `${itemIndex * DISC_SIZE + 60}px`,
                bottom: `${itemIndex * DISC_SIZE + 60}px`,
                fontSize: `${DISC_SIZE * 0.3}px`,
                lineHeight: `${DISC_SIZE * 0.5}px`,
                paddingTop: `${DISC_SIZE * 0.2}px`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                transform: open 
                  ? 'scale3d(1,1,1) rotate3d(0,0,1,210deg)' 
                  : 'scale3d(0.5,0.5,0.5) rotate3d(0,0,1,290deg)',
                transitionDelay: open 
                  ? `${index * 100}ms` 
                  : `${(sections.length - index) * 100}ms`,
              }}
            >
              <div 
                className="transform rotate-180"
                style={{ 
                  color: lightness > 50 ? '#333' : '#fff' 
                }}
              >
                {section.label}
              </div>
            </a>
          );
        })}

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className={`absolute inline-block text-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.3,1.4,0.5,0.9)] rounded-full font-bold opacity-100 pointer-events-auto ${
            open 
              ? 'hover:brightness-90 hover:underline active:brightness-50 active:scale-90' 
              : ''
          }`}
          style={{
            width: `${DISC_SIZE * 2}px`,
            height: `${DISC_SIZE * 2}px`,
            lineHeight: `${DISC_SIZE * 2}px`,
            padding: 0,
            fontSize: `${DISC_SIZE * 0.5}px`,
            backgroundColor: '#ffd700', // gold
            color: '#333',
            top: `${TOTAL_ITEMS * DISC_SIZE}px`,
            left: `${TOTAL_ITEMS * DISC_SIZE}px`,
            right: `${TOTAL_ITEMS * DISC_SIZE}px`,
            bottom: `${TOTAL_ITEMS * DISC_SIZE}px`,
            transform: open 
              ? 'scale3d(0.9,0.9,0.9) rotate3d(0,0,1,10deg)' 
              : 'none',
            transitionDuration: '0s',
          }}
        >
            <svg
            className="mk-hamburger-icon"
            width="30"
            height="30"
            viewBox="0 0 512 512"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            >
            <g>
              <path d="M36.57,73.14h182.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57 C16.39,146.29,0,129.89,0,109.71C0,89.5,16.39,73.14,36.57,73.14z M292.57,365.71h182.86c20.21,0,36.57,16.36,36.57,36.57 c0,20.18-16.36,36.57-36.57,36.57H292.57c-20.18,0-36.57-16.39-36.57-36.57C256,382.07,272.39,365.71,292.57,365.71z M36.57,219.43 h438.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57C16.39,292.57,0,276.18,0,256 C0,235.79,16.39,219.43,36.57,219.43z"></path>
            </g>
            </svg>
        </button>
      </nav>
    </>
  );
}