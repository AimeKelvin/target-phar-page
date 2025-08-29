"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import { House } from "@deemlol/next-icons";

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value) {
      alert("Filtering products by subsite: " + value.split("=")[1]);
      router.push(value);
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#121212] text-gray-300 font-sans">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-72 sticky top-0 h-screen bg-[#1E1E1E] shadow-md p-8 space-y-10 flex-shrink-0">
            <h2 className="text-3xl font-semibold tracking-wide text-gray-400 mb-8 select-none">
              Target Complex
            </h2>
            <nav className="flex flex-col space-y-5 text-gray-400 text-lg">
              {/* Home */}
              <Link
                href="/"
                className="flex items-center gap-3 px-5 py-3 rounded-md hover:bg-[#2A2A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <span className="text-gray-400 group-hover:text-blue-400">
                  <svg class="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                  </svg>

                </span>
                Home
              </Link>

              {/* Media Content */}
              <Link
                href="/news"
                className="flex items-center gap-3 px-5 py-3 rounded-md hover:bg-[#2A2A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <span className="text-gray-400 group-hover:text-blue-400">
                  <svg class="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clip-rule="evenodd" />
                  </svg>

                </span>
                Media Content
              </Link>

              {/* Inventory */}
              <Link
                href="/products"
                className="flex items-center gap-3 px-5 py-3 rounded-md hover:bg-[#2A2A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <span className="text-gray-400 group-hover:text-blue-400">
                  <svg class="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
                  </svg>

                </span>
                Inventory
              </Link>
            </nav>

            <select
              onChange={handleFilterChange}
              defaultValue=""
              className="w-full rounded-md bg-[#2A2A2A] text-gray-400 px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">All</option>
              <option value="/products?subsite=HealthTargetParapharmacetica">
                HealthTargetParapharmacetica
              </option>
              <option value="/products?subsite=medical-equipment">
                IraguhaPharmacy
              </option>
              <option value="/products?subsite=wellness-personal-care">
                HTPWholesale
              </option>
            </select>
          </aside>

          {/* Mobile Sidebar */}
          <aside className="md:hidden fixed bottom-0 left-0 w-full bg-[#1E1E1E] border-t border-gray-800 text-gray-400 p-3 flex justify-around items-center shadow-inner z-50">
            {[
              {
                href: "/",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 12l9-9 9 9"></path>
                    <path d="M9 21V9h6v12"></path>
                  </svg>
                ),
                label: "Home",
              },
              {
                href: "/news",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect width="18" height="14" x="3" y="7" rx="2" ry="2" />
                    <path d="M16 3v4M8 3v4M3 11h18" />
                  </svg>
                ),
                label: "Media",
              },
              {
                href: "/products",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                label: "Inventory",
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center text-xs px-3 py-1 rounded-md hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              >
                {icon}
                <span className="mt-1">{label}</span>
              </Link>
            ))}
          </aside>

          {/* Main Content */}
          <main
            className="flex-1 p-8 md:p-12 bg-[#121212] pb-16 md:pb-6"
            style={{ minHeight: "100vh" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
