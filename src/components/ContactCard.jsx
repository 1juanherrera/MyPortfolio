

export const ContactCard = ({ icon, infoText, link }) => {
    return (
        <div className="social__card">
            <a href={ link } target="_blank" className="social__card__icon">{ icon }</a>
            <p className="social__card__text">{ infoText }</p>
        </div>
    )
}

