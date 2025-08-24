'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  image: string;
  type: string;
  details: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function Recentproducts({ products }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(products.length / 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => mod(prev + 1, products.length));
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const getVisibleIndices = () => {
    const indices = [];
    for (let offset = -2; offset <= 2; offset++) {
      indices.push(mod(activeIndex + offset, products.length));
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <>
      {/* Carousel container */}
      <div className="relative flex justify-center mb-36 items-end space-x-[-100px] select-none">
        {visibleIndices.map((idx, position) => {
          const product = products[idx];

          let scale = 0.7;
          let width = 280;
          let marginBottom = 0;
          let zIndex = 10;

          switch (position) {
            case 0:
            case 4:
              scale = 0.7;
              width = 300;
              marginBottom = 10;
              zIndex = 10;
              break;
            case 1:
            case 3:
              scale = 0.85;
              width = 370;
              marginBottom = 10;
              zIndex = 20;
              break;
            case 2:
              scale = 1.1;
              width = 440;
              marginBottom = -40;
              zIndex = 30;
              break;
          }

          const isActive = position === 2;

          return (
            <div
              key={product.id}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer rounded-xl transition-all duration-500 ease-in-out ${
                isActive ? '' : 'shadow-black/20 dark:shadow-white/10'
              }`}
              style={{
                width: `${width}px`,
                transform: `scale(${scale})`,
                marginBottom: `${marginBottom}px`,
                zIndex,
                boxShadow: isActive ? 'none' : '0 5px 10px rgba(0,0,0,0.1)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                backdropFilter: isActive ? 'blur(10px)' : 'none',
                WebkitBackdropFilter: isActive ? 'blur(10px)' : 'none',
                border: isActive ? '1.5px solid grey' : 'transparent',
                padding: isActive ? '12px' : '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              title={product.type}
            >
              <div
                className={`relative rounded-md overflow-hidden ${
                  isActive ? '' : 'bg-white dark:bg-gray-800'
                }`}
                style={{
                  height: '240px',
                  width: '100%',
                  borderRadius: '12px',
                  marginBottom: isActive ? '12px' : '0',
                }}
              >
                <Image
                  src={`${product.image}?auto=compress&cs=tinysrgb&dpr=2&h=300`}
                  alt={product.type}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  priority={isActive}
                />
              </div>
              {isActive && (
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate w-full">
                  {product.name}
                </h3>
              )}
            </div>
          );
        })}
      </div>

      {/* Active card description */}
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 mt-8 transition-all duration-500 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {products[activeIndex].type}
        </h3>
        <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed text-center">
          {products[activeIndex].details}
        </p>
      </div>
    </>
  );
}
