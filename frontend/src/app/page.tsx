"use client";

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FiPackage, FiPlusCircle, FiHome } from 'react-icons/fi';
import Description from '@/components/blocks/description';
import Hero, { LinkItem } from '@/components/blocks/Hero';
import Footer from '@/components/blocks/Footer';
import Blog from '@/components/blocks/Blog';
import RevealOnScroll from '@/utils/RevealOnScroll';
import News from '@/components/blocks/News';
import { apiService, ProductResponse } from '@/lib/api';

const linkData: LinkItem[] = [
  { title: 'health target parapharmatical', href: '/pharmacy', icon: FiPlusCircle },
  { title: 'iraguha pharmacy', href: '/wholesale', icon: FiPackage },
  { title: 'health target parapharmatical wholesale', href: '/clinic', icon: FiHome },
];

export default function Page() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsData = await apiService.getAllProducts();
        setProducts(productsData);
      } catch (error: any) {
        Swal.fire({
          title: 'Error',
          text: error.message || 'Failed to load products',
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const categoryName = product.categoryId.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(product);
    return acc;
  }, {} as Record<string, ProductResponse[]>);

  return (
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
        {loading ? (
          <div className="text-center">
            <div className="inline-block w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedProducts).length > 0 ? (
              Object.entries(groupedProducts).map(([categoryName, categoryProducts]) => (
                <div key={categoryName}>
                  <h3 className="text-xl font-bold mb-6 text-center text-gray-800">{categoryName}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <div
                        key={product._id}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{product.categoryId.name}</p>
                        <p className="text-sm text-gray-600 mb-3">{product.description || 'No description'}</p>
                        <p className="text-base font-bold text-[#207ae1] mb-2">${product.price}</p>
                        <p className="text-sm text-gray-500">👶 {product.ageGroup || 'All ages'}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">No products available.</p>
            )}
          </div>
        )}
      </section>

      <Description />
      <News />

      <footer className="w-full mt-10">
        <Footer />
      </footer>
    </main>
  );
}