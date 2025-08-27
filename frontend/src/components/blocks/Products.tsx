"use client";

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { apiService, ProductResponse } from '@/lib/api';

interface ProductsSectionProps {
  title?: string; // Optional prop to customize section title
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ title = 'Our Products' }) => {
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
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
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
                  <h3 className="text-2xl font-semibold mb-6">{categoryName}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categoryProducts.map((product) => (
                      <div key={product._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{product.description || 'No description'}</p>
                        <p className="font-bold text-blue-600">${product.price}</p>
                        <p className="text-sm text-gray-500">👶 {product.ageGroup || 'All ages'}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
