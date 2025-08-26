"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/blocks/Navbar";

export default function Manufacture() {
  const products = [
    {
      id: 1,
      name: "Pharmaceutical Tablets",
      description: "High-quality generic and branded tablets produced under strict GMP standards.",
      image: "/placeholder-product.jpg",
    },
    {
      id: 2,
      name: "Syrups & Liquids",
      description: "Wide range of syrups and liquid medicines manufactured with precision.",
      image: "/placeholder-product.jpg",
    },
    {
      id: 3,
      name: "Medical Supplies",
      description: "Reliable supply of essential consumables such as gloves, masks, and syringes.",
      image: "/placeholder-product.jpg",
    },
    {
      id: 4,
      name: "Nutritional Supplements",
      description: "Vitamins, minerals, and wellness supplements formulated for better health.",
      image: "/placeholder-product.jpg",
    },
  ];

  const employees = [
    { id: 1, name: "John Smith", position: "Head of Production", image: "/placeholder-employee.jpg" },
    { id: 2, name: "Emily Johnson", position: "Quality Assurance Manager", image: "/placeholder-employee.jpg" },
    { id: 3, name: "Michael Brown", position: "Supply Chain Director", image: "/placeholder-employee.jpg" },
  ];

  const blogPosts = [
    { id: 1, title: "Inside Our Manufacturing Process", date: "Aug 12, 2025", excerpt: "Learn how we maintain quality and efficiency at scale." },
    { id: 2, title: "Future of Pharmaceutical Manufacturing", date: "Aug 1, 2025", excerpt: "Exploring trends and innovations shaping the industry." },
  ];

  const partners = [
    { id: 1, name: "Global Pharma A", logo: "/placeholder-logo.jpg" },
    { id: 2, name: "MedSupply B", logo: "/placeholder-logo.jpg" },
    { id: 3, name: "HealthCare C", logo: "/placeholder-logo.jpg" },
    { id: 4, name: "Distribution D", logo: "/placeholder-logo.jpg" },
  ];

  const locations = [
    { id: 1, address: "Factory 1 – Industrial Zone, City A" },
    { id: 2, address: "Factory 2 – Manufacturing Park, City B" },
  ];

  return (
    <main className="min-h-screen text-gray-800">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <img
          src="/images/bg-og.jpg"
          alt="Manufacturing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Target Manufacture</h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            Driving innovation in healthcare manufacturing with quality, safety, and global distribution.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition">
            Explore Capabilities
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">Target Manufacture</span> is dedicated to producing safe,
            effective, and affordable pharmaceutical products. With state-of-the-art facilities and
            rigorous quality control, we ensure excellence from production to packaging. Our mission is to
            empower global healthcare through reliable manufacturing.
          </p>
        </div>
      </section>

      {/* Products / Capabilities */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Manufactured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Facilities</h2>
          <ul className="space-y-4 text-lg">
            {locations.map((loc) => (
              <li key={loc.id} className="bg-white p-4 rounded-lg shadow-md inline-block">{loc.address}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="employees" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {employees.map((employee) => (
              <div key={employee.id} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition">
                <Image src={employee.image} alt={employee.name} width={200} height={200} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-bold">{employee.name}</h3>
                <p className="text-gray-600">{employee.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Industry Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Global Partners</h2>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex items-center justify-center min-w-[150px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={150}
                    className="h-24 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-4 bg-white p-8 rounded-xl shadow-lg">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Your Company" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
