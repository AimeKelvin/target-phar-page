'use client';

import { FC } from 'react';
import { Inter } from 'next/font/google';
import RevealOnScroll from '@/utils/RevealOnScroll';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Description: FC = () => {
  return (
    <section className={`relative w-full min-h-screen px-6 py-20 bg-white text-gray-900 ${inter.className}`}>
      
      <RevealOnScroll>
        <h2 className="text-2xl md:text-3xl text-center mb-16 font-extrabold text-[#207ae1]">
          ABOUT COMPLEX
        </h2>
      </RevealOnScroll>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* OUR STORY */}
        <RevealOnScroll>
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold tracking-wide mb-4 text-[#6fab1d]">
              OUR STORY
              <span className="block w-14 h-[3px] bg-[#6fab1d] mt-2"></span>
            </h2>
            <p className="leading-relaxed text-sm md:text-base text-gray-800">
              Target complex started in 2012 in Musanze city, Rwanda. It began with a retail pharmacy (Iraguha Pharmacy) with 3 employees, selling prescription and non-prescription drugs to the public.
              <br /><br />
              Thanks to excellent public service and dedication, Iraguha Pharmacy became the most known pharmacy in the city. This led to the opening of a para-pharmaceutical company (Health Target) in 2018, selling non-medicinal products found in pharmacies.
              <br /><br />
              With growing popularity and trust, the success of both the parapharmacy and retail pharmacy inspired the launch of a wholesale company (Target Para and Pharmaceutical Wholesale Ltd) in Kigali.
              <br /><br />
              Today, the wholesale company supplies para and pharmaceutical products across Rwanda. With continued success, we aim to open a clinic and a manufacturing company in the near future.
            </p>
          </div>
        </RevealOnScroll>

        {/* INFO CARDS */}
        <RevealOnScroll>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'MISSION',
                content:
                  'To become the world’s leading private health company by providing a healthy and quality life for patients and clients.',
              },
              {
                title: 'OUR GOALS',
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Improve access to quality, safe, and effective health commodities.</li>
                    <li>Save and enhance lives through the best quality products.</li>
                    <li>Develop long-term partnerships with suppliers and entities.</li>
                    <li>Deliver consistent, client-centered service for all, everywhere.</li>
                  </ul>
                ),
              },
              {
                title: 'OUR MISSION',
                content:
                  'We embrace modern, convenient, and innovative healthcare solutions in everything we do.',
              },
              {
                title: 'OUR VALUES',
                content:
                  'Patient-centered care, Competency, Community-mindedness, Leadership, Collaboration, Excellence, Professionalism, Continuous improvement.',
              },
              {
                title: 'OUR SLOGAN',
                content:
                  'Access to quality health commodities — life and wealth always, everywhere, for all.',
                fullWidth: true,
              },
            ].map(({ title, content, fullWidth }, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border-[2px] border-[#6fab1d] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all ${
                  fullWidth ? 'sm:col-span-2' : ''
                }`}
              >
                <h3 className="text-lg font-bold text-[#6fab1d] mb-3">{title}</h3>
                <div className="text-sm text-gray-800">{content}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Description;
