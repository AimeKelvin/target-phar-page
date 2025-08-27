"use client";

import React, { useState } from "react";

function Page({ onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        subsite: "",
        category: "",
        price: "",
        stock: "",
    });

    const radioClass =
        "mr-2 text-blue-500 focus:ring-blue-400 focus:ring-2 focus:outline-none";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.subsite) {
            alert("Please select a subsite.");
            return;
        }
        if (!formData.category) {
            alert("Please select a category.");
            return;
        }
        if (onSubmit) onSubmit(formData);
        setFormData({
            id: "",
            name: "",
            subsite: "",
            category: "",
            price: "",
            stock: "",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg"
        >
            <h2 className="text-3xl font-bold mb-8 text-white text-center tracking-wide uppercase">
                Add New Product
            </h2>

            {/* Grid container: 3 columns on md+ screens, 1 column on smaller devices */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-8">
                {/* Id */}
                <div>
                    <label className="block mb-2 text-gray-300 font-semibold text-sm">
                        Product ID
                    </label>
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="e.g. 123"
                        required
                        className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-gray-300 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="block mb-2 text-gray-300 font-semibold text-sm">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product name"
                        required
                        className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-gray-300 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block mb-2 text-gray-300 font-semibold text-sm">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="$0.00"
                        required
                        className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-gray-300 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="block mb-2 text-gray-300 font-semibold text-sm">
                        Stock Quantity
                    </label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="e.g. 100"
                        min="0"
                        required
                        className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-gray-300 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Sub Site - Radio Buttons */}
                <div className="md:col-span-1">
                    <span className="block mb-2 text-gray-300 font-semibold text-sm">
                        Sub Site
                    </span>
                    <div className="flex flex-col space-y-3">
                        {[
                            { value: "pharmacy", label: "Pharmacy" },
                            { value: "medical-equipment", label: "Medical Equipment" },
                            { value: "wellness-personal-care", label: "Wellness & Personal Care" },
                        ].map(({ value, label }) => (
                            <label
                                key={value}
                                className="flex items-center cursor-pointer text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                <input
                                    type="radio"
                                    name="subsite"
                                    value={value}
                                    checked={formData.subsite === value}
                                    onChange={handleChange}
                                    className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-400 focus:ring-2 focus:outline-none rounded"
                                    required
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Category select */}
                <div className="md:col-span-2">
                    <label className="block mb-2 text-gray-300 font-semibold text-sm">
                        Category
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-gray-300 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent"
                    >
                        <option value="">Select a category</option>
                        <option value="medicines">Medicines</option>
                        <option value="prescriptions">Prescriptions</option>
                        <option value="over-the-counter">Over-the-counter</option>
                        <option value="wheelchairs">Wheelchairs</option>
                        <option value="crutches">Crutches</option>
                        <option value="diagnostic-kits">Diagnostic Kits</option>
                        <option value="hospital-beds">Hospital Beds</option>
                        <option value="vitamins">Vitamins</option>
                        <option value="supplements">Supplements</option>
                        <option value="skincare">Skincare</option>
                        <option value="hygiene">Hygiene</option>
                    </select>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg shadow-lg transform transition-transform active:scale-95"
            >
                Add Product
            </button>
        </form>
    );
}

export default Page;
