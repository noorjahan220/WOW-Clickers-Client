import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex items-center justify-center px-4 py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="w-full max-w-6xl">
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 px-2 md:px-0">
                    <div>
                        <h4 className="text-xs sm:text-sm text-cyan-500 font-semibold uppercase tracking-wider mb-2">
                            Leave Your Message
                        </h4>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 dark:text-cyan-400">
                            Get In Touch
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-[90%] lg:w-[85%] mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 transition-colors duration-300">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-5 py-3 text-sm placeholder-gray-400 border border-blue-300 dark:border-gray-600 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-5 py-3 text-sm placeholder-gray-400 border border-blue-300 dark:border-gray-600 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-5 py-3 text-sm placeholder-gray-400 border border-blue-300 dark:border-gray-600 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <input
                                type="text"
                                placeholder="Your Number"
                                className="w-full px-5 py-3 text-sm placeholder-gray-400 border border-blue-300 dark:border-gray-600 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <textarea
                            rows="5"
                            placeholder="Leave Your Message Here…"
                            className="w-full px-5 py-3 text-sm placeholder-gray-400 border border-blue-300 dark:border-gray-600 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 text-white font-semibold text-sm rounded transition duration-300"
                            style={{
                                background: 'linear-gradient(to right, #06b6d4, #3b82f6)', // cyan-500 to blue-500
                            }}
                        >
                            Send Your Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
