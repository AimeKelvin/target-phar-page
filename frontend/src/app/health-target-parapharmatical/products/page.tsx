'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/blocks/Navbar';
import Footer from '@/components/blocks/Footer';
import RevealOnScroll from '@/utils/RevealOnScroll';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const navLinks = [
    { href: '/health-target-parapharmatical-wholesale', label: 'Home' },
    { href: '/', label: 'Target Complex' },
    { href: '/health-target-parapharmatical-wholesale/products', label: 'Products' },
    { href: '/health-target-parapharmatical-wholesale/contact', label: 'Contact', isButton: true },
];

const productCategories = [
    {
        category: 'Skin Care',
        products: [
            {
                id: 1,
                name: 'Nivea Lotion',
                description: 'A great skin lotion from Europe.',
                price: 2000,
                ageGroup: '10-40',
                imageUrl: 'https://res.cloudinary.com/do3nlahqj/image/upload/v1756290526/vvss5mm9xcv8uruahpxj.jpg',
            },
            {
                id: 2,
                name: 'Glow Cream',
                description: 'Hydrating cream for dry skin.',
                price: 3000,
                ageGroup: '12+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
            {
                id: 3,
                name: 'Sunscreen SPF 50',
                description: 'Protects against UV rays.',
                price: 2500,
                ageGroup: '8+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
            {
                id: 8,
                name: 'Sunscreen SPF 50',
                description: 'Protects against UV rays.',
                price: 2500,
                ageGroup: '8+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
            {
                id: 9,
                name: 'Sunscreen SPF 50',
                description: 'Protects against UV rays.',
                price: 2500,
                ageGroup: '8+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
            {
                id: 10,
                name: 'Sunscreen SPF 50',
                description: 'Protects against UV rays.',
                price: 2500,
                ageGroup: '8+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
        ],
    },
    {
        category: 'Vitamins',
        products: [
            {
                id: 4,
                name: 'Vitamin C Boost',
                description: 'Immunity support for all ages.',
                price: 1500,
                ageGroup: '12+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
            {
                id: 5,
                name: 'Multivitamin Gummies',
                description: 'Tasty daily dose of health.',
                price: 1800,
                ageGroup: '5+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
        ],
    },
    {
        category: 'Pharmaceuticals',
        products: [
            {
                id: 6,
                name: 'Cough Syrup',
                description: 'Soothes throat and relieves cough.',
                price: 1800,
                ageGroup: '5+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
            {
                id: 7,
                name: 'Pain Relief Tablets',
                description: 'Fast relief for everyday pain.',
                price: 2500,
                ageGroup: '18+',
                imageUrl: 'https://via.placeholder.com/300x200',
            },
        ],
    },
];

export default function ProductsPage() {
    const [sortBy, setSortBy] = useState('default');
    const [searchQuery, setSearchQuery] = useState('');


    const allProducts = useMemo(() => {
        return productCategories.flatMap(cat =>
            cat.products.map(p => ({ ...p, category: cat.category }))
        );
    }, []);


    const filteredAndSortedProducts = useMemo(() => {
        let result = [...allProducts];


        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            );
        }


        switch (sortBy) {
            case 'nameAsc':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameDesc':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'priceLow':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'priceHigh':
                result.sort((a, b) => b.price - a.price);
                break;
        }

        return result;
    }, [allProducts, sortBy, searchQuery]);


    const groupedProducts = useMemo(() => {
        const groups: { [category: string]: typeof allProducts } = {};
        filteredAndSortedProducts.forEach((product) => {
            if (!groups[product.category]) {
                groups[product.category] = [];
            }
            groups[product.category].push(product);
        });
        return groups;
    }, [filteredAndSortedProducts]);

    return (
        <main className="min-h-screen text-gray-900 bg-white">
            <Navbar links={navLinks} />


            <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:max-w-sm border border-gray-300 rounded px-4 py-2 text-sm"
                        />

                        <div>
                            <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
                                Sort by:
                            </label>
                            <select
                                id="sort"
                                className="border border-gray-300 rounded px-3 py-2 text-sm"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Default</option>
                                <option value="nameAsc">Name: A-Z</option>
                                <option value="nameDesc">Name: Z-A</option>
                                <option value="priceLow">Price: Low to High</option>
                                <option value="priceHigh">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>


            {Object.entries(groupedProducts).map(([category, products]) => (
                <section key={category} className="max-w-7xl mx-auto px-6 pb-12 relative">
                    <RevealOnScroll>  <h2 className="text-2xl font-semibold text-[#6fab1d] mb-4">{category}</h2></RevealOnScroll>


                    <RevealOnScroll>
                        <div className="absolute -top-2 right-6 z-10 flex gap-2">
                            <button
                                className={`swiper-button-prev-${category.replace(/\s+/g, '-')}`}
                                aria-label="Previous"
                            >
                                <FaChevronLeft className="text-[#6fab1d] w-6 h-6 hover:scale-110 transition" />
                            </button>
                            <button
                                className={`swiper-button-next-${category.replace(/\s+/g, '-')}`}
                                aria-label="Next"
                            >
                                <FaChevronRight className="text-[#6fab1d] w-6 h-6 hover:scale-110 transition" />
                            </button>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            navigation={{
                                nextEl: `.swiper-button-next-${category.replace(/\s+/g, '-')}`,
                                prevEl: `.swiper-button-prev-${category.replace(/\s+/g, '-')}`,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="pt-8"
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="bg-white border p-2 border-[#6fab1d] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-full h-64 object-cover rounded-t-xl"
                                        />
                                        <div className="p-4 flex flex-col gap-2">
                                            <h3 className="text-lg font-bold text-center text-[#207ae1]">{product.name}</h3>
                                            <p className="text-sm text-center text-gray-800">{product.description}</p>
                                            <div className="text-sm text-center text-gray-900">
                                                <span className="font-bold text-center"> {product.price} RWF</span>
                                            </div>
                                            <div className="text-sm text-center text-gray-700">
                                                <span className="font-medium text-center">Age Group: {product.ageGroup}</span>
                                            </div>
                                            <button className="mt-3 border-[#6fab1d] cursor-pointer border text-[#6fab1d] text-sm font-semibold py-2 rounded-lg transition hover:bg-[#6fab1d] hover:text-white">
                                                Book The Product
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </RevealOnScroll>
                </section>

            ))}

            <Footer />
        </main>
    );
}
