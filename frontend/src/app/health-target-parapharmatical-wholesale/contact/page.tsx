'use client';

import Navbar from '@/components/blocks/Navbar';
import Footer from '@/components/blocks/Footer';
import RevealOnScroll from '@/utils/RevealOnScroll';
const navLinks = [
    { href: '/health-target-parapharmatical-wholesale', label: 'Home' },
    { href: '/', label: 'target complex' },
    { href: '/health-target-parapharmatical-wholesale/products', label: 'Products' },
    { href: '/health-target-parapharmatical-wholesale/contact', label: 'Contact', isButton: true },
];

export default function ContactPage() {
    return (
        <main className="bg-white text-gray-900">
            <Navbar links={navLinks} />

            <section className="min-h-screen px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <RevealOnScroll>
                        <h1 className="text-4xl font-bold text-center text-[#207ae1] mb-12">
                            Get in Touch
                        </h1>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <RevealOnScroll>
                            <form className="bg-white p-8 shadow-md space-y-6 border-t-4 border-[#6fab1d]">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-[#207ae1] focus:border-[#207ae1]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-[#207ae1] focus:border-[#207ae1]"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+250 7xx xxx xxx"
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-[#207ae1] focus:border-[#207ae1]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-[#207ae1] focus:border-[#207ae1]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Your message..."
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-[#207ae1] focus:border-[#207ae1]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="border-[#6fab1d] text-[#6fab1d] border-2 px-6 py-3 rounded-lg hover:bg-[#5d9d1a] hover:text-white transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </RevealOnScroll>


                        <div className="space-y-6">
                            <RevealOnScroll>
                                <div className="bg-white p-6 shadow border-l-4 border-[#207ae1] space-y-4">
                                    <h3 className="text-2xl font-bold text-[#207ae1]">Contact Information</h3>
                                    <p className="text-gray-900">
                                        Reach out to us with any inquiries, feedback, or support.
                                    </p>
                                    <div className="space-y-2">
                                        <p><strong>Email:</strong> info@targetcomplex.rw</p>
                                        <p><strong>Phone:</strong> +250 789 123 456</p>
                                        <p><strong>Location:</strong> KN 1 Rd, Kigali, Rwanda</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                            <RevealOnScroll>
                                <div className="overflow-hidden shadow-md border border-gray-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.212496971613!2d30.061934115344936!3d-1.944071298563744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f9d83a5e6b%3A0x377b85b4018e6e2a!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1631885116710!5m2!1sen!2srw"
                                        width="100%"
                                        height="250"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
