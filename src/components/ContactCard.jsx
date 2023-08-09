

export const ContactCard = ({ icon, infoText }) => {
    return (
        <div className="social__card">
            <div className="social__card__icon">{ icon }</div>
            <p className="social__card__text">{ infoText }</p>
        </div>
    )
}

