'use client';

import React, { useState } from "react";

const categories = [
    "Health Alerts",
    "Promotions", 
    "Health tips",
    "New products",
    "Announcements",
];

const categoryIcons = {
    "Health Alerts": "🚨",
    "Promotions": "🏷️",
    "Health tips": "💡",
    "New products": "✨",
    "Announcements": "📢",
};

function NewsForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        date: "",
        author: "",
        descrip: "",
        category: categories[0],
        icon: "",
        featured: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            if (onSubmit) {
                onSubmit(formData);
            } else {
                // Frontend only - show success message
                alert(`News "${formData.title}" created successfully!`);
            }
            
            // Reset form
            setFormData({
                id: "",
                title: "",
                date: "",
                author: "",
                descrip: "",
                category: categories[0],
                icon: "",
                featured: false,
            });
            setIsSubmitting(false);
        }, 1000);
    };

    const generateId = () => {
        const newId = Math.floor(Math.random() * 10000) + 1;
        setFormData(prev => ({ ...prev, id: newId.toString() }));
    };

    const clearForm = () => {
        setFormData({
            id: "",
            title: "",
            date: "",
            author: "",
            descrip: "",
            category: categories[0],
            icon: "",
            featured: false,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-4 sm:p-6 lg:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                        📝 Create News Article
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Share important updates with your community
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl">
                    {/* ID Field */}
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-semibold mb-2">
                            News ID
                        </label>
                        <div className="flex gap-3">
                            <input
                                type="number"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                className="flex-1 rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter news ID"
                                required
                            />
                            <button
                                type="button"
                                onClick={generateId}
                                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                🎲 Auto
                            </button>
                        </div>
                    </div>

                    {/* Title Field */}
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-semibold mb-2">
                            News Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter an engaging news title"
                            required
                        />
                    </div>

                    {/* Date and Author Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2">
                                📅 Publication Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2">
                                ✍️ Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Author name"
                                required
                            />
                        </div>
                    </div>

                    {/* Description Field */}
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-semibold mb-2">
                            📄 Description
                        </label>
                        <textarea
                            name="descrip"
                            value={formData.descrip}
                            onChange={handleChange}
                            rows={4}
                            className="w-full rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                            placeholder="Write a detailed description of the news article..."
                            required
                        />
                        <div className="text-right text-xs text-gray-500 mt-1">
                            {formData.descrip.length}/500 characters
                        </div>
                    </div>

                    {/* Category and Icon Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2">
                                🏷️ Category
                            </label>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                                    required
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat} className="bg-gray-900">
                                            {categoryIcons[cat]} {cat}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2">
                                🎨 Custom Icon
                            </label>
                            <input
                                type="text"
                                name="icon"
                                value={formData.icon}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-gray-900/70 border border-gray-600 px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="📰 (emoji or text)"
                            />
                        </div>
                    </div>

                    {/* Featured Toggle */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-600/50">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">⭐</span>
                                <div>
                                    <span className="text-gray-300 font-semibold">Featured Article</span>
                                    <p className="text-xs text-gray-500">Mark this article as featured on homepage</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="featured"
                                    checked={formData.featured}
                                    onChange={handleChange}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={clearForm}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            🔄 Clear Form
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Publishing...
                                </>
                            ) : (
                                <>
                                    📰 Publish News
                                </>
                            )}
                        </button>
                    </div>

                    {/* Preview Card */}
                    {(formData.title || formData.descrip) && (
                        <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-600/30">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                👁️ Preview
                            </h3>
                            <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">
                                        {formData.icon || categoryIcons[formData.category]}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-2">
                                            {formData.title || "News Title"}
                                        </h4>
                                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                            {formData.descrip || "News description will appear here..."}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-xs text-gray-500">
                                                {formData.date || "Date"}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                by {formData.author || "Author"}
                                            </span>
                                            <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs border border-blue-600/30">
                                                {formData.category}
                                            </span>
                                            {formData.featured && (
                                                <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-xs border border-yellow-600/30">
                                                    ⭐ Featured
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsForm;