// src/app/layout.tsx
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dmitrii Soltaganov – CV',
  description: 'Frontend Developer and Digital Strategist',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}