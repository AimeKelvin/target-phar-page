'use client';

import HeroWithLinks, { LinkItem } from '@/components/Hero1';

const linkData: LinkItem[] = [
  { title: 'Wholesale', href: '/wholesale' },
  { title: 'Pharmacy', href: '/pharmacy' },
  { title: 'Clinic', href: '/clinic' },
  { title: 'Manufacture', href: '/manufacture' },
];

export default function Page() {
  return (
    <main className="py-24 flex flex-col items-center justify-start min-h-screen backdrop-blur-xl bg-white/40 px-6 md:px-12 shadow-xl w-full text-center">
      <HeroWithLinks
        title="TARGET COMPLEX"
        description="Providing trusted healthcare products, expert advice, and fast service to keep you and your family healthy."
        links={linkData}
      />
    </main>
  );
}
