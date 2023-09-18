import { motion } from "framer-motion"
import { useSelector } from "react-redux"

export const Preloader = () => {

    const { isLanguage } = useSelector( state => state.language )

    return (
        <>
            <motion.div
            transition={{ duration: 3, delay: 1 }}
            whileInView={{ opacity: 1, y: '-200%' }}
            className="preloader">
                <div
                className="preloader__content">
                    <h1 className="preloader__hide">
                        <motion.span
                        initial={{ y: '100%', opacity: 1 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, y: '0' }}
                        className="preloader__text">{ isLanguage ? 'Construyo' : 'I Craft' }</motion.span>
                    </h1>
                    <h1 className="preloader__hide">
                        <motion.span 
                        initial={{ y: '100%', opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: '0' }}
                        className="preloader__text">{ isLanguage ? 'Sitios web que' : 'Websites That' }</motion.span>
                    </h1>
                    <h1 className="preloader__hide">
                        <motion.span 
                        initial={{ y: '100%', opacity: 1 }}
                        transition={{ duration: 1.4 }}
                        whileInView={{ opacity: 1, y: '0' }}
                        className="preloader__text">{ isLanguage ? 'Te encantaría usar' : "You'd Love Using!" }</motion.span>
                    </h1>
                </div>
            </motion.div>
            <motion.div
            initial={{ y: '100%', opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            whileInView={{ opacity: 1, y: '-100%' }}
            className="preloader__slider">
                {
                    isLanguage ?
                    <>
                    <h4>Bienvenido al</h4>
                    <h2>Portafolio de</h2>
                    <h1>Juan Herrera</h1>
                    </>
                    :
                    <>
                    <h4>Welcome to</h4>
                    <h1>Juan Herrera</h1>
                    <h4>portfolio</h4>
                    </>
                }
            </motion.div>
      </>
    )
}
