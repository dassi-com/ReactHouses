import mai15 from "./images/mai15.jpg"
import mai16 from "./images/mai16.jpg"
import mai17 from "./images/mai17.jpg"


function News() {
    return (
        <div>
            <div className="">
                <div className="container mx-auto p-20">
                    <div className="title text-center">
                        <button className="bg-red-100 text-orange-400 w-40 p-2 rounded-3xl font-semibold">News & Blog</button><br /><br />
                        <h1 className="font-bold text-4xl">Leatest News Feeds</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
                        <div className="content text-gray-600 hover:-translate-y-2 hover:scale-105  transition-transform  duration-500ease-in-out" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2" }}>
                            <img src={mai15} alt="" width="100%" />
                            <div className="description p-6">
                                <div className="flex justify-between">
                                    <div className="flex gap-1">
                                        <p>
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="7" r="5" stroke="orangered" strokeWidth="2" />
                                                <path d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="orangered" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </p>
                                        <p>By:Admin</p>
                                    </div>
                                    <p>Decorate</p>
                                </div>
                                <p className="text-xl font-bold py-4 hover:text-orange-500">10 Brilliant Ways To Decorate Your House</p>
                                <hr />
                                <div className="flex justify-between mt-4">
                                    <div className="flex gap-1">
                                        <p>
                                            <svg fill="orangered" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>

                                        </p>
                                        <p>June24, 2021</p>
                                    </div>
                                    <p>Decorate</p>
                                </div>
                            </div>
                        </div>

                              <div className="content text-gray-600 hover:-translate-y-2 hover:scale-105  transition-transform  duration-500ease-in-out" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2" }}>
                            <img src={mai16} alt="" width="100%" />
                            <div className="description p-6">
                                <div className="flex justify-between">
                                    <div className="flex gap-1">
                                        <p>
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="7" r="5" stroke="orangered" strokeWidth="2" />
                                                <path d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="orangered" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </p>
                                        <p>By:Admin</p>
                                    </div>
                                    <p>Decorate</p>
                                </div>
                                <p className="text-xl font-bold py-4 hover:text-orange-500">10 Brilliant Ways To Decorate Your House</p>
                                <hr />
                                <div className="flex justify-between mt-4">
                                    <div className="flex gap-1">
                                        <p>
                                            <svg fill="orangered" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>

                                        </p>
                                        <p>June24, 2021</p>
                                    </div>
                                    <p>Decorate</p>
                                </div>
                            </div>
                        </div>

                              <div className="content text-gray-600 hover:-translate-y-2 hover:scale-105  transition-transform  duration-500ease-in-out" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2" }}>
                            <img src={mai17} alt="" width="100%" />
                            <div className="description p-6">
                                <div className="flex justify-between">
                                    <div className="flex gap-1">
                                        <p>
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="7" r="5" stroke="orangered" strokeWidth="2" />
                                                <path d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="orangered" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </p>
                                        <p>By:Admin</p>
                                    </div>
                                    <p>Decorate</p>
                                </div>
                                <p className="text-xl font-bold py-4 hover:text-orange-500">10 Brilliant Ways To Decorate Your House</p>
                                <hr />
                                <div className="flex justify-between mt-4">
                                    <div className="flex gap-1">
                                        <p>
                                            <svg fill="orangered" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>

                                        </p>
                                        <p>June24, 2021</p>
                                    </div>
                                    <p>Decorate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default News