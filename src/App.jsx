import { Navbar, Preloader, Hero, AboutMe, Portfolio, Contact } from "./components"


const App = () => {
  return (
      <>
        <Preloader />
        <Navbar />
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </>
  )
}

export default App
