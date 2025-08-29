'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Navbar from '@/components/blocks/Navbar';
import Footer from '@/components/blocks/Footer';
import { motion } from 'framer-motion';
import RevealOnScroll from '@/utils/RevealOnScroll';
import BlogSection from '@/components/blocks/Blog';
import { useState } from 'react';
const navLinks = [
  { href: '/health-target-parapharmatical', label: 'Home' },
  { href: '/', label: 'Target Complex' },
  { href: '/health-target-parapharmatical/products', label: 'Products' },
  { href: '/health-target-parapharmatical/contact', label: 'Contact', isButton: true },
];

const mediaItems = [
  {
    title: 'Community Outreach',
    src: 'https://images.unsplash.com/photo-1507537509458-b8312d6a6dc7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Modern Pharmacy Interior',
    src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Logistics Team at Work',
    src: 'https://images.unsplash.com/photo-1581093588401-4423f3199b08?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Customer Support Desk',
    src: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Health Awareness Seminar',
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Team Collaboration',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
];

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });



export default function CompanyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className={`${inter.className} text-gray-900`}>
      <Navbar links={navLinks} />


      <section className="min-h-screen flex flex-col justify-center bg-[#207ae1] text-white px-8 py-24">
        <RevealOnScroll>
          <h1 className="text-5xl font-extrabold max-w-4xl mx-auto text-center leading-tight">
            Delivering Trusted Healthcare Solutions Since 2012
          </h1>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="mt-8 text-lg max-w-3xl mx-auto text-center font-medium">
            Target Complex empowers communities with accessible pharmaceuticals, wellness products, and compassionate care across Rwanda.
          </p>
        </RevealOnScroll>

                  <button
  onClick={() => setIsModalOpen(true)}
  className="mt-8 mx-auto border cursor-pointer px-10 py-4 font-semibold bg-[#6fab1d] text-white transition duration-300"
>
  Read More
</button>

      </section>
{isModalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50"
    onClick={() => setIsModalOpen(false)} 
  >
    <div
      className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full relative text-gray-900"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-2xl text-center font-bold mb-4">More About Us</h2>
      <p className="text-sm leading-relaxed">
        Target Complex is committed to delivering comprehensive healthcare services,
        including pharmaceuticals, wellness products, and compassionate care.
        Serving communities across Rwanda since 2012, we prioritize accessibility,
        affordability, and quality in everything we offer.
      </p>
    </div>
  </div>
)}


      <section className="min-h-screen  px-8 py-24">
        <RevealOnScroll>
          <h2 className="text-[#207ae1] text-4xl font-extrabold mb-20 text-center">ABOUT OUR STORY</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="order-2 md:order-1  p-8 border-l-5 border-[#6fab1d]">
              <h3 className="text-2xl font-semibold mb-4">Rooted in Care</h3>
              <p className="text-gray-900">
                Beginning with a modest pharmacy in Musanze, we committed to bringing quality medicines closer to the people. Our journey is built on trust and dedication to community health.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacy team working"
                className="w-full h-[320px] object-cover"
              />
            </div>
            <div className="order-3 p-8 border-r-6 border-[#207ae1]">
              <h3 className="text-2xl font-semibold mb-4">Innovation & Growth</h3>
              <p className="text-gray-900">
                Expanding beyond retail, our parapharmaceutical and wholesale divisions serve a growing nation. Our vision extends to clinics and manufacturing to serve you better.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="mt-20 bg-[#207ae1] rounded-xl p-12 text-white max-w-4xl mx-auto shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
            <p className="text-lg leading-relaxed">
              We strive to be the healthcare partner you trust — delivering quality products, expert advice, and compassionate service that supports the wellness of every Rwandan.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <RevealOnScroll>
            <h2 className="text-3xl text-center font-bold text-[#207ae1] mb-12">What We Offer</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Retail Pharmacy',
                  desc: 'Wide range of prescription and OTC products available locally.',
                  icon: '💊',
                },
                {
                  title: 'Parapharmaceuticals',
                  desc: 'Supplying healthcare and wellness items to pharmacies.',
                  icon: '🧴',
                },
                {
                  title: 'Wholesale Distribution',
                  desc: 'Nationwide delivery of medical and para-medical products.',
                  icon: '🚚',
                },

              ].map((item, idx) => (
                <div key={idx} className="bg-white shadow-md p-6 border-t-4 border-[#6fab1d]">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <BlogSection />



      <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-[#207ae1] mb-12 text-center">
            STAFF MEMBERS
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="overflow-hidden w-full max-w-7xl">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {[...mediaItems, ...mediaItems].map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] w-[300px] flex-shrink-0 overflow-hidden "
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </RevealOnScroll>
      </section>


      <Footer />
    </main>
  );
}
