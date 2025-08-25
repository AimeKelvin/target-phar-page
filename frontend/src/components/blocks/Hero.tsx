'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Monomaniac_One } from 'next/font/google';
import { Inter } from 'next/font/google';
import { IconType } from 'react-icons';

const monomaniac = Monomaniac_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isScrolledPastTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700 rounded-xl px-6 py-3 shadow-lg transition-all duration-500 ${monomaniac.className
          } text-xl sm:text-2xl font-bold text-gray-900 dark:text-emerald-400`}
      >
        {title}
      </motion.div>

      <section
        className={`w-full max-w-7xl min-h-[95vh] px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center ${inter.className}`}
      >

        <motion.h1
          ref={heroTitleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={!isScrolledPastTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`text-gray-900 dark:text-white font-extrabold mb-6 sm:mb-10 text-5xl sm:text-6xl lg:text-7xl leading-tight ${monomaniac.className}`}
        >
          {title}
        </motion.h1>


        <div className="relative h-12 sm:h-14 mb-8 flex justify-center">
          {titles.map((word, index) => (
            <motion.span
              key={index}
              className="absolute text-2xl sm:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 select-none"
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
        </div>


        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-gray-700 dark:text-gray-300 max-w-3xl mb-14 sm:mb-20 text-lg sm:text-xl leading-relaxed font-medium"
        >
          {description.split(' ').map((word, idx) => {
            const accentWords = ['trusted', 'healthcare', 'expert', 'reliable', 'quality', 'care'];
            if (accentWords.includes(word.toLowerCase().replace(/[.,]/g, ''))) {
              return (
                <span key={idx} className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {word + ' '}
                </span>
              );
            }
            return word + ' ';
          })}
        </motion.p>


        <motion.div className="w-full space-y-6">

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {links.slice(0, 4).map(({ title, href, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.97 }}
                className=""
              >
                <Link
                  href={href}
                  className="flex items-center justify-center bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md hover:shadow-[0_0_8px_2px_rgba(16,185,129,0.3)] dark:hover:shadow-[0_0_8px_2px_rgba(52,211,153,0.3)] transition-all duration-300 px-3 py-6 text-center text-sm sm:text-sm font-semibold text-gray-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  <Icon className="mr-2 w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  {title}
                </Link>
              </motion.div>
            ))}
          </motion.div>


          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {links.slice(4).map(({ title, href, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={href}
                  className="flex items-center justify-center bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md hover:shadow-[0_0_8px_2px_rgba(16,185,129,0.3)] dark:hover:shadow-[0_0_8px_2px_rgba(52,211,153,0.3)] transition-all duration-300 px-7 py-6 text-center text-base sm:text-sm font-semibold text-gray-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  <Icon className="mr-3 w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  {title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </section>
    </>
  );
}
