// icons
import { AiFillHtml5, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaCss3Alt, FaFigma, FaSass, FaNodeJs, FaPhoneAlt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoPython, BiLogoTypescript, BiLogoRedux, BiLogoPostgresql, BiLogoBootstrap } from "react-icons/bi";
import { FiMail, FiInstagram } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6"

// Portfolio Images
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'

export const icons = [ 
    {
        icon: <AiFillHtml5 />,
        name: 'HTML'
    },
    {
        icon: <FaCss3Alt />,
        name: 'CSS'
    },
    {
        icon: <BiLogoJavascript />, 
        name: 'JavaScript'
    },
    {
        icon: <BiLogoTypescript />, 
        name: 'TypeScript'
    },
    {
        icon: <BiLogoReact />,
        name: 'React'
    },
    {
        icon: <BiLogoPython />, 
        name: 'Python'
    },
    {
        icon: <FaNodeJs />,
        name: 'NodeJS'
    },
    {
        icon: <BiLogoRedux />,
        name: 'Redux'
    },
    {
        icon: <FaSass />,
        name: 'SASS'
    },
    {
        icon: <FaFigma />,
        name: 'Figma'
    },
    {
        icon: <AiFillGithub />,
        name: 'GitHub'
    },
    {
        icon: <BiLogoPostgresql />,
        name: 'PostgreSQL'
    },
    {
        icon: <BiLogoBootstrap />,
        name: 'Bootstrap'
    },
    {
        icon: <SiExpress />,
        name: 'Express'
    },
    {
        icon: <PiFramerLogoFill />,
        name: 'Framer'
    }
];  

export const portfolioImages = [
    {
        id: 2,
        img: work2,
        name: 'xMovies',
        visit: 'https://x-movies-olive.vercel.app/',
        github: 'https://github.com/1juanherrera/xMovies',
        design: 'https://www.figma.com/file/UUSUyIn6guz9aOFa4Qg7av/xMovies?type=design&mode=design&t=J7UJ8SLCH0qSlG7F-1'

    },
    {
        id: 3,
        img: work3,
        name: 'Pokedex',
        visit: 'https://pokedex-git-main-1juanherrera.vercel.app/',
        github: 'https://github.com/1juanherrera/pokedex' 
    },
    {
        id: 4,
        img: work4,
        name: 'WeatherApp',
        visit: 'https://weather-app-jh1.netlify.app/',
        github: 'https://github.com/1juanherrera/weatherApp' 
    },
    {
        id: 1,
        img: work1,
        name: 'Portfolio',
        github: 'https://github.com/1juanherrera/MyPortfolio',
        design: 'https://www.figma.com/file/vrlxFfdoLyBFOSOVj4KRm5/Mi-portafolio?type=design&node-id=0%3A1&mode=design&t=J7UJ8SLCH0qSlG7F-1'
    }
]
       
export const contacts = [
    {
        id: 1,
        icon: <FaLocationDot />,
        infoText: 'Barranquilla, Colombia',
    },
    {
        id: 2,
        icon: <FiMail />,
        infoText: 'juan.herreram@pca.edu.co'
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        infoText: '+57 3153261932',
        link: 'https://wa.link/ezwso8'
    }
]

export const socials = [ 
    {
        id: 1,
        icon: <AiFillGithub />,
        link: 'https://github.com/1juanherrera'
    },
    {
        id: 2,
        icon: <AiFillLinkedin />,
        link: 'https://www.linkedin.com/in/juanherreramu%C3%B1oz/'
    },
    {
        id: 3,
        icon: <FiInstagram />,
        link: 'https://www.instagram.com/1juanherrera/'
    }
]

export const navLinks = [ "start", "about me", "portfolio", "contact" ]

export const navbarLinks = [ 
    {
        spanish: "Inicio",
        english: "start" 
    }, 
    {
        spanish: "acerca de mí", 
        english: "about me"
    },
    {
        spanish: "portafolio", 
        english: "portfolio"
    },
    {
        spanish: "contacto",
        english: "contact"
    }
]              