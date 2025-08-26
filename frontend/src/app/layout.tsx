'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/blocks/Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
     
      <body className={`${inter.className} relative w-full min-h-screen bg-white text-gray-900`}>

        {/* Soft background gradient */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#f9fef9] via-white to-[#eef5ea]" />

        {/* Optional texture overlay */}
        <div className="fixed inset-0 z-10 pointer-events-none opacity-[0.03]  bg-repeat" />

        {/* Main content */}
        <div className="relative z-20">
         
          {children}</div>
      </body>
    </html>
  );
}
