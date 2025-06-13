import { NavBar } from "./NavBar";
import { imagenesRedes } from "../data/imagenesIconosContact";

export function Contact() {
    return (
        <div className="min-h-screen relative bg-gradient-to-b from-gris-fondo to-color-header">
            <NavBar />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-bold text-botones-enlaces mb-8 text-center">Contacto</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* GitHub */}
                        <a 
                            href="https://github.com/Ivon-1/Ivon-1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 mb-4">
                                <img 
                                    src={imagenesRedes.iconoGithub.url} 
                                    alt={imagenesRedes.iconoGithub.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-botones">GitHub</h3>
                            <p className="text-gray-600 mt-2">Ivon-1</p>
                        </a>

                        {/* linkedin */}
                        <a 
                            href="https://www.linkedin.com/in/ivan-alvarez-garcia2/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 mb-4">
                                <img 
                                    src={imagenesRedes.iconoLinkedin.url} 
                                    alt={imagenesRedes.iconoLinkedin.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-botones">LinkedIn</h3>
                            <p className="text-gray-600 mt-2">Iván Álvarez</p>
                        </a>

                        {/* correo */}
                        <a 
                            href="mailto:IvanAlvz12@outlook.es" 
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 mb-4">
                                <img 
                                    src={imagenesRedes.iconoCorreo.url} 
                                    alt={imagenesRedes.iconoCorreo.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-botones">Email</h3>
                            <p className="text-gray-600 mt-2">IvanAlvz12@outlook.es</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 