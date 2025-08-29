'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/blocks/Footer';
import Navbar from '@/components/blocks/Navbar';
import { Inter, Monomaniac_One } from 'next/font/google';
import Link from 'next/link';
import RevealOnScroll from '@/utils/RevealOnScroll';
import Blog from '@/components/blocks/Blog';


const partnerLogos = [
  { name: 'Pfizer', logo: 'https://i.pinimg.com/736x/60/7c/5a/607c5a1b3e7c1905850213b82814661c.jpg' },
  { name: 'Johnson & Johnson', logo: 'https://i.pinimg.com/736x/1c/ea/a0/1ceaa01adcdcc1b41679d48626f2aae4.jpg' },
  { name: 'Moderna', logo: 'https://i.pinimg.com/736x/f9/f4/56/f9f45651553d03f5becce1d74dc47fac.jpg' },
  { name: 'AstraZeneca', logo: 'https://i.pinimg.com/736x/f2/85/e9/f285e91d3c1e6a319b581e2c9cb09a97.jpg' },
  { name: 'GSK', logo: 'https://i.pinimg.com/736x/49/c9/4e/49c94e231895f9dc87bbc451aa79e4cb.jpg' },
  { name: 'Sanofi', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Sanofi-Logo.png' },
];


const navLinks = [
  { href: '/health-target-parapharmatical-wholesale', label: 'Home' },
  { href: '/', label: 'target complex' },
  { href: '/health-target-parapharmatical-wholesale/products', label: 'Products' },
  { href: '/health-target-parapharmatical-wholesale/contact', label: 'Contact', isButton: true },
];


const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const monomaniac = Monomaniac_One({ subsets: ['latin'], weight: '400', display: 'swap' });



const heroImages = [
  '/images/bg-og.jpg',
  'https://i.pinimg.com/736x/e2/dc/99/e2dc995c0a241497f4bb42aeb827507b.jpg',
  'https://i.pinimg.com/1200x/f8/f0/f9/f8f0f9e8d46440f2e3b4534bf3d20784.jpg',
];

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

const partners = [
  { id: 1, name: 'Partner A', logo: '/placeholder-logo.jpg' },
  { id: 2, name: 'Partner B', logo: '/placeholder-logo.jpg' },
  { id: 3, name: 'Partner C', logo: '/placeholder-logo.jpg' },
];

export default function PharmacyPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const [current, setCurrent] = useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);




  return (
    <main className={`${inter.className} text-gray-900`}>
      <Navbar links={navLinks} />

      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[current]}
            src={heroImages[current]}
            alt="Hero Image"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>


        <div className="absolute inset-0 bg-black/10" />


        <div className="relative z-10 flex items-center justify-start w-full h-full px-10">
          <div className=" bg-opacity-80 p-10 rounded-lg text-white max-w-2xl">
            <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              A one-stop-centre for all<br />your medical needs
            </h1>
            </RevealOnScroll>
            <RevealOnScroll>
            <p className="mt-6 text-lg mb-10 sm:text-xl font-medium max-w-md">
              Quality care, trusted expertise, and a commitment to your health — all in one place.
            </p>
            </RevealOnScroll>
            <RevealOnScroll>
           <button
  onClick={() => setIsModalOpen(true)}
  className="mt-8 mx-auto border px-20 cursor-pointer py-4 font-semibold bg-[#6fab1d] text-white transition duration-300"
>
  View More
</button>

            </RevealOnScroll>
          </div>
        </div>
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





      <section className="min-h-screen pt-20 px-6 flex items-center justify-center text-center">
        <div className="max-w-3xl w-full">
          <RevealOnScroll>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-10 text-[#207ae1]">
            ABOUT US
            <span className="block w-16 h-[3px] bg-[#207ae1] mt-2 mx-auto"></span>
          </h2>
          </RevealOnScroll>

          <div className="space-y-6 text-sm md:text-base font-medium text-gray-900 text-left">
<RevealOnScroll>
            <div className="border-1 border-[#6fab1d] p-5 rounded-lg shadow-sm">
              <p>
                Target complex started in 2012 in Musanze city, Rwanda. It began with a retail pharmacy (Iraguha Pharmacy) with 3 employees, selling prescription and non-prescription drugs to the public.
              </p>
            </div>
            </RevealOnScroll>

<RevealOnScroll>
            <div className="border border-[#6fab1d] p-5 rounded-lg  shadow-sm">
              <p>
                Thanks to excellent public service and dedication, Iraguha Pharmacy became the most known pharmacy in the city. This led to the opening of a para-pharmaceutical company (Health Target) in 2018, selling non-medicinal products found in pharmacies.
              </p>
            </div>

</RevealOnScroll>
<RevealOnScroll>
            <div className="border border-[#6fab1d] p-5 rounded-lg  shadow-sm">
              <p>
                With growing popularity and trust, the success of both the parapharmacy and retail pharmacy inspired the launch of a wholesale company (Target Para and Pharmaceutical Wholesale Ltd) in Kigali.
              </p>
            </div>
</RevealOnScroll>
<RevealOnScroll>
            <div className="border border-[#6fab1d] p-5 rounded-lg shadow-sm">
              <p>
                Today, the wholesale company supplies para and pharmaceutical products across Rwanda. With continued success, we aim to open a clinic and a manufacturing company in the near future.
              </p>
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="min-h-screen px-6 flex flex-col items-center justify-center">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full ">
<RevealOnScroll>
          <div className="h-[600px] flex flex-col gap-4">
            <div className="flex-1 h-full">
              <img
                src="https://images.stockcake.com/public/4/7/2/4724e475-35e3-4be4-8ccf-2314debc712e_large/pharmacy-interior-design-stockcake.jpg"
                alt="Main Media 1"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>

          </div></RevealOnScroll>


          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
            <RevealOnScroll>
            <img
              src="https://i.pinimg.com/736x/e2/dc/99/e2dc995c0a241497f4bb42aeb827507b.jpg"
              alt="Media 1"
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
            </RevealOnScroll>
            <RevealOnScroll>
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=500&q=80"
              alt="Media 2"
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
            </RevealOnScroll>
             <RevealOnScroll>
            <img
              src="https://i.pinimg.com/1200x/72/59/6e/72596e499f868bdfce8220559315fcf5.jpg"
              alt="Media 3"
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
            </RevealOnScroll>
            <RevealOnScroll>
            <img
              src="https://i.pinimg.com/1200x/f8/f0/f9/f8f0f9e8d46440f2e3b4534bf3d20784.jpg"
              alt="Media 4"
              className="w-full h-full object-cover rounded-lg shadow-sm"
            />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Blog />



<section className="min-h-[400px] py-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col">
    <RevealOnScroll>
      <h2 className="text-5xl font-extrabold mb-6 text-[#207ae1] text-center">
        OUR PARTNERS
      </h2>
    </RevealOnScroll>

    <RevealOnScroll>
      <p className="text-gray-900 max-w-2xl mx-auto text-center mb-12">
        Public institutions, Non-government organizations, Manufacturers, Suppliers/Distributors/Wholesalers, Retail companies, and individual customers and patients.
      </p>
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="flex-1 flex items-center justify-center min-h-[400px]">
        <div className="overflow-hidden py-4 w-full">
          <motion.div
            className="flex items-center space-x-12 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-64 h-40 p-4"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </RevealOnScroll>
  </div>
</section>

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
