import { icons } from "../helpers"

export const AboutMe = () => {
    return (
        <div className="about" id="about me">
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
                        I'm a computer engineering student and an as piring software developer
                         based in Barranquilla, Colombia who's fascinated with web technologies.
                          Here's what I can help you with:
                          </p>
                    <p className="about__content__presentation--skill">
                        💻 Building <span>highly interactive front end</span> 
                        and user interfaces as single page applications
                        </p>
                    <p className="about__content__presentation--skill">
                        🗄️ Developing <span>robust, efficient and secure backend API</span>
                         with NoSQL database connectivity
                         </p>
                    <p className="about__content__presentation--skill">
                        🎨 Design <span>user centric interfaces</span> 
                        to achieve top notch user experience
                        </p>
                </div>
            </div>
        </div>
    )
}
