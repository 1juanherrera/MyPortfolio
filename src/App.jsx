import { useSelector } from "react-redux"
import { ButtonNav, Preloader, Hero, AboutMe, Portfolio, Contact, Switch, NavBarLinks, NavLink } from "./components"


export const App = () => {

    const { isShow } = useSelector( state => state.show )
    const { isLanguage } = useSelector( state => state.language )

    const handleNavbar = () => {
      if (isShow === true && isLanguage === false ) {
          return <NavLink />
      } else if( isShow === true && isLanguage === true) {
          return <NavBarLinks />
      }
    }

  return (
      <>
        { handleNavbar() }
        <Preloader />
        <ButtonNav />
        <Switch />
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </>
  )
}


