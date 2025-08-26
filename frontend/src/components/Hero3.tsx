import React from "react";


const Hero3: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-6 md:px-16 lg:px-32">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
                    Welcome to <span className="text-blue-500">Target Phar</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-700 mb-8">
                    Discover modern solutions for your pharmacy needs. Fast, reliable, and designed for you.
                </p>
                <nav aria-label="Hero actions" className="flex flex-col md:flex-row gap-4 justify-center">
                    {/* Replace <a> with <Link> if using React Router */}
                    <a
                        href="#get-started"
                        tabIndex={0}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-200"
                    >
                        Get Started
                    </a>
                    <a
                        href="#learn-more"
                        tabIndex={0}
                        className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow transition duration-200"
                    >
                        Learn More
                    </a>
                </nav>
            </div>
            <div className="mt-12 flex justify-center">
                <img
                    src="/hero-pharmacy.svg"
                    alt="Illustration of a modern pharmacy"
                    className="w-full max-w-md rounded-xl shadow-lg"
                    loading="lazy"
                />
            </div>
        </header>
    );
};

export default Hero3;