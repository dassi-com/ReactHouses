import Navbar from "./assets/Navbar"
import Footer from "./assets/Footer"
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import Services from "./assets/Services"
import Aboutus from "./assets/Aboutus"
import Contact from "./assets/Contact"
import Home from "./assets/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services' element={<Services />}/>
         <Route path='/Aboutus' element={<Aboutus />}/>
          <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App                              