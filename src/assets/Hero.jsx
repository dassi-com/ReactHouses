import mai from "../assets/images/mai.png"


function Hero() {
    return (

        <div>
            <div className="">
                <div className="container mx-auto p-20">
                    <div className="grid lg:grid-cols-2 gap-10 pt-32">
                        <div className="img">
                            <img src={mai} alt="" width="100%" />
                        </div>
                        <div className="content flex  items-center ">
                            <div className="">
                                <div className=" flex gap-1">
                                    <p><span><svg fill="orangered" width="20px" height="20px" viewBox="0 0 24 24" version="1.2"
                                        baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
                                    </svg></span></p>
                                    <p><strong> Real Estate Agency</strong></p>
                                </div><br />
                                <h1 className="font-bold text-3xl">FIND YOUR DREAM HOUSE BY US</h1><br />
                                <div className="text-gray-500 py-6 px-4 bg-gray-100  border-4  border-l-orange-400 border-t-0 border-b-0 border-r-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa rem veritatis cupiditate corporis aperiam officia temporibus similique, harum delectus doloribus.</p>
                                </div>
                                <div className="button">
                                     <button className="my-6 border-2  bg-orange-400 p-4 font-semibold w-44 text-white rounded-md hover:bg-white hover:text-orange-400 duration-300 border-orange-400 ">Learn More</button>
                                     <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero