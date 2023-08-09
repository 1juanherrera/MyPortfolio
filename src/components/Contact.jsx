import { contacts, socials } from "../helpers"
import { ContactCard } from "./ContactCard"


export const Contact = () => {
    return (
        <div className="contact">

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
                                    <a className="contact__card__content__socials--social" key={ social.id } href="">{ social.icon }</a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="contact__form">

                </div>
            </div>
        </div>
    )
}

