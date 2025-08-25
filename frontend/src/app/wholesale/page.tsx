"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const Wholesale: FC = () => {
  // Mock data
  const products = [
    { id: 1, name: "Household Goods", description: "Everyday essentials at scale", price: "Bulk Pricing", image: "/placeholder-product.jpg" },
    { id: 2, name: "Pharmaceutical Supplies", description: "Medicines & medical products wholesale", price: "Bulk Pricing", image: "/placeholder-product.jpg" },
    { id: 3, name: "Food & Beverages", description: "Packaged foods, drinks, and perishables", price: "Bulk Pricing", image: "/placeholder-product.jpg" },
    { id: 4, name: "Retail Products", description: "General merchandise for supermarkets", price: "Bulk Pricing", image: "/placeholder-product.jpg" },
  ];

  const employees = [
    { id: 1, name: "Alice N.", position: "Head of Wholesale Operations", image: "/placeholder-employee.jpg" },
    { id: 2, name: "John M.", position: "Logistics Manager", image: "/placeholder-employee.jpg" },
    { id: 3, name: "Grace T.", position: "Client Relations", image: "/placeholder-employee.jpg" },
  ];

  const blogPosts = [
    { id: 1, title: "Expanding Our Fleet", date: "Aug 20, 2025", excerpt: "We’ve added new trucks to improve delivery times." },
    { id: 2, title: "New Kigali Warehouse", date: "Aug 15, 2025", excerpt: "Our largest storage facility yet has opened in Kigali." },
  ];

  const partners = [
    { id: 1, name: "Partner A", logo: "/placeholder-logo.jpg" },
    { id: 2, name: "Partner B", logo: "/placeholder-logo.jpg" },
    { id: 3, name: "Partner C", logo: "/placeholder-logo.jpg" },
  ];

  const locations = [
    { id: 1, address: "Kigali Distribution Center, Kigali, Rwanda" },
    { id: 2, address: "Musanze Warehouse, Northern Province, Rwanda" },
  ];

  return (
    <main className="min-h-screen text-black">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <img src="/wholesale/bg.jpg" alt="Wholesale background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Target Wholesale</h1>
          <p className="text-2xl mb-8">Bulk solutions for businesses across Rwanda</p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded">
            Explore Products
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Target Wholesale provides high-quality products in bulk to businesses, pharmacies, and retailers. We ensure reliable supply, competitive pricing, and logistical support to help your business thrive.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg">
            <li>Bulk Distribution</li>
            <li>Competitive Pricing</li>
            <li>Logistics Support</li>
            <li>Business Partnerships</li>
          </ul>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="mb-2">{product.description}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Locations</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-lg">
            {locations.map((loc) => (
              <li key={loc.id}>{loc.address}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Employees */}
      <section id="employees" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <div key={employee.id} className="bg-white p-4 rounded-lg text-center shadow-lg">
                <img src={employee.image} alt={employee.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">{employee.name}</h3>
                <p>{employee.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">News & Updates</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm mb-2">{post.date}</p>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex items-center justify-center min-w-[150px]">
                  <img src={partner.logo} alt={partner.name} className="h-24 object-contain grayscale hover:grayscale-0 transition" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 bg-white border border-gray-300 rounded text-black" />
            <input type="email" placeholder="Your Email" className="w-full p-2 bg-white border border-gray-300 rounded text-black" />
            <textarea placeholder="Your Message" className="w-full p-2 bg-white border border-gray-300 rounded h-32 text-black"></textarea>
            <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Wholesale;
