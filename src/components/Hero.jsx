import { useSelector } from "react-redux"
import resume from '../documentPDF/cvJuan.pdf'

export const Hero = () => {

    const { isLanguage } = useSelector( state => state.language )

    return (
        <div className="hero">
            { isLanguage ?
                    <div className="hero__content">
                        <p className="hero__content__greeting">Hola, soy</p>
                        <h2 className="hero__content__name">Juan Herrera</h2> 
                        <h3 className="hero__content__headline">Desarrollador frontend y diseñador</h3>
                    <div className="hero__content__about">
                        <p>
                        Soy un ávido desarrollador web apasionado por el mundo UI con experiencia en la creación de aplicaciones web 
                        receptivas que a sus clientes les encantaría usar! Me encantaría ser parte de tu equipo, si tienes alguna 
                        duda o quieres saber más de mi, puedes contactarme a través de mis redes sociales o por un mensaje a traves del 
                        formulario de contacto.
                        </p>
                    </div>
                    <div className="hero__content__button">
                        <button className="hero__content__button--1" type="submit">
                            <a href="#contact">Contáctame</a>
                        </button>
                        <button className="hero__content__button--2" type="submit">
                            <a href={ resume } target="_blank" >Currículum</a>
                        </button>
                    </div>
                </div>
                :
                <div className="hero__content">
                        <p className="hero__content__greeting">Hello there, I'm</p>
                        <h2 className="hero__content__name">Juan Herrera</h2> 
                        <h3 className="hero__content__headline">Frontend Developer & Designer</h3>
                    <div className="hero__content__about">
                        <p>
                            I'm an avid web developer passionate about the world UI experienced in building
                            responsive web applications which your customers would love using! I would love to be part of your team, 
                            if you have any questions or want to know more about me, you can contact me through my social 
                            networks or by sending me a message through the contact form.
                        </p>
                    </div>
                    <div className="hero__content__button">
                        <button className="hero__content__button--1" type="submit">
                            <a href="#contact">Contact Me</a>
                        </button>
                        <button className="hero__content__button--2" type="submit">
                            <a href={ resume } target="_blank" >Resume</a>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}