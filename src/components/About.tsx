import { NavBar } from "./NavBar";
import { imagenesHome } from "../data/imagenes";
export function About() {

    return (
        <div className="min-h-screen relative bg-gradient-to-b from-gris-fondo to-color-header">
            <NavBar />

            {/* contenido general */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* apartado de tecnologias */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-botones-enlaces mb-6">Conocimientos de tecnologías</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* cards tecnologia */}
                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoHtml.url} 
                                    alt={imagenesHome.iconoHtml.alt} />
                                </div>
                            </div>
                            <h3 className="text-center font-semibold text-botones">HTML 5</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoCss.url} 
                                    alt={imagenesHome.iconoCss.alt} />
                                </div>
                            </div>
                            <h3 className="text-center font-semibold text-botones">CSS</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoJs.url} 
                                    alt={imagenesHome.iconoJs.alt} />
                                </div>
                            </div>
                            <h3 className="text-center font-semibold text-botones">JavaScript</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoScss.url} 
                                    alt={imagenesHome.iconoScss.alt} />
                                </div>
                            </div>
                            <h3 className="text-center font-semibold text-botones">SASS</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoTailwind.url} 
                                    alt={imagenesHome.iconoTailwind.alt} />
                                </div>
                            </div>
                            <h3 className="text-React font-semibold text-botones">TailWind</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.BootStrap.url} 
                                    alt={imagenesHome.BootStrap.alt} />
                                </div>
                            </div>
                            <h3 className="text-React font-semibold text-botones">BootStrap</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoMysql.url} 
                                    alt={imagenesHome.iconoMysql.alt} />
                                </div>
                            </div>
                            <h3 className="text-MySql font-semibold text-botones">MySql</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoPosgre.url} 
                                    alt={imagenesHome.iconoPosgre.alt} />
                                </div>
                            </div>
                            <h3 className="text-MySql font-semibold text-botones">Postgre</h3>
                        </div>

                        
                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoLaravel.url} 
                                    alt={imagenesHome.iconoLaravel.alt} />
                                </div>
                            </div>
                            <h3 className="text-Laravel font-semibold text-botones">Laravel</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoReact.url} 
                                    alt={imagenesHome.iconoReact.alt} />
                                </div>
                            </div>
                            <h3 className="text-React font-semibold text-botones">React</h3>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-square mb-3">
                                {/* imagen tecnologia */}
                                <div className="w-full h-full bg-gray-200 rounded-lg">
                                    <img src={imagenesHome.iconoTs.url} 
                                    alt={imagenesHome.iconoTs.alt} />
                                </div>
                            </div>
                            <h3 className="text-React font-semibold text-botones">TypeScript</h3>
                        </div>

                       
                    </div>
                </div>

                {/* descripcion */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-bold text-botones-enlaces mb-6">Sobre Mí</h2>
                    <div className="prose max-w-none">
                        {/* descripcion cv */}
                        <p className="text-gray-700">
                            Espacio reservado para tu descripción personal y profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 