import { Link } from 'react-router-dom';
import { imagenesHome } from '../data/imagenes';
import { NavBar } from './NavBar';
import  cvFile  from '../assets/Ivan_Alvarez_CV_Desarrollador_Web.pdf';

export function Home() {
    return (


        <div className="flex flex-col min-h-screen">
            <NavBar />

            {/* Contenido principal */}
            <main className="flex-grow flex items-center justify-center">

                <div className="max-w-5xl mx-auto px-4 py-16 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl md:text-6xl">
                            Iván Álvarez
                        </h1>

                        <p className="mt-3 max-w-md mx-auto text-justify text-blue-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Desarrollador Full Stack Junior con sólida formación académica en DAW. Experiencia práctica en el desarrollo de aplicaciones web utilizando HTML5, CSS3, JavaScript, PHP, SCSS y React, entre otros.
                            Conocimientos en frameworks modernos como React y Laravel, y gestión de bases de datos MySQL. Entusiasta del código limpio y las buenas prácticas de programación.
                        </p>

                        <div className="mt-5 max-w-3xl mx-auto sm:flex sm:justify-center sm:gap-3 md:mt-8">
                            <div className="rounded-md shadow">
                                <Link
                                    to="/projects"
                                    className="w-full flex items-center justify-center px-8 py-3 
                                    border border-transparent text-base font-medium rounded-md text-white 
                                    bg-botones-enlaces hover:bg-botones hover:text-white md:py-4 md:text-lg md:px-10"
                                >
                                    Ver Proyectos
                                </Link>
                            </div>

                            <div className="mt-3 rounded-md shadow sm:mt-0">
                                <Link
                                    to="/contact"
                                    className="w-full flex items-center justify-center px-8 py-3 
                                    border border-transparent text-base font-medium rounded-md 
                                    text-white md:py-4 md:text-lg md:px-10
                                    bg-botones-enlaces hover:bg-botones hover:text-white"
                                >
                                    Contacto
                                </Link>
                            </div>

                            <div className="mt-3 rounded-md shadow sm:mt-0">
                                <a
                                    href={cvFile}
                                    download={cvFile}
                                    className="w-full flex items-center justify-center px-8 py-3 
                                    border border-transparent text-base font-medium rounded-md 
                                    text-white md:py-4 md:text-lg md:px-10
                                    bg-botones-enlaces hover:bg-botones hover:text-white"
                                >
                                    Descargar CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* div 2 */}
                    <div>
                        <img
                            src={imagenesHome.logoPerfil.url}
                            alt={imagenesHome.logoPerfil.alt}
                            style={{
                                width: '200px',
                                height: '200px',
                                margin: '0 auto',
                                borderRadius: '50%',
                                marginTop: '20px'
                            }}
                        />
                    </div>
                </div>

            </main>
        </div>
    );
} 