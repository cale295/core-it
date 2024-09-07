import React, {useState} from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent backdrop-blur-md border-b-2 fixed w-full z-50 top-0 shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-4 py-5">
                <div className="flex items-center">
                    <img src="img/nav-icon.png" alt="" className="h-7" />
                </div>
                <div className="hidden md:flex space-x-6 text-white">
                    <a href="#home" className="hover:text-gray-300 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">Home</a>
                    <a href="#about" className="hover:text-gray-300 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">About Us</a>
                    <a href="#structure" className="hover:text-gray-300 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">Structure</a>
                    <a href="#news" className="hover:text-gray-300 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">News</a>
                    <a href="#contact" className="hover:text-gray-300 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">Contact</a>
                    
                </div>
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 pt-4 pb-2 bg-transparent backdrop-blur-md text-white">
                    <a href="#home" className="block px-2 py-1 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">Home</a>
                    <a href="#about" className="block px-2 py-1 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">About Us</a>
                    <a href="#structure" className="block px-2 py-1 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">Structure</a>
                    <a href="#news" className="block px-2 py-1 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">News</a>
                    <a href="#contact" className="block px-2 py-1 hover:border-b-2 hover:border-white transition-all duration-300 ease-in-out">Contact</a>  
                </div>
            )}
        </nav>
    );
};

export default Navbar;
