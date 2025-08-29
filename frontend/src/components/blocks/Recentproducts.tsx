'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RevealOnScroll from '@/utils/RevealOnScroll';

export interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  categoryId: { name: string };
  description: string;
}

interface ProductCarouselProps {
  products?: Product[];
}

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function Recentproducts(_: ProductCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8000/targetcomplex/products')
      .then((res) => {
        const data = res.data;
        setProducts(data);
        setActiveIndex(Math.floor(data.length / 2));
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => mod(prev + 1, products.length));
    }, 20000);
    return () => clearInterval(interval);
  }, [products.length]);

  const getVisibleIndices = () => {
    const indices = [];
    for (let offset = -2; offset <= 2; offset++) {
      indices.push(mod(activeIndex + offset, products.length));
    }
    return indices;
  };

  if (products.length === 0) return null;

  const visibleIndices = getVisibleIndices();

  return (
    <>
      <RevealOnScroll>
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
                key={product._id}
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
                  background: isActive ? 'rgba(255, 255, 255, 0.55)' : 'transparent',
                  backdropFilter: isActive ? 'blur(10px)' : 'none',
                  WebkitBackdropFilter: isActive ? 'blur(10px)' : 'none',
                  border: isActive ? '1.5px solid #6fab1d' : 'transparent',
                  padding: isActive ? '12px' : '0px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                title={product.categoryId.name}
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
                    src={product.imageUrl || '/Logo.png'}
                    alt={product.categoryId.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    priority={isActive}
                  />
                </div>
                {isActive && (
                  <h3 className="text-lg font-semibold text-gray-900 truncate w-full">
                    {product.name}
                  </h3>
                )}
              </div>
            );
          })}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="max-w-3xl mx-auto p-6 rounded-xl border-2 border-[#6fab1d] mt-8 transition-all duration-500 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {products[activeIndex].categoryId.name}
          </h3>
          <p className="text-gray-800 text-base leading-relaxed text-center">
            {products[activeIndex].description}
          </p>
        </div>
      </RevealOnScroll>
    </>
  );
}
