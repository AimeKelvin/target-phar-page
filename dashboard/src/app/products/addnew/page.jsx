"use client";

import React, { useState } from "react";

function page({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        stock: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
        setFormData({ id: "", name: "", price: "", stock: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 bg-gray-800 rounded-xl shadow max-w-md mx-auto mb-8"
        >
            <h2 className="text-xl font-bold mb-6 text-white">Add New Product</h2>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Id</span>
                <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter product ID"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Name</span>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter product name"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="text-gray-300 text-sm font-medium">Price</span>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="e.g. $12.99"
                    required
                />
            </label>

            <label className="block mb-6">
                <span className="text-gray-300 text-sm font-medium">Stock</span>
                <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter stock quantity"
                    min="0"
                    required
                />
            </label>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium py-2 transition-colors"
            >
                Add Product
            </button>
        </form>
    );
}

export default page;