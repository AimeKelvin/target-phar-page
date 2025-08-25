"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/blocks/Footer";

export default function Pharmacy() {
  const products = [
    { id: 1, name: "Pain Reliever", description: "Fast-acting relief for everyday aches.", price: "$5.99", image: "/placeholder-product.jpg" },
    { id: 2, name: "Vitamins", description: "Boost your immunity with daily multivitamins.", price: "$12.99", image: "/placeholder-product.jpg" },
    { id: 3, name: "Cold Medicine", description: "Effective relief for cold & flu symptoms.", price: "$8.49", image: "/placeholder-product.jpg" },
    { id: 4, name: "Bandages", description: "Assorted sizes for quick first aid.", price: "$3.99", image: "/placeholder-product.jpg" },
  ];

  const employees = [
    { id: 1, name: "John Doe", position: "Chief Pharmacist", image: "/placeholder-employee.jpg" },
    { id: 2, name: "Jane Smith", position: "Pharmacy Assistant", image: "/placeholder-employee.jpg" },
    { id: 3, name: "Mike Johnson", position: "Store Manager", image: "/placeholder-employee.jpg" },
  ];

  const blogPosts = [
    { id: 1, title: "Top 5 Health Tips for Fall", date: "Aug 20, 2025", excerpt: "Stay ahead of seasonal colds with our expert advice." },
    { id: 2, title: "Exciting Product Launches", date: "Aug 15, 2025", excerpt: "Check out the newest products now available in-store." },
  ];

  const partners = [
    { id: 1, name: "Partner A", logo: "/placeholder-logo.jpg" },
    { id: 2, name: "Partner B", logo: "/placeholder-logo.jpg" },
    { id: 3, name: "Partner C", logo: "/placeholder-logo.jpg" },
    { id: 4, name: "Partner D", logo: "/placeholder-logo.jpg" },
    { id: 5, name: "Partner E", logo: "/placeholder-logo.jpg" },
  ];

  const locations = [
    { id: 1, address: "123 Main St, City A, State 12345" },
    { id: 2, address: "456 Elm St, City B, State 67890" },
  ];

  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <img src="/pharmacy/bg.jpg" alt="Pharmacy background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Target Pharmacy</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">Trusted care, quality products, and expert guidance for your wellness journey.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold">Target Pharmacy</span>, we’re more than just a pharmacy—we’re your partner in health. With decades of combined experience, our team is committed to providing exceptional care, expert advice, and top-quality products to support every stage of your wellness journey.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {["Prescription Filling", "Vaccinations", "Health Consultations", "Delivery Services"].map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Professional, reliable, and tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="font-bold text-blue-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Locations</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
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
      <section id="blog" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">News & Updates</h2>
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

      {/* Partners - Animated Carousel */}
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
