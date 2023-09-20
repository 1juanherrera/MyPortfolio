

export const ContactCard = ({ icon, infoText, link }) => {
    return (
        <a href={ link } target="_blank" className="social__card">
            <div  target="_blank" className="social__card__icon">{ icon }</div>
            <p className="social__card__text">{ infoText }</p>
        </a>
    )
}

