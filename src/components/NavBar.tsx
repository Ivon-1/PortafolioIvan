import { Link } from "react-router-dom";
import { useState } from "react";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navegación */}
            <nav className="bg-color-header shadow-lg bg-botones-enlaces">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex space-x-7">
                            <div className="flex items-center">
                                <Link to="/" className="text-2xl font-bold text-gray-800">Portfolio</Link>
                            </div>
                            {/*menu */}
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to="/" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                                <Link to="/about" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">About</Link>
                                <Link to="/projects" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">Projects</Link>
                                <Link to="/contact" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
                            </div>
                        </div>
                        {/*  hamburguesa para móviles */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-black hover:text-blue-500 bg-gris-fondo focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menú móvil */}
                {isOpen && (
                    <div className="md:hidden bg-transparent backdrop-blur-sm">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-black font-semibold hover:text-blue-500 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block px-3 py-2 text-black font-semibold hover:text-blue-500 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/projects"
                                className="block px-3 py-2 text-black font-semibold hover:text-blue-500 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 text-black font-semibold hover:text-blue-500 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}