import logo from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import logo3 from '../assets/logo3.jpeg';
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
    }
}

export {imagenesHome};