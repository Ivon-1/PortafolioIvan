import iconoGithub from "../assets/github.jpg";
import iconoLinkedin from "../assets/linkedin.webp";
import iconoCorreo from '../assets/correo.webp';
import proyectoAbogados from '../assets/Previa.png';
import proyectoLinkedin from '../assets/proyecto-laravel-1.png';
import tfg from '../assets/modtech.png'
import tiendaPhp from '../assets/tienda_php.png';
import tiendaProductos from '../assets/tienda_productos.png';
import padel from '../assets/padel.png';
import taller from '../assets/taller_vehiculos.png';


interface iconos{
    id: number, 
    url: string,
    alt: string
}

interface iconosRedes{
    iconoGithub: iconos;
    iconoLinkedin: iconos;
    iconoCorreo: iconos;
    proyectoAbogados: iconos;
    proyectoLinkedin: iconos;
    tfg: iconos;
    tiendaPhp: iconos;
    tiendaProductos: iconos;
    padel: iconos;
    taller: iconos;
}

const imagenesRedes: iconosRedes = {
    iconoGithub:{
        id: 1,
        url: iconoGithub,
        alt: 'github',
    },
    iconoLinkedin:{
        id: 2,
        url: iconoLinkedin,
        alt: 'linkedin',
    },
    iconoCorreo:{
        id: 3,
        url: iconoCorreo,
        alt: 'correo',
    },
    proyectoAbogados:{
        id: 4,
        url: proyectoAbogados,
        alt: 'proyectoAbogados',
    },
    proyectoLinkedin:{
        id: 5,
        url: proyectoLinkedin,
        alt: 'proyectoLinkedin',
    },
    tfg:{
        id: 6,
        url: tfg,
        alt: 'tfg',
    },
    tiendaPhp:{
        id: 7,
        url: tiendaPhp,
        alt: 'tiendaPhp',
    },
    tiendaProductos:{
        id: 8,
        url: tiendaProductos,
        alt: 'tiendaProductos',
    },
    padel:{
        id: 9,
        url: padel,
        alt: 'padel',
    },
    taller:{
        id: 10,
        url: taller,
        alt: 'taller',
    },
}

export {imagenesRedes}