import React from 'react';
import RevealOnScroll from '@/utils/RevealOnScroll';

const blogPosts = [
  {
    id: 1,
    name: 'How Target Complex Improves Healthcare',
    description:
      'Discover the innovative ways Target Complex is reshaping health services with modern technology and compassionate care.',
    date: 'August 15, 2025',
    uploader: 'Dr. Jane Mwiza',
    image: 'https://i.pinimg.com/1200x/39/17/39/391739faefdba7a82dce7536c19640ff.jpg', // Replace with your image path
  },
  {
    id: 2,
    name: 'The Rise of Parapharmaceuticals in Rwanda',
    description:
      'An in-depth look at the growing importance of parapharmaceutical products and how they support wellness.',
    date: 'July 30, 2025',
    uploader: 'Health Target Team',
    image: 'https://i.pinimg.com/1200x/39/17/39/391739faefdba7a82dce7536c19640ff.jpg',
  },
  {
    id: 3,
    name: 'Tips for Maintaining Women’s Health',
    description:
      'Expert advice and preventive measures every woman should know for a healthier life.',
    date: 'July 10, 2025',
    uploader: 'Dr. Alice Uwimana',
    image: 'https://i.pinimg.com/1200x/39/17/39/391739faefdba7a82dce7536c19640ff.jpg',
  },
];

function BlogSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
        <RevealOnScroll>
        <h2 className="text-2xl text-center font-extrabold  mb-10 text-[#207ae1]">
            RECENT PRODUCTS
          </h2>
          </RevealOnScroll>
          <RevealOnScroll>
         
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(({ id, name, description, date, uploader, image }) => (
          <article
            key={id}
            className="bg-white border-2 border-[#6fab1d] rounded-lg shadow-lg overflow-hidden hover:shadow-[#6fab1d] scale-90 transition-shadow duration-300"
          >
            <div className="relative group p-2 rounded-t-lg overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
              />
              <button
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
              </button>
            </div>

            <div className="p-6 text-gray-900">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-sm mb-4">{description}</p>

              <div className="flex justify-between text-sm text-gray-900 font-medium">
                <time dateTime={date}>{date}</time>
                <span>By <span className='font-bold text-[#6fab1d] ' >{uploader}</span></span>
              </div>
            </div>
          </article>
        ))}
      </div>
       </RevealOnScroll>
    </section>
  );
}

export default BlogSection;
