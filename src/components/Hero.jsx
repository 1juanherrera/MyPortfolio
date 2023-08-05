

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                <p className="hero__content__greeting">Hello there, I'm</p>
                <h2 className="hero__content__name">Juan Herrera</h2>
                <h3 className="hero__content__headline">Frontend Developer & Designer</h3>
                <div className="hero__content__about">
                    <p>
                        I'm an avid web developer experienced in building full-stack
                        responsive web applications which your customers would love using! Let
                        me take you on a journey from development to deployment.
                    </p>
                </div>
                <div className="hero__content__button">
                    <button className="hero__content__button--1">Contact Me</button>
                    <button className="hero__content__button--2">Download Resume</button>
                </div>
            </div>
        </div>
    )
}