import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RevealOnScroll from '@/utils/RevealOnScroll';

function BlogSection() {
  const [newsPosts, setNewsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8000/targetcomplex/news');
        setNewsPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <RevealOnScroll>
        <h2 className="text-3xl text-center font-extrabold tracking-wide mb-12 text-[#207ae1]">
          NEWS & UPDATES
        </h2>
      </RevealOnScroll>

      <RevealOnScroll>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#6fab1d] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {newsPosts.map(({ _id, title, company, image, video, createdAt }) => (
              <article
                key={_id}
                className="bg-white border-2 border-[#6fab1d] rounded-lg shadow-md overflow-hidden hover:shadow-[#6fab1d] transition-shadow duration-300 w-[300px]"
              >
                {/* Uploader (Company) */}
                <div className="bg-[#f3fef0] text-[#6fab1d] font-semibold px-4 py-2 text-sm">
                  {company}
                </div>

                <div className="relative group p-2 overflow-hidden">
                  <img
                    src={image || '/fallback-image.png'}
                    alt={title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {video && (
                    <a
                      href={video}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Play Video"
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg
                        className="w-14 h-14 text-[#207ae1] cursor-pointer drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="px-4 pb-6 text-gray-900">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>

                  <div className="text-sm text-gray-600 font-medium">
                    <time dateTime={createdAt}>
                      {new Date(createdAt).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
}

export default BlogSection;
