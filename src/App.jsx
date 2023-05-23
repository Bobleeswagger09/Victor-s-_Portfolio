import About from './Components/About/About'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Testimonial  from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App