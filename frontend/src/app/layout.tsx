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

       <div className="fixed inset-0 z-0 bg-gradient-to-bl  dark:from-green-900 dark:via-gray-900 dark:to-emerald-950 bg-[length:400%_400%] transition-colors duration-500" />

        <div
          className="fixed inset-0 z-10 pointer-events-none opacity-20"
          
        />


        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}
