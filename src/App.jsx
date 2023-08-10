import { useDispatch, useSelector } from "react-redux"
import { ButtonNav, Preloader, Hero, AboutMe, Portfolio, Contact } from "./components"
import { NavLink } from "./components/NavLink"

export const App = () => {

    const { isShow } = useSelector( state => state.show )

  return (
      <>
        { isShow && <NavLink /> }
        {/* <Preloader /> */}
        <ButtonNav />
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </>
  )
}


