import { useNavigate } from "react-router-dom";
import { imagenesHome } from "../data/imagenes";
import { imagenesRedes } from "../data/imagenesIconosContact";

export function Projects() {
    const navigate = useNavigate();

    const projects = [
        {
            title: "Abogados Rojo Álvarez",
            description: "Página web de una empresa de abogacía: Rojo Álvarez",
            tech: "HTML, CSS",
            image: imagenesRedes.proyectoAbogados.url,
            link: "https://web-abogac-a.vercel.app/"
        },
        {
            title: "ModTech",
            description: "Aplicación de venta de productos tecnológicos(TFG)",
            tech: "Laravel, MySQL, HTML, CSS, JavaScript, React, BootStrapm PostgreSQL",
            image: imagenesRedes.tfg.url,
            link: "https://github.com/Ivon-1/TFG"
        },
        {
            title: "Linkedin",
            description: "Aplicación con funcionamiento similar a Linkedin con diversas funcionalidades",
            tech: "Node.js, Express, MongoDB",
            image: imagenesRedes.proyectoLinkedin.url,
            link: "https://github.com/Ivon-1/Linkedin"
        },
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative"
            style={{
                backgroundImage: `url(${imagenesHome.fondoProjects.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center p-6 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg">
                    <h2 className="text-3xl font-extrabold text-botones-enlaces sm:text-4xl">
                        Mis Proyectos
                    </h2>
                    <p className="mt-4 text-lg text-botones font-bold font-family">
                        Una selección de mis trabajos más recientes
                    </p>
                    <div className="text-end text-white">
                        <button 
                            onClick={() => navigate('/')}
                            className="bg-color-header p-2 rounded-lg hover:bg-botones-enlaces transition-colors duration-300"
                        >
                            Volver
                        </button>
                    </div>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow-lg 
                        rounded-lg p-2 gap-3 font-bold hover:-translate-y-2 hover:shadow-xl"
                            style={{
                                border: '4px solid oklch(60.6% 0.25 292.717)',
                                transition: 'all 300ms ease-in-out'
                            }}>
                            <div className="relative">
                                <img className="m-auto mt-2 h-48 object-cover"
                                    src={project.image}
                                    alt={project.title} />

                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-botones mb-3 hover:text-botones transition-colors duration-300 cursor-pointer">{project.title}</h3>
                                <p className="mt-2">{project.description}</p>
                                <p className="mt-2">{project.tech}</p>
                                <a
                                    href={project.link}
                                    className="link-proyectos mt-4 inline-flex items-center px-4 py-2 border border-transparent 
                                    text-sm font-medium rounded-md 
                                    text-white bg-botones-enlaces hover:bg-botones transition-colors duration-300 cursor-pointer"
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        display: 'block',
                                        padding: '3%',
                                        fontSize: '20px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Ver proyecto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 