import { Link } from "react-router-dom"
import Service from "./Service"
import News from "./News"
import Features from "./Features"

function Services() {
    return(
        <div>
                           {/*Hero*/}
            <div className="py-20 bg-right-top bg-cover" style={{ backgroundImage: "url('/src/assets/images/mai23.jpg')" }}>
                <div className="container mx-auto p-10 mt-40">
                    <h1 className="font-bold text-5xl">Our Services</h1>
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
                        <p className="font-bold">Services</p>
                    </div>
                </div>
            </div>

              <News />

            {/*service*/}
            <Service />

            <Features />

          
        </div>
    )
}

export default Services