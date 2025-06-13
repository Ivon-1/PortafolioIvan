import iconoGithub from "../assets/github.jpg";
import iconoLinkedin from "../assets/linkedin.webp";
import iconoCorreo from '../assets/correo.webp';
import proyectoAbogados from '../assets/Previa.png';
import proyectoLinkedin from '../assets/proyecto-laravel-1.png';
import tfg from '../assets/modtech.png'
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

}

export {imagenesRedes}