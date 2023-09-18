import { useSelector } from "react-redux"
import { contacts, socials } from "../helpers"
import { ContactCard } from "./ContactCard"
import emailjs from "@emailjs/browser"

export const Contact = () => {

    const { isLanguage } = useSelector( state => state.language )

    const sendEmail = ( event ) => {
        event.preventDefault();

        emailjs.sendForm('service_0zz63x8', 'template_4op502v', event.target, 
        'uC57KA3_4rovtUkSz').then(response => console.log(response))
        .catch(error => console.error(error))

        event.target.reset();
    }

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
                    <form className="contact__form__content" onSubmit={sendEmail}>
                        <h3 className="contact__form__content__title">
                            { isLanguage ? 'Deja un mensaje' : 'Drop a Message'}
                            </h3>
                        
                        <div className="contact__form__content__inputs">
                            <input name="user_name" type="text" placeholder={ isLanguage ? 'Nombre' : 'First Name' } />
                            <input name="user_lastname" type="text" placeholder={ isLanguage ? 'Apellido' : 'Last Name' }/>
                        </div>
                        <div className="contact__form__content__inputs">
                            <input name="user_email" type="email" placeholder={ isLanguage ? 'Correo' : 'Email Address' } />
                            <input name="user_phone" type="text" placeholder={ isLanguage ? 'Telefono' : 'Phone Number' } />
                        </div>
                        <div className="contact__form__content__inputs">
                            <textarea name="user_message" placeholder={ isLanguage ? 'Mensaje' : 'Message' }></textarea>
                        </div>
                        <button className="contact__form__content__button">
                            { isLanguage ? 'Enviar' : 'Submit' }
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

