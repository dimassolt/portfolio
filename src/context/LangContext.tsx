'use client';
// src/context/LangContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

// Define type
type Lang = 'en' | 'no';

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

// Create context
export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
});

// Hook to access the context
export const useLang = () => useContext(LangContext);

// Provider component
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
