'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Monomaniac_One, Inter } from 'next/font/google';
import { IconType } from 'react-icons';
import RevealOnScroll from '@/utils/RevealOnScroll';

const monomaniac = Monomaniac_One({ subsets: ['latin'], weight: '400', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export interface LinkItem {
  title: string;
  href: string;
  icon: IconType;
}

interface HeroWithLinksProps {
  title: string;
  description: string;
  links: LinkItem[];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero({ title, description, links }: HeroWithLinksProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isScrolledPastTitle, setIsScrolledPastTitle] = useState(false);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const titles = useMemo(() => ['Trusted', 'Reliable', 'Professional', 'Friendly', 'Smart'], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroTitleRef.current) return;
      const rect = heroTitleRef.current.getBoundingClientRect();
      setIsScrolledPastTitle(rect.bottom < 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Title on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isScrolledPastTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-sm bg-white/80 border border-gray-200 rounded-xl px-6 py-3 shadow-md transition-all duration-500 ${monomaniac.className} text-xl sm:text-2xl font-bold text-gray-900`}
      >
        <span className="text-[#207ae1]">TARGET </span>
        <span className="text-[#6fab1d]">COMPLEX</span>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className={`relative w-full min-h-screen px-6 sm:px-8 lg:px-12 flex items-center justify-center text-center overflow-hidden ${inter.className}`}
      >
        {/* 🔥 Background Image + Blur */}
        <div className="absolute inset-0 z-0">
         <div
  className="w-full h-full bg-contain bg-no-repeat bg-center"
  style={{
    backgroundImage: `url('/images/bg-og.jpg')`,
  }}
/>


          {/* Optional: darker overlay for contrast */}
          <div className="absolute w-[100%] inset-0" />
        </div>

        {/* 🌟 Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl rounded-xl  px-6 sm:px-12 py-12 sm:py-20">
          <RevealOnScroll>
            <motion.h1
              ref={heroTitleRef}
              variants={fadeInUp}
              className={`text-gray-900 font-extrabold mb-6 sm:mb-10 text-5xl sm:text-6xl lg:text-7xl leading-tight ${monomaniac.className}`}
            >
              <span className="text-[#207ae1]">TARGET</span>
              <span className="text-[#6fab1d]">COMPLEX</span>
            </motion.h1>
          </RevealOnScroll>

          <RevealOnScroll>
            <motion.div variants={fadeInUp} className="relative h-12 sm:h-14 mb-8 flex justify-center">
              {titles.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute text-2xl sm:text-3xl font-semibold text-[#6fab1d] select-none"
                  initial={{ opacity: 0, y: '-100%' }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: '0%', opacity: 1 }
                      : { y: titleNumber > index ? '-100%' : '100%', opacity: 0 }
                  }
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll>
            <motion.p
              variants={fadeInUp}
              className="text-gray-900 max-w-3xl mx-auto mb-14 sm:mb-20 text-lg sm:text-xl leading-relaxed font-medium"
            >
              {description.split(' ').map((word, idx) => {
                const accentWords = ['trusted', 'healthcare', 'expert', 'reliable', 'quality', 'care'];
                if (accentWords.includes(word.toLowerCase().replace(/[.,]/g, ''))) {
                  return (
                    <span key={idx} className="text-[#6fab1d] font-semibold">
                      {word + ' '}
                    </span>
                  );
                }
                return word + ' ';
              })}
            </motion.p>
          </RevealOnScroll>

          {/* Link Buttons */}
          <motion.div className="w-full space-y-6">
            {/* First group of links */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {links.slice(0, 4).map(({ title, href, icon: Icon }) => (
                <RevealOnScroll key={title}>
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={href}
                      className="flex items-center justify-center border-2 border-[#6fab1d] font-semibold rounded-xl px-6 py-5 hover:shadow-md transition-all duration-300 text-gray-900 hover:text-[#6fab1d] backdrop-blur-sm"
                    >
                      <Icon className="mr-3 w-6 h-6 text-[#6fab1d]" />
                      {title}
                    </Link>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </motion.div>

            {/* Remaining links */}
            <RevealOnScroll>
              <motion.div
                className="flex justify-center gap-4 flex-wrap"
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              >
                {links.slice(4).map(({ title, href, icon: Icon }) => (
                  <motion.div
                    key={title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href={href}
                      className="flex items-center justify-center  border-2 border-[#6fab1d] font-semibold rounded-xl px-6 py-5 hover:shadow-md transition-all duration-300 text-gray-900 hover:text-[#6fab1d] backdrop-blur-sm"
                    >
                      <Icon className="mr-3 w-6 h-6 text-[#6fab1d]" />
                      {title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </RevealOnScroll>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
