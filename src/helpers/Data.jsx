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
        name: 'Redux0'
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
        id: 1,
        img: work1,
        name: 'Saki',
        visit: 'link',
        github: 'github' 
    },
    {
        id: 2,
        img: work2,
        name: 'Coursa',
        visit: 'link',
        github: 'github' 
    },
    {
        id: 3,
        img: work3,
        name: 'Imax',
        visit: 'link',
        github: 'github' 
    },
    {
        id: 4,
        img: work4,
        name: 'Magical Things',
        visit: 'link',
        github: 'github' 
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
        infoText: '+57 3153261932'
    }
]

export const socials = [ 
    {
        id: 1,
        icon: <AiFillGithub />,
        link: ''
    },
    {
        id: 2,
        icon: <AiFillLinkedin />,
        link: ''
    },
    {
        id: 3,
        icon: <FiInstagram />,
        link: ''
    }
]
                        
                        
                        
                        