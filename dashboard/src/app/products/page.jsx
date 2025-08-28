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
        description:
            "Portable first aid kit with bandages, antiseptic wipes, scissors, and more.",
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
        description:
            "Lightweight foldable wheelchair designed for comfort and easy transport.",
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
        description:
            "Handheld electric massager for muscle relaxation and pain relief.",
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
    image: `https://placehold.co/600x400/gray/000?text=${encodeURIComponent(product.name)}`,
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
        const confirmDelete = window.confirm(
            `Are you sure you want to delete ${product.name}?`
        );
        if (confirmDelete) {
            alert(`Delete functionality for ${product.name} - Frontend only`);
            closeModal();
        }
    };

    const getStockStatus = (stock) => {
        if (stock === 0) return { text: "Out of Stock", color: "text-red-400 bg-red-900" };
        if (stock < 30)
            return { text: "Low Stock", color: "text-yellow-300 bg-yellow-900" };
        return { text: "In Stock", color: "text-green-400 bg-green-900" };
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-900 min-h-screen text-gray-300">
            <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
                Products
            </h1>

            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
                <table className="w-full text-left divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-sm text-gray-400">
                                ID
                            </th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-sm text-gray-400">
                                Product
                            </th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-sm text-gray-400">
                                Price
                            </th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-sm text-gray-400">
                                Stock
                            </th>
                            <th className="px-6 py-3 uppercase tracking-wide font-semibold text-sm text-gray-400">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((p, idx) => (
                            <tr
                                key={p.id}
                                className={
                                    idx % 2 === 0
                                        ? "bg-gray-800"
                                        : "bg-gray-700 hover:bg-gray-600 transition-colors"
                                }
                            >
                                <td className="px-6 py-4 font-medium">{p.id}</td>
                                <td className="px-6 py-4 font-semibold text-white">{p.name}</td>
                                <td className="px-6 py-4">{p.price}</td>
                                <td className="px-6 py-4">{p.stock}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleViewProduct(p)}
                                        className="text-blue-400 hover:text-blue-600 hover:bg-gray-600 p-2 rounded-full transition-all duration-200 font-semibold"
                                        title="View Details"
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
                    <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[100vh] overflow-y-auto shadow-2xl border border-gray-700">


                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
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
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {selectedProduct.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${getStockStatus(
                                                    selectedProduct.stock
                                                ).color}`}
                                            >
                                                {getStockStatus(selectedProduct.stock).text}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Product ID
                                            </label>
                                            <p className="font-semibold">#{selectedProduct.id}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Price</label>
                                            <p className="text-2xl font-bold text-green-400">
                                                {selectedProduct.price}
                                            </p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Stock Quantity
                                            </label>
                                            <p className="font-semibold">{selectedProduct.stock} units</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Sub Site
                                            </label>
                                            <p className="font-semibold">{selectedProduct.subsite}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Category</label>
                                            <p className="font-semibold">{selectedProduct.category}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Description</label>
                                        <p className="bg-gray-800 p-3 rounded-lg leading-relaxed text-gray-300">
                                            {selectedProduct.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-6 border-t border-gray-700 bg-gray-800 rounded-b-lg">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-600 text-white border border-gray-600 font-bold rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Close
                            </button>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleEdit(selectedProduct)}
                                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center gap-2"
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedProduct)}
                                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
