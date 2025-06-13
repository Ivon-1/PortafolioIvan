import logo from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import logo3 from '../assets/logo3.jpeg';
import fondoProjects from '../assets/fondoProjects3.jpg';
import iconoHtml from '../assets/html5.jpg';
import iconoCss from '../assets/css3.jpg';
import iconoJs from '../assets/javascript.webp';
import iconoMysql from '../assets/mysql.png';
import iconoPosgre from '../assets/postgre.png';
import iconoLaravel from '../assets/laravel.png';
import iconoReact from '../assets/react.jpg';
import iconoScss from '../assets/scss.jpg';
import iconoTailwind from '../assets/tailwind.webp';
import iconoTs from '../assets/ts.webp';
import Bootstrap from '../assets/bootstrap.jpg';

// interfaz para estructura imagenes
interface Imagenes{
    id: number, 
    url: string,
    alt: string
} 

// definimos la interfaz
interface ImagenesGenerales{
    logoPerfil: Imagenes;
    logoPerfil2: Imagenes;
    logoPerfil3: Imagenes;
    fondoProjects: Imagenes;
    iconoHtml: Imagenes;
    iconoCss: Imagenes;
    iconoJs: Imagenes;
    iconoMysql: Imagenes;
    iconoPosgre: Imagenes;
    iconoLaravel: Imagenes;
    iconoReact: Imagenes;
    iconoScss: Imagenes;
    iconoTailwind: Imagenes;
    iconoTs: Imagenes;
    BootStrap: Imagenes;

}

const imagenesHome:  ImagenesGenerales = {
    logoPerfil:{
        id: 1,
        url: logo,
        alt: 'logo de perfil',
    },
    logoPerfil2:{
        id: 2,
        url: logo2,
        alt: 'logo de perfil',
    },
    logoPerfil3:{
        id: 3,
        url: logo3,
        alt: 'logo de perfil',
    },
    fondoProjects:{
        id: 4,
        url: fondoProjects,
        alt: 'fondo'
    },
    iconoHtml:{
        id: 5,
        url: iconoHtml,
        alt: 'fondo'
    },
    iconoCss:{
        id: 6,
        url: iconoCss,
        alt: 'css'
    },
    iconoJs:{
        id: 7,
        url: iconoJs,
        alt: 'js'
    },
    iconoMysql:{
        id: 8,
        url: iconoMysql,
        alt: 'mysql'
    },
    iconoPosgre:{
        id: 9,
        url: iconoPosgre,
        alt: 'posgre'
    },
    iconoLaravel:{
        id: 10,
        url: iconoLaravel,
        alt: 'laravel'
    },
    iconoReact:{
        id: 11,
        url: iconoReact,
        alt: 'react'
    },
    iconoScss:{
        id: 12,
        url: iconoScss,
        alt: 'scss'
    },
    iconoTailwind:{
        id: 13,
        url: iconoTailwind,
        alt: 'tailwind'
    },
    iconoTs:{
        id: 14,
        url: iconoTs,
        alt: 'ts'
    },
    BootStrap:{
        id: 15,
        url: Bootstrap,
        alt: 'ts'
    }


}

export {imagenesHome};