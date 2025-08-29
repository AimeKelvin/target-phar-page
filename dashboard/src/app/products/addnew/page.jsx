"use client";

import React, { useState } from "react";

function Page({ onSubmit }) {
    const [formData, setFormData] = useState({
        desc: "",
        name: "",
        subsite: "",
        category: "",
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
            desc: "",
            name: "",
            subsite: "",
            category: "",
            price: "",
            stock: "",
        });
    };

    return (
        <div className="min-h-screen bg-[#121212] font-sans p-6">
            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto p-8 bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-700"
            >
                <h2 className="text-3xl font-bold mb-8 text-gray-300 text-center tracking-wide uppercase">
                    Add New Product
                </h2>

                {/* Grid container: 3 columns on md+ screens, 1 column on smaller devices */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-8">
                    {/* Product Description */}
                    <div>
                        <label className="block mb-2 text-gray-300 font-semibold text-sm">
                            Product Description
                        </label>
                        <input
                            type="text"
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            placeholder="Accurate and fast-reading..."
                            required
                            className="w-full rounded-lg bg-[#2A2A2A] border border-gray-700 px-4 py-3 text-gray-400 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>

                    {/* Product Name */}
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
                            className="w-full rounded-lg bg-[#2A2A2A] border border-gray-700 px-4 py-3 text-gray-400 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
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
                            className="w-full rounded-lg bg-[#2A2A2A] border border-gray-700 px-4 py-3 text-gray-400 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>

                    {/* Stock Quantity */}
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
                            className="w-full rounded-lg bg-[#2A2A2A] border border-gray-700 px-4 py-3 text-gray-400 placeholder-gray-500 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>

                    {/* Sub Site - Radio Buttons */}
                    <div className="md:col-span-1">
                        <span className="block mb-2 text-gray-300 font-semibold text-sm">
                            Sub Site
                        </span>
                        <div className="flex flex-col space-y-3">
                            {[
                                { value: "parapharmacetica", label: "Health Target Parapharmacetica" },
                                { value: "iraguha", label: "Iraguha Pharmacy" },
                                { value: "wholesale", label: "HTP Wholesale" },
                            ].map(({ value, label }) => (
                                <label
                                    key={value}
                                    className="flex items-center cursor-pointer text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <input
                                        type="radio"
                                        name="subsite"
                                        value={value}
                                        checked={formData.subsite === value}
                                        onChange={handleChange}
                                        className="mr-3 h-5 w-5 text-blue-500 focus:ring-2 focus:ring-gray-500 focus:outline-none rounded"
                                        required
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Category Select */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 text-gray-300 font-semibold text-sm">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg bg-[#2A2A2A] border border-gray-700 px-4 py-3 text-gray-400 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            <option value="" className="text-gray-400">Select a category</option>
                            <option value="medicines" className="text-gray-400">Medicines</option>
                            <option value="prescriptions" className="text-gray-400">Prescriptions</option>
                            <option value="over-the-counter" className="text-gray-400">Over-the-counter</option>
                            <option value="wheelchairs" className="text-gray-400">Wheelchairs</option>
                            <option value="crutches" className="text-gray-400">Crutches</option>
                            <option value="diagnostic-kits" className="text-gray-400">Diagnostic Kits</option>
                            <option value="hospital-beds" className="text-gray-400">Hospital Beds</option>
                            <option value="vitamins" className="text-gray-400">Vitamins</option>
                            <option value="supplements" className="text-gray-400">Supplements</option>
                            <option value="skincare" className="text-gray-400">Skincare</option>
                            <option value="hygiene" className="text-gray-400">Hygiene</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-xl bg-[#2A2A2A] hover:bg-gray-600 text-gray-400 hover:text-blue-400 font-bold text-lg shadow-lg transform transition-all duration-300 active:scale-95 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default Page;