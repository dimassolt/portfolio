// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dmitry Soltaganov – Portfolio',
  description: 'Product-focused developer and data scientist specializing in fullstack development, API design, and data-driven solutions. Currently studying Informatics: Digital Economics and Leadership at University of Oslo.',
  keywords: 'fullstack developer, data scientist, React, Next.js, Python, TypeScript, portfolio',
  authors: [{ name: 'Dmitry Soltaganov' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}