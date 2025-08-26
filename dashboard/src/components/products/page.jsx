export default function ProductsPage() {
    const products = [
        { id: 1, name: "Paracetamol", price: "$5", stock: 120 },
        { id: 2, name: "Ibuprofen", price: "$8", stock: 75 },
        { id: 3, name: "Vitamin C", price: "$12", stock: 50 },
    ];

    return (
        <div className="max-w-7xl mx-auto"> 
            <h1 className="text-2xl font-bold text-gray- mb-6">Pharmacy Products</h1>
            <table className="w-full border-collapse bg-gray-900 shadow rounded">
                <thead>
                    <tr className="bg-gray-900">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Product</th>
                        <th className="p-2 border">Price</th>
                        <th className="p-2 border">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td className="p-2 border">{p.id}</td>
                            <td className="p-2 border">{p.name}</td>
                            <td className="p-2 border">{p.price}</td>
                            <td className="p-2 border">{p.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
