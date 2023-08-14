import { useSelector } from "react-redux"
import { portfolioImages } from "../helpers"
import { PortfolioCard } from "./PortfolioCard"

export const Portfolio = () => {

    const { isLanguage } = useSelector( state => state.language )

    return (
        <div className="portfolio" id="portfolio">
            { isLanguage 
            ?
            <h3 className="portfolio__title">Portafolio</h3>
            :
            <h3 className="portfolio__title">Portfolio</h3>
            }
            <div className="portfolio__content">
                {
                    portfolioImages.map(( portfolioImage ) => {
                        return (
                            <PortfolioCard key={portfolioImage.id} { ...portfolioImage } />
                        )
                    } )
                }
            </div>
        </div>
    )
}