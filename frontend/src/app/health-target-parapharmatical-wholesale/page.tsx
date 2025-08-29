'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/blocks/Navbar';
import Footer from '@/components/blocks/Footer';
import { motion } from 'framer-motion';
import BlogSection from '@/components/blocks/Blog';
import RevealOnScroll from '@/utils/RevealOnScroll';

const mediaItems = [
  {
    title: 'Our Retail Pharmacy',
    src: 'https://i.pinimg.com/736x/e2/dc/99/e2dc995c0a241497f4bb42aeb827507b.jpg',
  },
  {
    title: 'Parapharma Product Showcase',
    src: 'https://images.unsplash.com/photo-1615041377584-94d728b8a6b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Warehouse Operations',
    src: 'https://images.unsplash.com/photo-1592842738419-bc9b3df9c40e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Pharmacy Front Desk',
    src: 'https://i.pinimg.com/736x/e2/dc/99/e2dc995c0a241497f4bb42aeb827507b.jpg',
  },
  {
    title: 'Health Awareness Campaign',
    src: 'https://images.unsplash.com/photo-1631217866403-3702d47d4171?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Staff and Team Culture',
    src: 'https://i.pinimg.com/736x/e2/dc/99/e2dc995c0a241497f4bb42aeb827507b.jpg',
  },
];


const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

const navLinks = [
  { href: '/health-target-parapharmatical-wholesale', label: 'Home' },
  { href: '/', label: 'target complex' },
  { href: '/health-target-parapharmatical-wholesale/products', label: 'Products' },
  { href: '/health-target-parapharmatical-wholesale/contact', label: 'Contact', isButton: true },
];

export default function CompanyPage() {
  return (
    <main className={`${inter.className} text-gray-900`}>
      <Navbar links={navLinks} />

      <section className="bg-[#207ae1] text-white min-h-screen flex items-center px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Who We Are
              </h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-lg font-medium max-w-xl">
                Since 2012, Target Complex has grown from a humble pharmacy in Musanze to a nationwide healthcare provider offering wholesale, parapharmaceuticals, and more.
              </p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div className="flex-1">
              <img
                src="https://i.pinimg.com/1200x/f8/f0/f9/f8f0f9e8d46440f2e3b4534bf3d20784.jpg"
                alt="Company overview"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className=" min-h-screen px-6 pt-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <RevealOnScroll>
            <h2 className="text-4xl font-extrabold text-[#207ae1] text-center">
              ABOUT US
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-10">
            <RevealOnScroll>
              <div className="bg-white border-l-8 border-[#6fab1d]  p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Beginnings</h3>
                <p className="text-gray-700">
                  Target Complex began in 2012 in Musanze city with just 3 employees and a dream — to provide accessible medication to all. The original Iraguha Pharmacy quickly earned a reputation for reliability and care.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className=" overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/e2/dc/99/e2dc995c0a241497f4bb42aeb827507b.jpg"
                  alt="Musanze pharmacy"
                  className="w-full h-64 object-cover"
                />
              </div>
</RevealOnScroll>


                <RevealOnScroll>

                  <div className=" overflow-hidden md:order-3">
                    <img
                      src="https://i.pinimg.com/1200x/72/59/6e/72596e499f868bdfce8220559315fcf5.jpg"
                      alt="Health Target team"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </RevealOnScroll>
                <RevealOnScroll>
                  <div className=" border-r-8 border-[#207ae1] p-6 md:order-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Expansion & Growth</h3>
                    <p className="text-gray-700">
                      In 2018, the Health Target parapharmacy was founded to serve non-medicinal needs. By 2021, our wholesale company was established in Kigali, distributing nationwide. We continue to grow with plans for clinics and manufacturing.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>


              <div className="bg-[#207ae1] text-white rounded-xl shadow-lg p-10 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="max-w-3xl mx-auto">
                  To build a healthcare ecosystem that’s centered around quality, trust, and innovation — delivering medicine, wellness products, and compassionate care to every Rwandan home and beyond.
                </p>
              </div>

          </div>
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
            Media Center
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
