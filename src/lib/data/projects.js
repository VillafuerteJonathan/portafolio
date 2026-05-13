// IMÁGENES
import strongImg from '../images/strong.jpg';
import restauranteImg from '../images/restaurante.jpg';
import portafolioImg from '../images/Portafolio.jpg';
import seguridadImg from '../images/seguridad.jpg';
import plantaImg from '../images/plantaenferma.jpg';
import simuladorImg from '../images/SimuladorCredito.jpg';

// VIDEOS
import strongVideo from '../videos/strong.mp4';
import restauranteVideo from '../videos/restaurante.mp4';
import portafolioVideo from '../videos/Portafolio.mp4';
import seguridadVideo from '../videos/seguridad.mp4';
import plantaVideo from '../videos/plantaenferma.mp4';
import simuladorVideo from '../videos/SimuladorCredito.mp4';

export const PROJECTS = [
    {
        id: 1,
        title: "Catálogo de Calzado Strong",
        desc: "Plataforma web basada en un catálogo digital de calzado industrial.",
        img: strongImg,
        tech: ["React + Vite", "Node.js", "MySQL", "TypeScript", "CSS"],
        code: "https://github.com/VillafuerteJonathan/Strong",
        video: strongVideo,
    },
    {
        id: 2,
        title: "Menú Restaurante Tradición y Tierra",
        desc: "Aplicación responsive para mostrar el menú completo de un restaurante.",
        img: restauranteImg,
        tech: ["React", "Node.js", "JavaScript", "MySQL", "CSS"],
        code: "https://github.com/VillafuerteJonathan/RestaruranteTradicionyTierra",
        video: restauranteVideo,
    },
    {
        id: 3,
        title: "Portafolio Personal",
        desc: "Portafolio desarrollado con un nuevo lenguaje por el desarrollador para mostrar habilidades, experiencia y proyectos.",
        img: portafolioImg,
        tech: ["Svelte", "Vite", "Tailwind", "TypeScript"],
        code: "https://github.com/OscarJRM/financial-simulator-app",
        video: portafolioVideo,
    },
    {
        id: 4,
        title: "Bóveda de Archivos Segura 🔐",
        desc: "Sistema para cargar, cifrar, gestionar permisos y almacenar archivos de manera segura.",
        img: seguridadImg,
        tech: ["Node.js", "React", "CORS", "JWT / OTP", "Crypto"],
        code: "https://github.com/VillafuerteJonathan/seguridad1",
        video: seguridadVideo,
    },
    {
        id: 5,
        title: "Reconocimiento con IA de Enfermedades en hojas de Plantas",
        desc: "Aplicación móvil que identifica enfermedades en hojas de tomate en tiempo real utilizando IA.",
        img: plantaImg,
        tech: ["Android Studio", "Python", "IA", "TensorFlow / Keras", "Jupyter Notebook"],
        code: "https://github.com/LizardCs/ModelosReconocimientoImagenes",
        video: plantaVideo,
    },
    {
        id: 6,
        title: "Financial Simulator App",
        desc: "Simulador financiero que genera tablas de amortización utilizando distintos sistemas de cálculo.",
        img: simuladorImg,
        tech: ["Next.js", "NestJS", "Tailwind", "Docker", "TypeScript"],
        code: "https://github.com/OscarJRM/financial-simulator-app",
        video: simuladorVideo,
    }
];