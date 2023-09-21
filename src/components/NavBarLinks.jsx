import { useDispatch } from "react-redux"
import { navbarLinks } from "../helpers"
import { close } from '../store/slices/show/showSlice'
import { motion } from "framer-motion"

export const NavBarLinks = () => {

    const dispatch = useDispatch()

    return (
        <motion.div 
            initial={{y: -500}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
        className="navlink">
                <button onClick={() => dispatch( close() )} className="navlink__button"> <i className="bx bx-x bx-lg"></i> </button>
            <div className="navlink__content">
                {
                    navbarLinks.map(( navLink, index ) => {
                        return (
                            <a onClick={() => dispatch( close() )} className="navlink__content__text" key={ index } href={`#${navLink.english}`}>{ navLink.spanish }</a>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}