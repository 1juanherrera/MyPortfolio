import { contacts, socials } from "../helpers"
import { ContactCard } from "./ContactCard"


export const Contact = () => {
    return (
        <div className="contact" id="contact">

            <div className="contact__main">
                <div className="contact__card">
                    <div className="contact__card__content">
                        <h3 className="contact__card__content__title">Reach Out Me</h3>
                        {
                            contacts.map(( contact ) => {
                                return (
                                    <ContactCard key={ contact.id } { ...contact }/>
                                )
                            })
                        }
                    </div>
                    <div className="contact__card__content__socials">
                        {
                            socials.map(( social ) => {
                                return (
                                    <a className="contact__card__content__socials--social" target="_blank" key={ social.id } href={social.link}>{ social.icon }</a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="contact__form">
                    <div className="contact__form__content">
                        <h3 className="contact__form__content__title">Drop a Message</h3>
                        
                        <div className="contact__form__content__inputs">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="contact__form__content__inputs">
                            <input type="text" placeholder="Email Address" />
                            <input type="email" placeholder="Phone Number" />
                        </div>
                        <div className="contact__form__content__inputs">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="contact__form__content__button">
                            <a href="#">Enviar</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

