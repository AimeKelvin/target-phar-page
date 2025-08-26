"use client"

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Paracetamol", price: "$5", stock: 120 },
        { id: 2, name: "Ibuprofen", price: "$8", stock: 75 },
        { id: 3, name: "Vitamin C", price: "$12", stock: 50 },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
                Pharmacy Products
            </h1>

            <div className="overflow-x-auto">
                <table className="w-full text-left rounded-lg shadow-lg divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-gray-600 uppercase tracking-wide font-semibold text-sm">
                                ID
                            </th>
                            <th className="px-6 py-3 text-gray-600 uppercase tracking-wide font-semibold text-sm">
                                Product
                            </th>
                            <th className="px-6 py-3 text-gray-600 uppercase tracking-wide font-semibold text-sm">
                                Price
                            </th>
                            <th className="px-6 py-3 text-gray-600 uppercase tracking-wide font-semibold text-sm">
                                Stock
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((p, idx) => (
                            <tr
                                key={p.id}
                                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white hover:bg-blue-50 transition"}
                            >
                                <td className="px-6 py-4 text-gray-700 font-medium">{p.id}</td>
                                <td className="px-6 py-4 text-gray-900 font-semibold">{p.name}</td>
                                <td className="px-6 py-4 text-gray-700">{p.price}</td>
                                <td className="px-6 py-4 text-gray-700">{p.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
