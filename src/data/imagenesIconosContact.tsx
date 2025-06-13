import iconoGithub from "../assets/github.jpg";
import iconoLinkedin from "../assets/linkedin.webp";
import iconoCorreo from '../assets/correo.webp';

interface iconos{
    id: number, 
    url: string,
    alt: string
}

interface iconosRedes{
    iconoGithub: iconos;
    iconoLinkedin: iconos;
    iconoCorreo: iconos;
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

}

export {imagenesRedes}