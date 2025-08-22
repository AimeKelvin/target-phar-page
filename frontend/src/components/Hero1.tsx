'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Monomaniac_One } from 'next/font/google';

const monomaniac = Monomaniac_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export interface LinkItem {
  title: string;
  href: string;
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
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const, 
    },
  },
};

export default function HeroWithLinks({ title, description, links }: HeroWithLinksProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' as const }} // <-- Fix here
        className={`font-extrabold mb-[70px] text-5xl md:text-7xl text-gray-900 ${monomaniac.className}`}
      >
        {title}
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-[20px] text-gray-600 max-w-3xl mb-[170px]"
      >
        {description}
      </motion.p>


      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {links.map(({ title, href }) => (
          <motion.div
            key={title}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Link
              href={href}
              className="block bg-white/70 hover:bg-white transition-all duration-300 border border-black/10 backdrop-blur-lg shadow-md rounded-xl px-10 py-7 text-center text-xl font-semibold text-gray-800 hover:text-black"
            >
              {title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
