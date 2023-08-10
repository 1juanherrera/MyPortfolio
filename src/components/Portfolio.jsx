import { portfolioImages } from "../helpers"
import { PortfolioCard } from "./PortfolioCard"

export const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h3 className="portfolio__title">Portfolio</h3>
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