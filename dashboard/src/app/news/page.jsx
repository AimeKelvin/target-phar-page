"use client";

import React, { useState } from "react";
import Link from "next/link";

const newsData = [
    {
        id: 1,
        title: "COVID-19 Vaccine Drive – Register Now!",
        date: "2025-08-20 10:00",
        author: "Admin",
        description:
            "We are hosting a COVID-19 Vaccination drive at all our locations starting September. Register now to secure your slot!",
        category: "Health Alerts",
        icon: "💉",
        featured: true,
    },
    {
        id: 2,
        title: "Summer Promotions: 20% off on Skin Care Products",
        date: "2025-08-18 09:30",
        author: "Admin",
        description:
            "Enjoy your summer with healthy skin. Get 20% discount on all skincare products this month.",
        category: "Promotions",
        icon: "🧴",
        featured: false,
    },
    {
        id: 3,
        title: "5 Top Health Tips to Boost Your Immunity",
        date: "2025-08-15 14:00",
        author: "Dr. Smith",
        description:
            "Learn effective ways to enhance your immune system naturally through diet and lifestyle.",
        category: "Health Tips",
        icon: "⚕",
        featured: false,
    },
    {
        id: 4,
        title: "New Arrivals: Herbal Supplements",
        date: "2025-08-22 11:45",
        author: "Admin",
        description:
            "We have new organic herbal supplements in stock to support your wellness journey.",
        category: "New Products",
        icon: "⚕",
        featured: false,
    },
    {
        id: 5,
        title: "HealthTargetParapharmacetica Hours Update for Holiday Season",
        date: "2025-08-10 08:00",
        author: "Admin",
        description:
            "Please be informed about our store hours during the upcoming holiday season.",
        category: "Announcements",
        icon: "📢",
        featured: false,
    },
];

// Tailwind colors for categories (updated for dark backgrounds)
const categoryColors = {
    "Health Alerts": "border-red-500 bg-red-900 text-red-400",
    Promotions: "border-green-500 bg-green-900 text-green-400",
    "Health Tips": "border-blue-500 bg-blue-900 text-blue-400",
    "New Products": "border-orange-500 bg-orange-900 text-orange-400",
    Announcements: "border-purple-500 bg-purple-900 text-purple-400",
};

export default function Newspage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(newsData.map((a) => a.category))];

    const featuredNews = newsData.find((article) => article.featured) || null;

    const filteredNews = newsData.filter((article) => {
        const matchCategory =
            selectedCategory === "All" || article.category === selectedCategory;
        const matchSearch =
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="max-w-5xl mx-auto p-6 font-sans bg-gray-900 min-h-screen text-gray-300">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight">
                    HealthTargetParapharmacetica News & Updates
                </h1>
                <p className="text-gray-400 text-lg">
                    Latest announcements, promotions, and health alerts for our customers.
                </p>
            </header>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    aria-label="Search news"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-4 py-2 rounded-full border border-gray-700 bg-gray-800 shadow-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    const baseColors = categoryColors[cat];
                    // fallback for "All" or categories without color
                    const bgClass = isSelected
                        ? (baseColors
                            ? baseColors.replace("bg-", "bg-opacity-40 bg-").split(" ")[1]
                            : "bg-gray-700")
                        : "bg-gray-800";

                    const borderColor = isSelected
                        ? (baseColors ? baseColors.split(" ")[0] : "border-gray-600")
                        : "border-gray-700";

                    const textColor = isSelected
                        ? (baseColors ? baseColors.split(" ")[2] : "text-gray-300")
                        : "text-gray-400";

                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full border font-semibold transition  
                ${bgClass} ${borderColor} ${textColor} hover:bg-gray-700 hover:text-white`}
                            aria-pressed={isSelected}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Featured News */}
            {featuredNews && (
                <section
                    aria-label="Featured News"
                    className={`flex items-center gap-8 p-6 mb-10 rounded-lg shadow-lg border-l-8 ${categoryColors[featuredNews.category] || "border-gray-700"
                        } bg-gray-800`}
                >
                    <div className="text-6xl" aria-hidden="true">
                        {featuredNews.icon}
                    </div>
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold mb-3 text-white">
                            {featuredNews.title}
                        </h2>
                        <p className="text-gray-300 mb-5">{featuredNews.description}</p>
                        <Link href="/news/readmore">
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                                Read more
                            </button>
                        </Link>
                    </div>
                </section>
            )}

            {/* News Articles List */}
            <section aria-label="News articles" className="space-y-6">
                {filteredNews.length > 0 ? (
                    filteredNews.map((article) => (
                        <article
                            key={article.id}
                            className={`flex gap-5 p-4 rounded-lg shadow-md items-start bg-gray-800 border-l-8 ${categoryColors[article.category] || "border-gray-700"
                                }`}
                        >
                            <div className="text-4xl flex-shrink-0 mt-1" aria-hidden="true">
                                {article.icon}
                            </div>
                            <div className="flex flex-col w-full">
                                <h3 className="font-bold text-xl mb-1 text-white">
                                    {article.title}
                                </h3>
                                <div className="text-gray-500 text-sm mb-2">
                                    🕒 {article.date}{" "}
                                    {article.author && (
                                        <>
                                            | ✍ {article.author}
                                        </>
                                    )}
                                </div>
                                <p className="text-gray-300 mb-3">{article.description}</p>
                                <Link href="/news/readmore">
                                    <button className="self-start bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 transition">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-8">
                        No articles found.
                    </p>
                )}
            </section>
        </div>
    );
}
