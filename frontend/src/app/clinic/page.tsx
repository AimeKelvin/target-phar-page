"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/blocks/Navbar";

export default function Clinic() {
  const services = [
    {
      id: 1,
      name: "General Consultation",
      description: "Comprehensive health checkups and personalized medical advice.",
      image: "/placeholder-service.jpg",
    },
    {
      id: 2,
      name: "Laboratory Tests",
      description: "Accurate diagnostic services to support your treatment plan.",
      image: "/placeholder-service.jpg",
    },
    {
      id: 3,
      name: "Pediatrics",
      description: "Dedicated care for infants, children, and adolescents.",
      image: "/placeholder-service.jpg",
    },
    {
      id: 4,
      name: "Vaccinations",
      description: "Stay protected with a wide range of essential vaccines.",
      image: "/placeholder-service.jpg",
    },
  ];

  const employees = [
    { id: 1, name: "Dr. Alice Brown", position: "Chief Medical Officer", image: "/placeholder-employee.jpg" },
    { id: 2, name: "Dr. Robert Lee", position: "Pediatric Specialist", image: "/placeholder-employee.jpg" },
    { id: 3, name: "Nurse Sarah White", position: "Senior Nurse", image: "/placeholder-employee.jpg" },
  ];

  const blogPosts = [
    { id: 1, title: "5 Tips for a Healthy Lifestyle", date: "Aug 22, 2025", excerpt: "Practical ways to improve your wellbeing every day." },
    { id: 2, title: "Understanding Childhood Vaccinations", date: "Aug 10, 2025", excerpt: "Why vaccines are essential for lifelong health." },
  ];

  const partners = [
    { id: 1, name: "Hospital A", logo: "/placeholder-logo.jpg" },
    { id: 2, name: "Clinic B", logo: "/placeholder-logo.jpg" },
    { id: 3, name: "Lab C", logo: "/placeholder-logo.jpg" },
    { id: 4, name: "Insurance D", logo: "/placeholder-logo.jpg" },
  ];

  const locations = [
    { id: 1, address: "789 Health Ave, City C, State 54321" },
    { id: 2, address: "321 Wellness Rd, City D, State 98765" },
  ];

  return (
    <main className="min-h-screen text-gray-800">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <img
          src="/images/bg-og.jpg"
          alt="Clinic background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Target Clinic</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Compassionate care, advanced diagnostics, and trusted medical expertise for every patient.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition">
            Book Appointment
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold">Target Clinic</span>, our mission is to provide high-quality,
            accessible, and compassionate healthcare for families and individuals. From preventive care
            to specialized treatments, we’re here to support your health at every stage of life.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-bold mb-1">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-gray-50">
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
      <section id="employees" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Medical Team</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Health News & Updates</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Our Healthcare Partners</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Book an Appointment</h2>
          <form className="max-w-lg mx-auto space-y-4 bg-white p-8 rounded-xl shadow-lg">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Your Phone" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Your Message / Symptoms" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
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
