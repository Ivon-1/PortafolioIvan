import { Link } from 'react-router-dom';
import { imagenesHome } from '../data/imagenes';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navegación */}
            <nav className="bg-white shadow-lg bg-botones-enlaces">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex space-x-7">
                            <div className="flex items-center">
                                <Link to="/" className="text-2xl font-bold text-gray-800">Portfolio</Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to="/" className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                                <Link to="/about" className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300">About</Link>
                                <Link to="/projects" className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300">Projects</Link>
                                <Link to="/contact" className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>



            {/* Contenido principal */}
            <main className="flex-grow flex items-center justify-center">

                <div className="max-w-7xl mx-auto px-4 py-16 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                            Iván Álvarez
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-justify text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Desarrollador Full Stack Junior con sólida formación académica en DAW. Experiencia práctica en el desarrollo de aplicaciones web utilizando HTML5, CSS3, JavaScript, PHP, SCSS y React, entre otros. 
                        Conocimientos en frameworks modernos como React y Laravel, y gestión de bases de datos MySQL. Entusiasta del código limpio y las buenas prácticas de programación.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow">
                                <Link
                                    to="/projects"
                                    className="w-full flex items-center justify-center px-8 py-3 
                                    border border-transparent text-base font-medium rounded-md text-white 
                                    bg-botones-enlaces hover:bg-botones hover:text-white md:py-4 md:text-lg md:px-10
                                    
                                    "
                                >
                                    Ver Proyectos
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <Link
                                    to="/contact"
                                    className="w-full flex items-center justify-center px-8 py-3 
                                    border border-transparent text-base font-medium rounded-md 
                                    text-white md:py-4 md:text-lg md:px-10
                                    bg-botones-enlaces hover:bg-botones hover:text-white
                                    "
                                >
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* div 2 */}
                    <div className=''>
                        <img src={imagenesHome.logoPerfil.url}
                            alt={imagenesHome.logoPerfil.alt}
                            style={{
                                width: '200px',
                                height: '200px',
                                margin: '0 auto',
                                borderRadius: '50%',
                                marginTop: '20px'
                            }} />
                    </div>
                </div>
            </main>
        </div>
    );
} 