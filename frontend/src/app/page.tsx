'use client';

import { FiPackage, FiPlusCircle, FiHome, FiCpu, FiTool } from 'react-icons/fi';
import ProductCarousel, { Product } from '@/components/blocks/Recentproducts';
import Description from '@/components/blocks/description';
import Hero , { LinkItem } from '@/components/blocks/Hero';
import footer from '@/components/blocks/footer';

const linkData: LinkItem[] = [
  { title: 'Wholesale', href: '/wholesale', icon: FiPackage },
  { title: 'Pharmacy', href: '/pharmacy', icon: FiPlusCircle },
  { title: 'Clinic', href: '/clinic', icon: FiHome },
  { title: 'Manufacture', href: '/manufacture', icon: FiCpu },
  { title: 'Para', href: '/para', icon: FiTool },
];


const products: Product[] = [
  {
    id: 1,
    name: 'Pain Relief',
    image: 'https://i.pinimg.com/1200x/f5/ce/2f/f5ce2f0db6870cb6d52c1c4528528fdb.jpg',
    type: 'Over‑the‑counter pain relief',
    details: 'Effective medicines to relieve headaches, muscle pain, and more.',
  },
  {
    id: 2,
    name: 'Vitamins',
    image: 'https://i.pinimg.com/736x/0e/76/8b/0e768bcd6ab51d8c31d9d6f83a37be23.jpg',
    type: 'Vitamin supplements',
    details: 'Daily essential vitamins and minerals to keep you healthy.',
  },
  {
    id: 3,
    name: 'Cough Syrups',
    image: 'https://i.pinimg.com/736x/56/0c/6a/560c6a3635337e3019d4b5b760f39da7.jpg',
    type: 'Cough syrups & lozenges',
    details: 'Soothing syrups and lozenges to ease cough and throat irritation.',
  },
  {
    id: 4,
    name: 'First Aid Kit',
    image: 'https://i.pinimg.com/736x/d2/e2/ad/d2e2ad9ac95ae273aef0ad479bc217e5.jpg',
    type: 'First‑aid essentials',
    details: 'Bandages, antiseptics, and other essentials for emergencies.',
  },
  {
    id: 5,
    name: 'Skin Care',
    image: 'https://i.pinimg.com/736x/32/8c/cb/328ccb66b46ae9acfe68da6b325c5fdd.jpg',
    type: 'Skin care products',
    details: 'Creams, lotions, and treatments to keep your skin healthy and glowing.',
  },
  {
    id: 6,
    name: 'Product 1',
    image: 'https://i.pinimg.com/736x/47/38/07/47380775e2d5e27fb15ab587936e5bb0.jpg',
    type: 'Additional product 1',
    details: 'Description for additional product 1.',
  },
  {
    id: 7,
    name: 'Product 2',
    image: 'https://i.pinimg.com/1200x/b1/1a/36/b11a369728512da9fb7d4f9f0c82530c.jpg',
    type: 'Additional product 2',
    details: 'Description for additional product 2.',
  },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-start w-full text-center md:py-0 py-12 space-y-8 min-h-screen">
      <Hero
        title="TARGET COMPLEX"
        description="Providing trusted healthcare products, expert advice, and fast, reliable service to support the well‑being of you and your family. Whether it's wholesale supplies, pharmacy needs, clinical care, or manufacturing, we’re here to ensure quality and care at every step."
        links={linkData}
      />

      <section className="w-full max-w-7xl px-4 mx-auto overflow-visible py-8">
        <h2 className="text-2xl text-center font-semibold mb-20 text-gray-900 dark:text-white">
          Recent Products
        </h2>
        <ProductCarousel products={products} />
      </section>
        <Description />
    </main>

  );
}
