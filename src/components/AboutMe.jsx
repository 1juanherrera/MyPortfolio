import { useSelector } from "react-redux"
import { icons } from "../helpers"

export const AboutMe = () => {

    const { isLanguage } = useSelector( state => state.language )

    return (
        <div className="about" id="about me">
            { isLanguage ?
                <div className="about__content">
                <div className="about__content__icons">
                {
                    icons.map((icon, index) => {
                        return (
                                <div className="about__content__icons--icon" key={ index }> 
                                        { icon.icon } 
                                        <p>{ icon.name }</p>
                                    </div>
                        )
                    })
                }
                </div>
                <div className="about__content__presentation">
                    <h3 className="about__content__presentation--text">Acerca de mí</h3>
                    <p className="about__content__presentation--paragraph">
                    Soy estudiante de ingeniería en sistemas y desarrollador de software 
                    radicado en Barranquilla, Colombia, fascinado con las tecnologías web. 
                    Esto es en lo que te puedo ayudar:
                          </p>
                    <p className="about__content__presentation--skill">
                        💻 Creación de interfaces de usuario <span>front-end altamente interactivos</span> como aplicaciones de una sola página
                        </p>
                    <p className="about__content__presentation--skill">
                        🗄️ Desarrollo <span>de una API de back-end robusta, eficiente y segura</span> con conectividad de base de datos NoSQL
                         </p>
                    <p className="about__content__presentation--skill">
                        🎨 Diseño con <span>interfaces centradas en el usuario</span> para lograr una experiencia de usuario de primer nive
                        </p>
                </div>
            </div>
            :
            <div className="about__content">
                <div className="about__content__icons">
                {
                    icons.map((icon, index) => {
                        return (
                                <div className="about__content__icons--icon" key={ index }> 
                                        { icon.icon } 
                                        <p>{ icon.name }</p>
                                    </div>
                        )
                    })
                }
                </div>
                <div className="about__content__presentation">
                    <h3 className="about__content__presentation--text">About Me</h3>
                    <p className="about__content__presentation--paragraph">
                        I'm a systems engineering student and an as piring software developer
                         based in Barranquilla, Colombia who's fascinated with web technologies.
                          Here's what I can help you with:
                          </p>
                    <p className="about__content__presentation--skill">
                        💻 Building <span>highly interactive front end</span> and user interfaces as single page applications
                        </p>
                    <p className="about__content__presentation--skill">
                        🗄️ Developing <span>robust, efficient and secure backend API</span> with NoSQL database connectivity
                         </p>
                    <p className="about__content__presentation--skill">
                        🎨 Design <span>user centric interfaces</span> to achieve top notch user experience
                        </p>
                </div>
            </div>
            }
        </div>
    )
}
