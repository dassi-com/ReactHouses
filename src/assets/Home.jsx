// import React from 'react'
import Service from './Service'
import Hero from './Hero'
import AboutComponent from './about-compoment'
import Counters from './counter'
import Features from './Features'
import mai17 from "../assets/images/mai17.jpg"

import mai4 from "../assets/images/mai4.png"
import mai3 from "../assets/images/mai3.jpg"
import mai12 from "../assets/images/mai12.jpg"



function Home() {
    return (
        <div>
            {/*Hero-section*/}
            <Hero />


            {/*--------------ABOUT1-------------------*/}


            <AboutComponent />

            {/*Counters*/}
            <Counters />

            {/*----------------ABOUT2------------------*/}
            <div className="container mx-auto p-20 ">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="">
                        <div className="title  py-4">
                            <button className="bg-red-50 text-orange-400 w-40 p-2 rounded-3xl font-semibold">About Us</button><br /><br />
                            <h1 className="font-bold text-4xl">Today Sells Properties</h1>
                        </div>
                        <p className='text-gray-500'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                        <div className="list text-gray-500 ml-4">
                            <p className="mt-4"><span className="mr-1 text-orange-600 font-bold">-</span>Live Music Cocerts at Luviana</p>
                            <p><span className="mr-1 text-orange-600 font-bold ">-</span>Our SecretIsland Boat Tour is Just for You</p>
                            <p><span className="mr-1 text-orange-600 font-bold">-</span>Live Music Cocerts at Luviana</p>
                            <p><span className="mr-1 text-orange-600 font-bold">-</span>Live Music Cocerts at Luviana</p>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 py-5">

                            <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                <div className="flex items-center ">
                                    <h6 className='mr-1'>2</h6>
                                    <p><span>{/*---svg---*/}
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <title />
                                            <g data-name="Layer 2" id="Layer_2">
                                                <path
                                                    d="M28.5,14H28V4.1A3.1,3.1,0,0,0,24.9,1H22.4A2.39,2.39,0,0,0,20,3.4v.74A4,4,0,0,0,17,8V9a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V8a4,4,0,0,0-3-3.86V3.4a.4.4,0,0,1,.4-.4h2.5A1.11,1.11,0,0,1,26,4.1V14H3.5A2.49,2.49,0,0,0,2,18.49v3a6.58,6.58,0,0,0,4.38,6.18L5.17,29.45a1,1,0,0,0,.28,1.38A.94.94,0,0,0,6,31a1,1,0,0,0,.83-.45L8.54,28H23.46l1.71,2.55A1,1,0,0,0,26,31a.94.94,0,0,0,.55-.17,1,1,0,0,0,.28-1.38l-1.21-1.83A6.58,6.58,0,0,0,30,21.44v-3A2.49,2.49,0,0,0,28.5,14ZM23,8H19a2,2,0,0,1,4,0ZM3.5,16h25a.5.5,0,0,1,0,1H3.5a.5.5,0,0,1,0-1ZM28,21.44A4.57,4.57,0,0,1,23.44,26H8.56A4.57,4.57,0,0,1,4,21.44V19H28Z" />
                                            </g>
                                        </svg>
                                    </span></p>{/*--ENDSVG--*/}
                                </div>
                                <h6 className='pt-1'>Bathrooms</h6>
                            </div>


                            <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                <div className="flex items-center ">
                                    <h6 className='mr-1'> 3</h6>
                                    <p><span>{/*---svg---*/}
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4zm3 5h2v4H3V9zm6 4v2H5v-2h4zm0-4h2v4H9V9zm0 0H5V7h4v2z"
                                                fill="gray" />
                                        </svg>
                                    </span></p>{/*--ENDSVG--*/}
                                </div>
                                <h6 className='pt-1'>Bedrooms</h6>
                            </div>

                            <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                <div className="flex items-center ">
                                    <h6 className='mr-1'>2</h6>
                                    <p><span>{/*---svg---*/}
                                        <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.19729 2.69839C2.82994 1.64467 3.96894 1 5.19799 1H9.80201C11.0311 1 12.1701 1.64467 12.8027 2.69839L15 6.35813V12.5C15 13.3284 14.3284 14 13.5 14H12.5C11.6716 14 11 13.3284 11 12.5V12H4V12.5C4 13.3284 3.32843 14 2.5 14H1.5C0.671573 14 0 13.3284 0 12.5V6.35813L2.19729 2.69839ZM12 7H3V6H12V7ZM2 10H5V9H2V10ZM13 9H10V10H13V9Z"
                                                fill="gray" />
                                        </svg>
                                    </span></p>{/*--ENDSVG--*/}
                                </div>
                                <h6 className='pt-1'>Car Parking</h6>
                            </div>

                            <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                <div className="flex items-center ">
                                    <h6 className='mr-1'> 3456</h6>
                                    <p><span>{/*---svg---*/}
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </span></p>{/*--ENDSVG--*/}
                                </div>
                                <h6 className='pt-1'>Square Ft</h6>
                            </div>

                        </div>

                        {/*----IMAGES---*/}
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                            <img src={mai12} width="100%" />
                            <img src={mai17} width="100%" />
                            <img src={mai3} width="100%" />


                        </div>

                    </div>
                    {/*-------IMAGE-SECTION-----*/}
                    <div className="">
                        <img src={mai4} alt="" width="100%" />
                    </div>

                </div>

            </div>


            <Service />

            <Features />

            

        </div>
    )
}

export default Home