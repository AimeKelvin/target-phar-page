"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Trustworthy", "Reliable", "Solutional"];

function TypingAnimation() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (typing) {
            if (displayed.length < words[wordIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayed(words[wordIndex].slice(0, displayed.length + 1));
                }, 100);
            } else {
                setTyping(false);
                timeout = setTimeout(() => {
                    setDisplayed('');
                    setWordIndex((prev) => (prev + 1) % words.length);
                    setTyping(true);
                }, 1200);
            }
        } else {
            timeout = setTimeout(() => {
                setDisplayed('');
                setWordIndex((prev) => (prev + 1) % words.length);
                setTyping(true);
            }, 400);
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, wordIndex]);

    return (
        <span className="text-gray-800 font-semibold">
            {displayed}
            <span className="animate-pulse">|</span>
        </span>
    );
}

function Hero3() {
    return (
        <section className="bg-white min-h-[60vh] flex gap-4 flex-col items-center justify-center px-6 py-16">
            <div className="max-w-2xl w-full text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    Welcome to Target a <TypingAnimation /> Area
                </motion.h1>
            </div>
            <div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-800 mt-4"
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
                        className="inline-block px-8 py-3 rounded-full bg-gray-800 text-white font-semibold shadow hover:bg-gray-700 transition"
                    >
                        Explore Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero3;
