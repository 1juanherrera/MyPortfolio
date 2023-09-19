import { MdVisibility } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import { motion } from "framer-motion"

export const PortfolioCard = ({ img, name, visit, github }) => {
    return (
        <a href={ visit } className="card">
                <div className="card__content">
                    <img src={ img } alt={ name } />
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className='card__content__hover'>
                        <div className="card__content__hover--links">
                            <a href={ visit } style={{ display: visit == null ? 'none' : '' }} target='_blank' className="card__content__hover__links--link">
                                <MdVisibility />
                                </a>
                            <a href={ github } target='_blank' className="card__content__hover__links--link">
                                <HiCode />
                                </a>
                        </div>
                </motion.div>
                </div>
                <p className="card__name">{ name }</p>  
        </a>
    )
}
