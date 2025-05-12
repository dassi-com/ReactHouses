// import React from "react";
import { useState } from "react"
import '../style/Navbar.css'



function Navbar() { 

  const [links, setLinks] = useState(true);

  const updateLinks = () => {
      setLinks(!links)
  }

  return (
        <div>
          <div className="bg-pink-50 py-4 sticky top-0">
              <div className="container mx-auto py-6 px-24">
                  <div className="nav-bar">

                      <div className="logo-section">
                          <h1 className="text-pink-800  font-bold">QUATER</h1>
                      </div>
                      <div className="font-semibold">
                          <div className="links-one pt-4">
                              <nav id={links ? 'open' : 'close'}>
                                  <a to="/" className="text-white p-2 text-xl hover:text-blue-600 cursor-pointer">Home</a>
                                  <a to="/About" className="text-white p-2 text-xl hover:text-blue-600 cursor-pointer">About</a>
                                  <a to="/Services" className="text-white p-2 text-xl hover:text-blue-600  cursor-pointer">Services</a>
                                  <a to="/Contact" className="text-white p-2 text-xl hover:text-blue-600  cursor-pointer">Contact</a>
                                  <h1 className="text-white cursor-pointer absolute top-10 right-10 " onClick={updateLinks}>X</h1>
                              </nav>
                          </div>
                      </div>



                      <div className="links-two">
                          <nav className=" text-pink-800">
                              <a to="/" className="p-2 text-xl hover:text-blue-600  cursor-pointer">Home</a>
                              <a to="/About" className=" p-2 text-xl hover:text-blue-600  cursor-pointer">About</a>
                              <a to="/Services" className=" p-2 text-xl hover:text-blue-600  cursor-pointer">Services</a>
                              <a to="/Contact" className=" p-2 text-xl hover:text-blue-600  cursor-pointer">Contact</a>
                          </nav>
                      </div>

                      <div className="open-close">
                          <button onClick={updateLinks} className="text-blue-950 text-2xl font-bold pt-2">Menu</button>
                      </div>


                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar;
