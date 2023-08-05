import { Navbar, Preloader, Hero, AboutMe, Projects } from "./components"


const App = () => {
  return (
      <>
        <Preloader />
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
      </>
  )
}

export default App
