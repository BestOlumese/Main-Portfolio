import Header from "./components/Header"
import Marquee from "./components/Marquee"
import Contact from "./pages/Contact"
import Expericence from "./pages/Expericence"
import Footer from "./pages/Footer"
import Portfolios from "./pages/Portfolios"
import Skills from "./pages/Skills"

function App() {

  return (
    <div className="overflow-hidden">
      <Header />
      <Marquee />
      <Expericence />
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
