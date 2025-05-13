import React, { useCallback } from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
    const handleScrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <header className="w-full bg-gradient-to-r from-green-800 to-green-900 py-4 px-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <div className="bg-white rounded-full p-2" aria-label="Logo">
                        <Leaf className="text-green-800 h-6 w-6" />
                    </div>
                    <h1 className="text-white text-xl md:text-2xl font-bold flex items-center">
                        Cof<span className="text-green-300">Cap</span>
                    </h1>
                </div>

                {/* Navigation Section */}
                <nav>
                    <ul className="flex space-x-4 text-sm md:text-base">
                        <li>
                            <a
                                href="#home"
                                className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                                onClick={(e) => handleScrollToSection(e, '#home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                                onClick={(e) => handleScrollToSection(e, '#about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                                onClick={(e) => handleScrollToSection(e, '#guide')}
                            >
                                Guide
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;