'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative w-full min-h-screen overflow-hidden`}>

        <div className="fixed inset-0 z-0 animate-[gradient_15s_ease_infinite] bg-gradient-to-bl from-gray-200 via-gray-300 to-gray-500 bg-[length:400%_400%]" />


        <div
          className="fixed inset-0 z-10 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />


        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}
