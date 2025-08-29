'use client';
import { FiPackage, FiPlusCircle, FiHome, FiCpu, FiTool } from 'react-icons/fi';
import ProductCarousel, { Product } from '@/components/blocks/Recentproducts';
import Description from '@/components/blocks/description';
import Hero, { LinkItem } from '@/components/blocks/Hero';
import Footer from '@/components/blocks/Footer';
import Blog from '@/components/blocks/Blog';
import RevealOnScroll from '@/utils/RevealOnScroll';

const linkData: LinkItem[] = [
  { title: 'health target parapharmatical', href: '/health-target-parapharmatical', icon: FiPlusCircle },
  { title: 'iraguha pharmacy', href: '/iraguha-pharmacy', icon: FiPackage },
  { title: 'health target parapharmatical wholesale', href: '/health-target-parapharmatical-wholesale', icon: FiHome },
];



export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-start w-full text-center md:py-0 pt-12 space-y-8 min-h-screen">
        <Hero
          title="TARGET COMPLEX"
          description="Providing trusted healthcare products, expert advice, and fast, reliable service to support the well‑being of you and your family. Whether it's wholesale supplies, pharmacy needs, clinical care, or manufacturing, we’re here to ensure quality and care at every step."
          links={linkData}
        />

        <section className="w-full max-w-7xl px-4 mx-auto overflow-visible py-8">
          <RevealOnScroll>
            <h2 className="text-2xl text-center font-semibold mb-20 text-[#207ae1]">
              RECENT PRODUCTS
            </h2>
          </RevealOnScroll>

          <ProductCarousel />
        </section>

        <Description />
        <Blog />

        <footer className="w-full mt-10">
          <Footer />
        </footer>
      </main>
    </>
  );
}
