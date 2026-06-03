import About from "./Components/About"
import Certifications from "./Components/Certifications"
import Contact from "./Components/Contact"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Achievement from "./Components/Achievements"
import Hobbies from "./Components/Hobbies"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
      <Navbar />
      <Hero />

      {/* All sections are full width and internally padded */}
      <About />
      {/* <Projects /> */}
      <Certifications />
      <Education />
      <Achievement />
      <Hobbies />
      <Contact />

      <Footer />
    </div>
  )
}

export default App
