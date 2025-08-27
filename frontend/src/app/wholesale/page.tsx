"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/blocks/Navbar";
import ProductsSection from "@/components/blocks/Products";
import NewsSection from "@/components/blocks/News";

export default function Wholesale() {


  const employees = [
    { id: 1, name: "Sarah Brown", position: "Wholesale Manager", image: "/placeholder-employee.jpg" },
    { id: 2, name: "James Lee", position: "Distribution Officer", image: "/placeholder-employee.jpg" },
    { id: 3, name: "Emily Davis", position: "Logistics Coordinator", image: "/placeholder-employee.jpg" },
  ];

  const partners = [
    { id: 1, name: "Hospital A", logo: "/placeholder-logo.jpg" },
    { id: 2, name: "Clinic B", logo: "/placeholder-logo.jpg" },
    { id: 3, name: "Retail Chain C", logo: "/placeholder-logo.jpg" },
    { id: 4, name: "Distributor D", logo: "/placeholder-logo.jpg" },
    { id: 5, name: "Health Org E", logo: "/placeholder-logo.jpg" },
  ];

  const locations = [
    { id: 1, address: "Warehouse A - 123 Industrial Park, City A" },
    { id: 2, address: "Distribution Hub B - 456 Trade Zone, City B" },
  ];

  return (
    <main className="min-h-screen text-gray-800">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <img
          src="/images/bg-og.jpg"
          alt="Wholesale background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Target Wholesale</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Supplying hospitals, pharmacies, and institutions with reliable wholesale solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition">
            Explore Wholesale
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold">Target Wholesale</span>, we focus on bulk supply and distribution for healthcare providers and retailers.
            With efficient logistics and trusted partnerships, we ensure reliable delivery and competitive pricing for our clients.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {["Bulk Ordering", "Distribution Logistics", "Hospital Supply", "Retail Partnerships"].map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Reliable and scalable solutions tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
    <ProductsSection />

      {/* Locations */}
      <section id="locations" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Warehouses</h2>
          <ul className="space-y-4 text-lg">
            {locations.map((loc) => (
              <li key={loc.id} className="bg-white p-4 rounded-lg shadow-md inline-block">{loc.address}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="employees" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Wholesale Team</h2>
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
    <NewsSection />

      {/* Partners */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Partners</h2>
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
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <form className="max-w-lg mx-auto space-y-4 bg-white p-8 rounded-xl shadow-lg">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
