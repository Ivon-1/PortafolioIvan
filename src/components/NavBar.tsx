
import { Link } from "react-router-dom";

export function NavBar() {
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
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to="/" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                                <Link to="/about" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">About</Link>
                                <Link to="/projects" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">Projects</Link>
                                <Link to="/contact" className="py-4 px-2 text-black font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}