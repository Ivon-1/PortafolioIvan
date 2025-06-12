import { imagenesHome } from "../data/imagenes";


export function Projects() {
    const projects = [
        {
            title: "Abogados Rojo Álvarez",
            description: "Página web de una empresa de abogacía",
            tech: "HTML, CSS",
            image: imagenesHome.logoPerfil.url,
            link: "#"
        },
        {
            title: "ModTech",
            description: "Descripción del proyecto 2",
            tech: "Node.js, Express, MongoDB",
            image: imagenesHome.logoPerfil2.url,
            link: "#"
        },
        {
            title: "Proyecto 3",
            description: "Descripción del proyecto 2",
            tech: "Node.js, Express, MongoDB",
            image: imagenesHome.logoPerfil3.url,
            link: "#"
        },
    ];

    return (
        <div className="min-h-screen bg-gris-fondo py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Mis Proyectos
                    </h2>
                    <p className="mt-4 text-lg text-white font-bold font-family">
                        Una selección de mis trabajos más recientes
                    </p>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg p-2 gap-3 font-bold">
                            <div className="relative">
                                <img className="m-auto mt-2 h-48 object-cover"
                                    src={project.image}
                                    alt={project.title} />

                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-botones-enlaces mb-3 hover:text-botones transition-colors duration-300 cursor-pointer">{project.title}</h3>
                                <p className="mt-2">{project.description}</p>
                                <p className="mt-2">{project.tech}</p>
                                <a
                                    href={project.link}
                                    className="link-proyectos mt-4 inline-flex items-center px-4 py-2 border border-transparent 
                                    text-sm font-medium rounded-md 
                                    text-white bg-botones"
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