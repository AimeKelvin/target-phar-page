'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(true);

  // Optional: prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showModal]);

  const handleLanguageSelect = (lang: string) => {
    console.log('Selected language:', lang);
    setShowModal(false);
    // You can add more logic here, like storing selection in localStorage or context
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative w-full min-h-screen bg-white text-gray-900`}>
        {/* Soft background gradient */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#f9fef9] via-white to-[#eef5ea]" />

        {/* Optional texture overlay */}
        <div className="fixed z-10 pointer-events-none opacity-[0.03] bg-repeat" />

        {/* Glassy modal overlay */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md"
            aria-modal="true"
            role="dialog"
            aria-labelledby="language-modal-title"
            aria-describedby="language-modal-description"
          >
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-10 max-w-md mx-4 text-center">
              <h2 id="language-modal-title" className="text-2xl font-bold mb-6 text-gray-900">
                Please select your language
              </h2>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleLanguageSelect('en')}
                  className="py-3 px-6 rounded-lg bg-[#207ae1] text-white font-semibold hover:bg-[#1863b5] transition"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelect('fr')}
                  className="py-3 px-6 rounded-lg bg-[#6fab1d] text-white font-semibold hover:bg-[#5c9718] transition"
                >
                  Français
                </button>
                <button
                  onClick={() => handleLanguageSelect('rw')}
                  className="py-3 px-6 rounded-lg bg-[#207ae1] text-white font-semibold hover:bg-[#1863b5] transition"
                >
                  Kinyarwanda
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  );
}
