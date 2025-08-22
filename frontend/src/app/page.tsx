'use client';

import Herosection, { LinkItem } from '@/components/Hero1';
import Hero3 from '@/components/Hero3';
import { Hero } from '@/components/Hero-2';


const linkData: LinkItem[] = [
  { title: 'Wholesale', href: '/wholesale' },
  { title: 'Pharmacy', href: '/pharmacy' },
  { title: 'Clinic', href: '/clinic' },
  { title: 'Manufacture', href: '/manufacture' },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-start w-full  text-center py-12">
      <Herosection
        title="TARGET COMPLEX"
        description="Providing trusted healthcare products, expert advice, and fast, reliable service to support the well-being of you and your family. Whether it's wholesale supplies, pharmacy needs, clinical care, or manufacturing, we’re here to ensure quality and care at every step."
        links={linkData}
      />
      <Hero3 />
      <Hero />
    </main>
  );
}

