"use client";

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { apiService, NewsResponse } from '@/lib/api';

interface NewsSectionProps {
  title?: string; // Optional prop to customize section title
}

const NewsSection: React.FC<NewsSectionProps> = ({ title = 'News & Updates' }) => {
  const [news, setNews] = useState<NewsResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const newsData = await apiService.getAllNews();
        setNews(newsData);
      } catch (error: any) {
        Swal.fire({
          title: 'Error',
          text: error.message || 'Failed to load news',
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
        {loading ? (
          <div className="text-center">
            <div className="inline-block w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.length > 0 ? (
              news.map((item) => (
                <div key={item._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.company}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <video src={item.video} className="w-full h-48 object-cover mb-4" controls />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-2">No news available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
