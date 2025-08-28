'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

function Page({ params }) {
    const news = {
        id: params?.id || "1",
        title: "COVID-19 Vaccine Drive – Register Now!",
        date: "Jan 20, 2025",
        category: "Health Alert",
        author: "Dr. Jane Doe",
        bannerImage:
            "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
        content: `
🛡️ Stay Protected This Season: Vaccines Now Available at All HealthTargetParapharmacetica Branches

As the seasons shift, so do our health priorities. With colder months approaching and an increase in respiratory infections, it's crucial to take proactive steps to protect your health and the well-being of your loved ones. One of the most effective and proven methods? Vaccination.

We're proud to announce that **seasonal vaccines are now available at all of our HealthTargetParapharmacetica branches**, with **no cost to residents**. Whether you're due for a flu shot, looking to update your immunizations, or just want to take preventative steps for you and your family, we've got you covered — conveniently, safely, and affordably.

🏥 Why Vaccination Matters — Especially This Season

Each year, thousands of people are affected by preventable illnesses such as influenza, pneumonia, and other viral infections. These illnesses can lead to missed work days, school absences, doctor visits, and in some cases, hospitalization. **Vaccination not only reduces your risk of illness but also helps protect vulnerable members of your community.**

✅ What You Need to Know

📍 Visit Your Nearest Branch  
All of our HealthTargetParapharmacetica branches are now offering walk-in and appointment-based vaccinations.

📝 Simple Registration  
Our in-branch staff will guide you through a quick and easy registration process. No complex paperwork, no long wait times.

👨‍👩‍👧‍👦 Bring the Whole Family  
Get vaccinated together to ensure your whole household is protected.

🆓 **It's Completely Free**  
There is absolutely no cost to you. **Vaccines are FREE for all residents**, regardless of your insurance status, income, or background.

💬 What to Expect  
- Clean and sanitized environment  
- Minimal wait times  
- Friendly staff  
- Guidance on post-vaccine care

🌐 Need More Information?  
👉 Visit [Our Website] to find out more and plan your visit.

✨ Stay Ahead. Stay Health. Stay Protected.
    `,
    };

    const relatedArticles = [
        {
            id: "2",
            title: "Flu Season Coming Early – Stay Vigilant",
            category: "Health Alert",
            date: "Feb 10, 2025",
        },
        {
            id: "3",
            title: "New Health Tips for Summer",
            category: "Health Tips",
            date: "Mar 02, 2025",
        },
    ];

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onCopyLink = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    const renderContent = (text) => {
        return text.split("\n").map((line, i) => {
            if (line.trim() === "") return <br key={i} />;
            if (line.startsWith("🛡️")) return <h2 key={i} className="text-2xl font-bold mt-6 mb-4 text-gray-300">{line}</h2>;
            if (line.startsWith("🏥") || line.startsWith("✅") || line.startsWith("🌐") || line.startsWith("✨")) {
                return <h3 key={i} className="text-xl font-semibold mt-5 mb-3 text-gray-300">{line}</h3>;
            }
            if (line.startsWith("📍") || line.startsWith("📝") || line.startsWith("👨‍👩‍👧‍👦") || line.startsWith("🆓") || line.startsWith("💬") || line.startsWith("👉")) {
                return <p key={i} className="font-semibold text-gray-400 mb-2">{line}</p>;
            }
            if (line.includes("**")) {
                const formatted = line.replace(/\*\*(.*?)\*\*/g, (_, match) => `<strong class="text-gray-300">${match}</strong>`);
                return (
                    <p key={i} className="text-gray-400 mb-3" dangerouslySetInnerHTML={{ __html: formatted }} />
                );
            }
            if (line.startsWith("- ")) {
                return <li key={i} className="ml-6 list-disc text-gray-400 mb-1">{line.substring(2)}</li>;
            }
            return <p key={i} className="text-gray-400 mb-3">{line}</p>;
        });
    };

    const shareViaEmail = () => {
        const subject = encodeURIComponent(news.title);
        const body = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');
        window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#121212] font-sans">
            <main className={`p-6 max-w-4xl mx-auto transition-opacity duration-700 ${isMounted ? "opacity-100" : "opacity-0"}`}>
                {/* Banner */}
                {news.bannerImage && (
                    <img
                        src={news.bannerImage}
                        alt={news.title}
                        className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg border border-gray-700"
                    />
                )}

                {/* Header */}
                <header className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full bg-red-900/30 text-red-400 font-semibold text-sm border border-red-700">
                        {news.category}
                    </span>
                    <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-300">{news.title}</h1>
                    <p className="text-gray-400 text-sm">
                        {news.date} {news.author && <>| By {news.author}</>}
                    </p>
                </header>

                {/* Article Content */}
                <article className="mb-10 bg-[#1E1E1E] rounded-xl p-8 border border-gray-700">
                    <div className="prose prose-invert max-w-none">
                        {renderContent(news.content)}
                    </div>
                </article>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                    <Link
                        href="/news"
                        className="px-6 py-3 bg-[#2A2A2A] text-gray-400 rounded-lg hover:text-blue-400 hover:bg-gray-600 transition-all border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium"
                    >
                        ← Back to News
                    </Link>

                    <button
                        onClick={onCopyLink}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:text-blue-400 hover:bg-[#2A2A2A] transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium"
                    >
                        <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Copy Link
                    </button>

                    <button
                        onClick={shareViaEmail}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-400 rounded-lg hover:text-blue-400 hover:bg-[#2A2A2A] transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium"
                    >
                        <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Share via Email
                    </button>
                </div>

                {/* Related Articles */}
                <section className="border-t border-gray-700 pt-8">
                    <h2 className="text-xl font-bold mb-6 text-gray-300 flex items-center gap-3">
                        <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Related Articles
                    </h2>
                    <div className="space-y-4">
                        {relatedArticles.map(({ id, title, category, date }) => (
                            <div key={id} className="bg-[#1E1E1E] rounded-lg p-4 border border-gray-700 hover:bg-[#2A2A2A] transition-colors">
                                <Link
                                    href={`/news/${id}`}
                                    className="text-gray-400 hover:text-blue-400 font-semibold block mb-2 transition-colors"
                                >
                                    {title}
                                </Link>
                                <p className="text-gray-400 text-sm">
                                    {category} | {date}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Page;