import { useSelector } from "react-redux"
import { contacts, socials } from "../helpers"
import { ContactCard } from "./ContactCard"


export const Contact = () => {

    const { isLanguage } = useSelector( state => state.language )

    return (
        <div className="contact" id="contact">

            <div className="contact__main">
                <div className="contact__card">
                    <div className="contact__card__content">
                        { isLanguage
                        ?
                        <h3 className="contact__card__content__title">Alcanzáme</h3>
                        :
                        <h3 className="contact__card__content__title">Reach Out Me</h3>
                        }
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
                        <h3 className="contact__form__content__title">
                            { isLanguage ? 'Deja un mensaje' : 'Drop a Message'}
                            </h3>
                        
                        <div className="contact__form__content__inputs">
                            <input type="text" placeholder={ isLanguage ? 'Nombre' : 'First Name' } />
                            <input type="text" placeholder={ isLanguage ? 'Apellido' : 'Last Name' }/>
                        </div>
                        <div className="contact__form__content__inputs">
                            <input type="text" placeholder={ isLanguage ? 'Correo' : 'Email Address' } />
                            <input type="email" placeholder={ isLanguage ? 'Telefono' : 'Phone Number' } />
                        </div>
                        <div className="contact__form__content__inputs">
                            <textarea placeholder={ isLanguage ? 'Mensaje' : 'Message' }></textarea>
                        </div>
                        <div className="contact__form__content__button">
                            <a href="#">{ isLanguage ? 'Enviar' : 'Submit' }</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

