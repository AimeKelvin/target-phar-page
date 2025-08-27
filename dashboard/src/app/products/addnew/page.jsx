"use client";

import React, { useState } from "react";

/*
    Ndashaka gukore kuburyo each subsite ibe ifite categories zayo
    Kandi najya guhitamo subsite, category zigomba nazo guhinduka zikaba zujyanye na subsite yahisemo
    Gusa for now imma show all categories
*/

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

            {/* Subsite radio buttons */}
            <div className="flex flex-col space-y-4 mb-6">
                <label className="text-blue-400 font-extrabold mb-2">Sub Site</label>

                <label className="flex items-center text-gray-300">
                    <input
                        type="radio"
                        name="subsite"
                        value="pharmacy"
                        checked={formData.subsite === "pharmacy"}
                        onChange={handleChange}
                        className={radioClass}
                        required
                    />
                    Pharmacy
                </label>

                <label className="flex items-center text-gray-300">
                    <input
                        type="radio"
                        name="subsite"
                        value="medical-equipment"
                        checked={formData.subsite === "medical-equipment"}
                        onChange={handleChange}
                        className={radioClass}
                        required
                    />
                    Medical Equipment
                </label>

                <label className="flex items-center text-gray-300">
                    <input
                        type="radio"
                        name="subsite"
                        value="wellness-personal-care"
                        checked={formData.subsite === "wellness-personal-care"}
                        onChange={handleChange}
                        className={radioClass}
                        required
                    />
                    Wellness &amp; Personal Care
                </label>
            </div>

            {/* Category select */}
            <label className="block mb-6">
                <span className="text-gray-300 text-sm font-medium">Category</span>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                >
                    <option value="">Select category</option>
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

export default Page;
