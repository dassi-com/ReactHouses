import { Link } from "react-router-dom";
import { useState } from "react"
import logo from "../assets/images/logo2.png"
import '../style/Navbar.css'



function Navbar() { 

  const [links, setLinks] = useState(true);

  const updateLinks = () => {
      setLinks(!links)
  }

  return (
        <div>
          <div className="bg-black  fixed top-0 left-0 w-full shadow-md z-50">
              <div className="container mx-auto py-2 px-24">
                  <div className="nav-bar">

                      <div className="logo-section">
                          <img src={logo} alt=""  width="200px" />
                      </div>
                      <div className="font-semibold">
                          <div className="links-one pt-4">
                              <nav id={links ? 'open' : 'close'}>
                                  <Link to="/" className="text-white p-2 text-xl hover:text-blue-600 cursor-pointer">Home</Link>
                                  <Link to="/Aboutus" className="text-white p-2 text-xl hover:text-blue-600 cursor-pointer">About Us</Link>
                                  <Link to="/Services" className="text-white p-2 text-xl hover:text-blue-600  cursor-pointer">Services</Link>
                                  <Link to="/Contact" className="text-white p-2 text-xl hover:text-blue-600  cursor-pointer">Contact</Link>
                                  <h1 className="text-white cursor-pointer absolute top-10 right-10 " onClick={updateLinks}>X</h1>
                              </nav>
                          </div>
                      </div>



                      <div className="links-two">
                          <nav className=" text-white">
                              <Link to="/" className="p-2 text-xl hover:text-blue-600  cursor-pointer">Home</Link>
                              <Link to="/Aboutus" className=" p-2 text-xl hover:text-blue-600  cursor-pointer">About Us</Link>
                              <Link to="/Services" className=" p-2 text-xl hover:text-blue-600  cursor-pointer">Services</Link>
                              <Link to="/Contact" className=" p-2 text-xl hover:text-blue-600  cursor-pointer">Contact</Link>
                          </nav>
                      </div>

                      <div className="open-close">
                          <button onClick={updateLinks} className="text-white text-xl font-bold pt-2">Menu</button>
                      </div>


                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar;
