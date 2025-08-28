"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from "next/router"
import "./globals.css";

export default function RootLayout({ children }) {
  const router = useRouter(); // Moved inside component

  const handleFilterChange = (e) => { // Added 'e' parameter
    const value = e.target.value;
    if (value) {
      alert('Filtering products by subsite: ' + value.split('=')[1]);
      router.push(value);
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-gray-100 font-sans">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-72 sticky top-0 h-screen bg-gray-800 shadow-lg p-8 space-y-8 flex-shrink-0">
            <h2 className="text-2xl font-extrabold tracking-wide text-blue-400 mb-6">
              Target Complex
            </h2>
            <nav className="flex flex-col space-y-4 text-gray-300 text-lg">
              <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-xl">🏠</span> Home
              </Link>
              <Link href="/news" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-xl">📰</span> News
              </Link>
              <Link href="/products" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                <span className="text-xl">💊</span> Products
              </Link>
            </nav>
            <select
              onChange={handleFilterChange}
              defaultValue=""
              className="w-full rounded-lg bg-gray-700 text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">All</option>
              <option value="/products?subsite=pharmacy">Pharmacy</option>
              <option value="/products?subsite=medical-equipment">Medical Equipment</option>
              <option value="/products?subsite=wellness-personal-care">Wellness & Personal Care</option>
            </select>
          </aside>
          
          {/* Mobile Sidebar */}
          <aside className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 text-gray-300 p-3 flex justify-around items-center shadow-inner z-50">
            {[
              { href: "/", icon: "🏠", label: "Home" },
              { href: "/news", icon: "📰", label: "News" },
              { href: "/products", icon: "💊", label: "Products" }
            ].map(({ href, icon, label }) => (
              <Link key={href} href={href} className="flex flex-col items-center text-sm px-3 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors">
                <span className="text-2xl">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </aside>

          {/* Main Content */}
          <main
            className="flex-1 p-6 md:p-12 bg-gray-900 pb-16 md:pb-6"
            style={{ minHeight: "100vh" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}