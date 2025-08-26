'use client';

import React, { useState } from "react";

const categories = [
    "Health Alerts",
    "Promotions",
    "Health tips",
    "New products",
    "Announcements",
];
function page({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        date: "",
        author: "",
        descrip: "",
        category: categories[0],
        icon: "",
        features: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
        setFormData({
            id: "",
            title: "",
            date: "",
            author: "",
            descrip: "",
            category: categories[0],
            icon: "",
            features: false,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 bg-gray-800 rounded-xl shadow max-w-lg mx-auto"
        >
            <h2 className="text-xl font-bold mb-6 text-white">Add News</h2>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Id</span>
                <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter news ID"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Title</span>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter news title"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Date</span>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Author</span>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter author name"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Description</span>
                <textarea
                    name="descrip"
                    value={formData.descrip}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter description"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Category</span>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Icon</span>
                <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter icon (emoji or text)"
                />
            </label>

            <label className="flex items-center mb-6 space-x-3">
                <input
                    type="checkbox"
                    name="features"
                    checked={formData.features}
                    onChange={handleChange}
                    className="rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-600"
                />
                <span className="text-gray-300 text-sm font-medium">Features</span>
            </label>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium py-2 transition-colors"
            >
                Add News
            </button>
        </form>
    );
}

export default page;