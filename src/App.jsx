import Navbar from "./assets/Navbar"
import Footer from "./assets/Footer"
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import Services from "./assets/services"
import Home from "./assets/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services' element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App                              