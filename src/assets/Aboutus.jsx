import AboutComponent from "./about-compoment"
import Service from "./Service"
import Testymonies from "./Testymonies"
import News from "./News"
import men8 from "./images/men8.jpg"
import men9 from "./images/men9.jpg"
import men10 from "./images/men10.jpg"
import { Link } from "react-router-dom"

function Aboutus() {
    return (
        <div>
            {/*Hero*/}
            <div className="py-20 bg-right-top bg-cover" style={{ backgroundImage: "url('/src/assets/images/mai23.jpg')" }}>
                <div className="container mx-auto p-10 mt-40">
                    <h1 className="font-bold text-5xl">About Us</h1>
                    <div className="flex gap-10 pt-10">
                        <Link to="/">
                            <div className="flex gap-2 ">
                                <span>
                                    <svg fill="orangered" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                                        <title>home-solid</title>
                                        <path className="clr-i-solid clr-i-solid-path-1" d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z"></path>
                                        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                                    </svg>
                                </span>
                                <p className="font-bold">Home</p>
                            </div>
                        </Link>
                        <p className="font-bold">About Us</p>
                    </div>
                </div>
            </div>

            <AboutComponent />

            <Service />

            {/*Team-section*/}
            <div>
                <div className="container mx-auto p-20">
                    <div className="title text-center pt-20">
                        <button className="bg-red-50 text-orange-400 w-40 p-2 rounded-3xl font-semibold">Teams</button><br /><br />
                        <h1 className="font-bold text-4xl">Property Agents</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 py-20">
                        <div className="content hover:-translate-y-2 hover:scale-105  transition-transform  duration-500ease-in-out" style={{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.2"}}>
                            <img src={men8} alt="" width="100%"/>
                            <div className="description text-center leading-10  font-bold py-10 bg-green-50">
                                  <p className="text-2xl">Rosalina D. William</p>
                                  <h2 className="text-xl">Real Estate Broker</h2>
                           
                            </div>
                        </div>

                          <div className="content hover:-translate-y-2 hover:scale-105  transition-transform  duration-500ease-in-out" style={{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.2"}}>
                            <img src={men9} alt="" width="100%"/>
                            <div className="description text-center leading-10  font-bold py-10 bg-green-50">
                                  <p className="text-2xl">Killian Anderson</p>
                                  <h2 className="text-xl">Real Estate Broker</h2>
                           
                            </div>
                        </div>

                          <div className="content hover:-translate-y-2 hover:scale-105  transition-transform  duration-500ease-in-out" style={{boxShadow:"0 4px 12px rgba(0, 0, 0, 0.2"}}>
                            <img src={men10} alt="" width="100%"/>
                            <div className="description text-center leading-10  font-bold py-10 bg-green-50">
                                  <p className="text-2xl">Miranda H. Hallim</p>
                                  <h2 className="text-xl">Real Estate Broker</h2>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testymonies />

            <News />
        </div>
    )
}

export default Aboutus