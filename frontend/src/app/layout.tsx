'use client';

import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative w-full min-h-screen`}>

        <div className="fixed inset-0 z-0  bg-gradient-to-bl from-gray-600 via-white to-gray-700 bg-[length:400%_400%]" />


        <div
          className="fixed inset-0 z-10 pointer-events-none opacity-20"
          
        />


        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}
