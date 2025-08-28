'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

function Page({ params }) {
    const news = {
        id: params.id,
        title: "COVID-19 Vaccine Drive – Register Now!",
        date: "Jan 20, 2025",
        category: "Health Alert",
        author: "Dr. Jane Doe",
        bannerImage:
            "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
        content: `
🛡️ Stay Protected This Season: Vaccines Now Available at All HealthTargetParapharmacetica Branches

As the seasons shift, so do our health priorities. With colder months approaching and an increase in respiratory infections, it's crucial to take proactive steps to protect your health and the well-being of your loved ones. One of the most effective and proven methods? Vaccination.

We’re proud to announce that **seasonal vaccines are now available at all of our HealthTargetParapharmacetica branches**, with **no cost to residents**. Whether you’re due for a flu shot, looking to update your immunizations, or just want to take preventative steps for you and your family, we’ve got you covered — conveniently, safely, and affordably.

🏥 Why Vaccination Matters — Especially This Season

Each year, thousands of people are affected by preventable illnesses such as influenza, pneumonia, and other viral infections. These illnesses can lead to missed work days, school absences, doctor visits, and in some cases, hospitalization. **Vaccination not only reduces your risk of illness but also helps protect vulnerable members of your community.**

✅ What You Need to Know

📍 Visit Your Nearest Branch  
All of our HealthTargetParapharmacetica branches are now offering walk-in and appointment-based vaccinations.

📝 Simple Registration  
Our in-branch staff will guide you through a quick and easy registration process. No complex paperwork, no long wait times.

👨‍👩‍👧‍👦 Bring the Whole Family  
Get vaccinated together to ensure your whole household is protected.

🆓 **It’s Completely Free**  
There is absolutely no cost to you. **Vaccines are FREE for all residents**, regardless of your insurance status, income, or background.

💬 What to Expect  
- Clean and sanitized environment  
- Minimal wait times  
- Friendly staff  
- Guidance on post-vaccine care

🌐 Need More Information?  
👉 Visit [Our Website] to find out more and plan your visit.

✨ Stay Ahead. Stay Healthy. Stay Protected.
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
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    const renderContent = (text) => {
        return text.split("\n").map((line, i) => {
            if (line.trim() === "") return <br key={i} />;
            if (line.startsWith("🛡️")) return <h2 key={i} className="text-2xl font-bold mt-6 mb-2 text-blue-400">{line}</h2>;
    const renderContent = (text) => {
                return <h3 key={i} className="text-xl font-semibold mt-5 mb-2 text-green-400">{line}</h3>;
            }
            if (line.startsWith("📍") || line.startsWith("📝") || line.startsWith("👨‍👩‍👧‍👦") || line.startsWith("🆓") || line.startsWith("💬") || line.startsWith("👉")) {
                return <p key={i} className="font-semibold text-blue-300">{line}</p>;
            }
            if (line.includes("**")) {
                const formatted = line.replace(/\*\*(.*?)\*\*/g, (_, match) => `<strong>${match}</strong>`);
                return (
                    <p key={i} className="text-gray-200" dangerouslySetInnerHTML={{ __html: formatted }} />
                );
            }
            if (line.startsWith("- ")) {
                return <li key={i} className="ml-6 list-disc text-gray-200">{line.substring(2)}</li>;
            }
            return <p key={i} className="text-gray-300">{line}</p>;
        });
    };

    return (
        <main className={`p-6 max-w-4xl mx-auto transition-opacity duration-700 ${isMounted ? "opacity-100" : "opacity-0"}`}>
            {/* Banner */}
            {news.bannerImage && (
                <img
                    src={news.bannerImage}
                    alt={news.title}
                    className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                />
            )}

            {/* Header */}
            <header className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
                    {news.category}
                </span>
                <h1 className="text-3xl font-bold mt-2 mb-1 text-white">{news.title}</h1>
                <p className="text-gray-400 text-sm">
                    {news.date} {news.author && <>| By {news.author}</>}
                </p>
            </header>

            {/* Article */}
            <article className="prose prose-invert prose-p:leading-relaxed prose-li:leading-relaxed max-w-none mb-8">
                {renderContent(news.content)}
            </article>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                    href="/news"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ← Back to News
                </Link>

                <button
                    onClick={onCopyLink}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                    📋 Copy Link
                </button>

                <a
                    href={`mailto:?subject=${encodeURIComponent(news.title)}&body=${encodeURIComponent(window.location.href)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    target="_blank"
                    rel="noreferrer"
                >
                    📧 Share via Email
                </a>
            </div>

            {/* Related Articles */}
            <section className="border-t border-gray-700 pt-6">
                <h2 className="text-xl font-bold mb-4 text-white">Related Articles</h2>
                <ul className="space-y-4">
                    {relatedArticles.map(({ id, title, category, date }) => (
                        <li key={id}>
                            <Link
                                href={`/news/${id}`}
                                className="text-blue-400 hover:underline font-semibold"
                            >
                                {title}
                            </Link>
                            <p className="text-gray-400 text-sm">
                                {category} | {date}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Page;
