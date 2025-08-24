'use client';

import Description from '@/components/blocks/description';
import Herosection, { LinkItem } from '@/components/blocks/Hero1';
import { FiPackage, FiPlusCircle, FiHome, FiCpu, FiTool } from 'react-icons/fi';

const linkData: LinkItem[] = [
  { title: 'Wholesale', href: '/wholesale', icon: FiPackage },
  { title: 'Pharmacy', href: '/pharmacy', icon: FiPlusCircle },
  { title: 'Clinic', href: '/clinic', icon: FiHome },
  { title: 'Manufacture', href: '/manufacture', icon: FiCpu },
  { title: 'Para', href: '/para', icon: FiTool },
];

export default function Page() {
  return (
    <>
    <main className="flex flex-col items-center justify-start w-full text-center py-12">
      <Herosection
        title="TARGET COMPLEX"
        description="Providing trusted healthcare products, expert advice, and fast, reliable service to support the well-being of you and your family. Whether it's wholesale supplies, pharmacy needs, clinical care, or manufacturing, we’re here to ensure quality and care at every step."
        links={linkData}
      />
    </main>
    <Description />
    </>
  );
}
