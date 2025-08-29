"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const originalProducts = [
    {
        id: 1,
        name: "Digital Thermometer",
        price: "$12.99",
        stock: 100,
        category: "Diagnostics",
        description:
            "Accurate and fast-reading thermometer suitable for home and clinical use.",
        subsite: "HealthTargetParapharmacetica",
    },
    {
        id: 2,
        name: "Blood Pressure Monitor",
        price: "$49.99",
        stock: 80,
        category: "Diagnostics",
        description:
            "Automatic upper-arm blood pressure monitor with memory storage for 90 readings.",
        subsite: "HealthTargetParapharmacetica",
    },
    {
        id: 3,
        name: "First Aid Kit",
        price: "$29.99",
        stock: 60,
        category: "Emergency",
        description: "Portable first aid kit with bandages, antiseptic wipes, scissors, and more.",
        subsite: "HealthTargetParapharmacetica",
    },
    {
        id: 4,
        name: "Surgical Face Masks (50pcs)",
        price: "$15.00",
        stock: 200,
        category: "Protective Equipment",
        description:
            "Disposable 3-ply masks designed for safe and hygienic use in healthcare settings.",
        subsite: "HealthTargetParapharmacetica",
    },
    {
        id: 5,
        name: "Hand Sanitizer (500ml)",
        price: "$8.99",
        stock: 0,
        category: "Protective Equipment",
        description: "Alcohol-based hand sanitizer that kills 99.9% of germs.",
        subsite: "Wellness and Personal Care",
    },
    {
        id: 6,
        name: "Wheelchair",
        price: "$199.99",
        stock: 25,
        category: "Mobility",
        description: "Lightweight foldable wheelchair designed for comfort and easy transport.",
        subsite: "IraguhaPharmacy",
    },
    {
        id: 7,
        name: "Glucose Monitoring Kit",
        price: "$59.99",
        stock: 40,
        category: "Diabetes Care",
        description: "Complete glucose testing kit with strips and lancets included.",
        subsite: "HealthTargetParapharmacetica",
    },
    {
        id: 8,
        name: "Nebulizer Machine",
        price: "$89.99",
        stock: 30,
        category: "Respiratory Care",
        description:
            "Compact and efficient nebulizer for asthma and other respiratory treatments.",
        subsite: "IraguhaPharmacy",
    },
    {
        id: 9,
        name: "Electric Massager",
        price: "$75.00",
        stock: 50,
        category: "Wellness",
        description: "Handheld electric massager for muscle relaxation and pain relief.",
        subsite: "Wellness and Personal Care",
    },
    {
        id: 10,
        name: "Pulse Oximeter",
        price: "$39.99",
        stock: 90,
        category: "Diagnostics",
        description:
            "Non-invasive pulse oximeter for measuring oxygen saturation and pulse rate.",
        subsite: "HealthTargetParapharmacetica",
    },
];

// 🔁 Dynamically generate placeholder image URLs
const products = originalProducts.map((product) => ({
    ...product,
    image: `https://placehold.co/600x400/444444/bbbbbb?text=${encodeURIComponent(product.name)}`,
}));

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const searchParams = useSearchParams();
    const selectedSubsite = searchParams.get("subsite");

    const filteredProducts = products.filter((p) => {
        if (!selectedSubsite || selectedSubsite === "") return true; // show all if none selected
        // Normalize the values to lowercase for safe comparison
        return p.subsite.toLowerCase() === selectedSubsite.toLowerCase();
    });
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleViewProduct = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleEdit = (product) => {
        console.log("Edit product:", product);
        alert(`Edit functionality for ${product.name} - Frontend only`);
        closeModal();
    };

    const handleDelete = (product) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${product.name}?`);
        if (confirmDelete) {
            alert(`Delete functionality for ${product.name} - Frontend only`);
            closeModal();
        }
    };

    // Updated stock status colors for dark theme
    const getStockStatus = (stock) => {
        if (stock === 0) return { text: "Out of Stock", color: "text-red-400 bg-red-900" };
        if (stock < 30) return { text: "Low Stock", color: "text-yellow-400 bg-yellow-900" };
        return { text: "In Stock", color: "text-green-400 bg-green-900" };
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 bg-[#121212] min-h-screen text-gray-300 font-sans">
            <h1 className="text-4xl font-extrabold text-gray-300 mb-8 tracking-tight">Products</h1>

            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
                <table className="w-full text-left divide-y divide-gray-700">
                    <thead className="bg-[#1E1E1E]">
                        <tr>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-gray-400 text-sm">ID</th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-gray-400 text-sm">Product</th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-gray-400 text-sm">Price</th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-gray-400 text-sm">Stock</th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-gray-400 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((p, idx) => (
                            <tr
                                key={p.id}
                                className={
                                    idx % 2 === 0
                                        ? "bg-[#1E1E1E]"
                                        : "bg-[#2A2A2A] hover:bg-[#2A2A2A] transition-colors"
                                }
                            >
                                <td className="px-6 py-4 font-medium text-gray-300">{p.id}</td>
                                <td className="px-6 py-4 font-semibold text-gray-400">{p.name}</td>
                                <td className="px-6 py-4 text-gray-300">{p.price}</td>
                                <td className="px-6 py-4 text-gray-300">{p.stock}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleViewProduct(p)}
                                        className="text-gray-400 hover:text-blue-400 hover:bg-[#2A2A2A] p-2 rounded-full transition-all duration-200 font-semibold"
                                        title="View Details"
                                        aria-label={`View details of ${p.name}`}
                                    >
                                        👁️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#121212] rounded-lg max-w-2xl w-full max-h-[100vh] overflow-y-auto shadow-2xl border border-gray-700">
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="aspect-square bg-[#2A2A2A] rounded-lg flex items-center justify-center border border-gray-700">
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            className="object-contain rounded-lg max-h-full max-w-full"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = "/images/placeholder.png";
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-300 mb-2">{selectedProduct.name}</h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${getStockStatus(selectedProduct.stock).color}`}
                                            >
                                                {getStockStatus(selectedProduct.stock).text}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-gray-400">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Product ID</label>
                                            <p className="font-semibold text-gray-300">#{selectedProduct.id}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Price</label>
                                            <p className="text-2xl font-bold text-blue-400">{selectedProduct.price}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Stock Quantity</label>
                                            <p className="font-semibold text-gray-300">{selectedProduct.stock} units</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Sub Site</label>
                                            <p className="font-semibold text-gray-300">{selectedProduct.subsite}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Category</label>
                                            <p className="font-semibold text-gray-300">{selectedProduct.category}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Description</label>
                                        <p className="bg-[#2A2A2A] p-3 rounded-lg leading-relaxed text-gray-400">
                                            {selectedProduct.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-6 border-t border-gray-700 bg-[#1E1E1E] rounded-b-lg">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-[#2A2A2A] text-gray-400 border border-gray-700 font-bold rounded-lg hover:bg-[#121212] focus:ring focus:ring-gray-500 transition-colors"
                            >
                                Close
                            </button>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleEdit(selectedProduct)}
                                    className="px-6 py-2 bg-[#2A2A2A] text-gray-400 rounded-lg hover:bg-[#121212] hover:text-blue-400 focus:ring focus:ring-gray-500 transition-colors font-semibold flex items-center gap-2"
                                >
                                    <span className="text-gray-400 hover:text-blue-400">✏️</span> Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedProduct)}
                                    className="px-6 py-2 bg-[#2A2A2A] text-gray-400 rounded-lg hover:bg-[#121212] hover:text-blue-400 focus:ring focus:ring-gray-500 transition-colors font-semibold flex items-center gap-2"
                                >
                                    <span className="text-gray-400 hover:text-blue-400">🗑️</span> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
