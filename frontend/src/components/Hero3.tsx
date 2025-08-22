"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";

const words = ["Trustworthy", "Reliable", "Compassionate"];

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
                    setDisplayed("");
                    setWordIndex((prev) => (prev + 1) % words.length);
                    setTyping(true);
                }, 2000);
            }
        } else {
            timeout = setTimeout(() => {
                setDisplayed("");
                setWordIndex((prev) => (prev + 1) % words.length);
                setTyping(true);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [displayed, typing, wordIndex]);

    return (
        <span className="text-gray-600 font-semibold">
            {displayed}
            <span className="animate-pulse">|</span>
        </span>
    );
}

function Hero3() {
    return (
        <section className="w-full bg-gradient-to-br from-gray-50 items-center to-gray-50 grid grid-cols-1 md:grid-cols-2 py-24 gap-6 p-6 md:p-12 lg:p-16 h-[100vh]">
            <div className="max-w-lg w-full text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                >
                    Welcome to Target Complex
                    <br />
                    A <TypingAnimation /> Area
                </motion.h1>
            </div>
            <div className="max-w-lg w-full">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-xl text-gray-800 mt-4 leading-relaxed"
                >
                    We are dedicated to empowering individuals to lead healthier,
                    more fulfilling lives by delivering innovative and personalized care solutions.
                    Our approach combines the latest advancements in medical technology with compassionate support, all within a meticulously designed,
                    state-of-the-art environment that fosters healing, comfort, and overall well-being.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-6"
                > <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#explore"
                            className="inline-flex items-center gap-4 px-4 py-2 rounded-l bg-white text-black font-semibold shadow-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
                        >
                            Read More <MoveRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#explore"
                            className="inline-flex items-center gap-4 px-4 py-2 rounded-l bg-gray-900 text-white font-semibold shadow-lg hover:text-gray-900 hover:bg-white transition-colors duration-300"
                        >
                            Inquire Now <PhoneCall className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero3;