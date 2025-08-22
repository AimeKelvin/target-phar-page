"use client"
import React from "react";
import { motion } from "framer-motion";

function Hero3() {
    return (
        <section className="bg-white min-h-[60vh] flex items-center justify-center px-6 py-16">
            <div className="max-w-2xl w-full text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    Welcome to Target Complex
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600"
                >
                    Discover seamless experiences in a bright, modern space designed for
                    comfort and productivity.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#explore"
                        className="inline-block px-8 py-3 rounded-full bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 transition"
                    >
                        Explore Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero3;
