// import React from 'react'
import Services from './Services'
import mai4 from "../assets/images/mai4.png"
import mai3 from "../assets/images/mai3.jpg"
import mai12 from "../assets/images/mai12.jpg"
import mai17 from "../assets/images/mai17.jpg"
import mai1 from "../assets/images/mai1.png"
import mai15 from "../assets/images/mai15.jpg"
import mai16 from "../assets/images/mai16.jpg"
import men2 from "../assets/images/men2.jpg"
import men1 from "../assets/images/men1.jpg"
import men3 from "../assets/images/men3.jpg"





function Home() {
    return (
        <div>
            {/*--------------ABOUT1-------------------*/}

            <div className="container mx-auto p-20">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="images relative">
                        <img src={mai1} width="100%" />
                    </div>
                    <div className="content py-2">
                        <div className="title  py-5">
                            <button className="bg-red-50 text-orange-400 w-40 p-2 rounded-3xl text-xs font-semibold">About Us</button><br /><br />
                            <h1 className="font-bold text-3xl text-gray-500">The Leading Real Estate Rental Marketplace.</h1>
                        </div>
                        <p className='text-gray-500'>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>

                        <div className="offers py-10 grid lg:grid-cols-2 gap-4 text-gray-500">
                            <div className=" flex flex-row items-center gap-2">
                                <h6 className='bg-pink-100 p-3 rounded-full'>
                                    <span>

                                        <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="orange"
                                                d="M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z" />
                                        </svg>
                                    </span>
                                </h6>
                                <h6>Beautiful Scene Around</h6>
                            </div>

                            <div className=" flex flex-row items-center gap-2">
                                <h6 className='bg-pink-100 p-3 rounded-full'>
                                    <span>

                                        <svg fill="orange" width="20px" height="20px" viewBox="-1 0 43.998 43.998"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path id="_01.Home" data-name="01.Home"
                                                d="M44.715,23.711a.975.975,0,0,1-1.381,0L34.4,14.773a1.019,1.019,0,0,1-.17-.171L30.4,10.773a1.019,1.019,0,0,1-.17-.171L24,4.377,4.667,23.711A.977.977,0,0,1,3.286,22.33l19.905-19.9a.935.935,0,0,1,.094-.144,1.05,1.05,0,0,1,1.43,0,.925.925,0,0,1,.1.144L30,7.616V5h0a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v8.619l8.715,8.714A.977.977,0,0,1,44.715,23.711ZM34,6H32V9.616l2,2ZM10,22a1,1,0,0,1,1,1V42a2,2,0,0,0,2,2h6V31a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V44h6a2,2,0,0,0,2-2V23a1,1,0,0,1,2,0V42a4,4,0,0,1-4,4H13a4,4,0,0,1-4-4V23A1,1,0,0,1,10,22ZM27,44V32H21V44h6Z"
                                                transform="translate(-3 -2)" />
                                        </svg>
                                    </span>
                                </h6>
                                <h6>Smart Home Design</h6>
                            </div>

                            <div className=" flex flex-row items-center gap-2">
                                <h6 className='bg-pink-100 p-3 rounded-full'>
                                    <span>

                                        <svg width="20px" height="20px" viewBox="0 -2 24 24" id="meteor-icon-kit__regular-sofa" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20 8V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V8C5.65685 8 7 9.3431 7 11V12H17V11C17 9.3431 18.3431 8 20 8zM22 8.1707C23.1652 8.5825 24 9.6938 24 11V19C24 19.5523 23.5523 20 23 20H18C17.4477 20 17 19.5523 17 19H7C7 19.5523 6.55228 20 6 20H1C0.447715 20 0 19.5523 0 19V11C0 9.6938 0.834808 8.5825 2 8.1707V6C2 2.68629 4.68629 0 8 0H16C19.3137 0 22 2.68629 22 6V8.1707zM17 14H7V17H17V14zM22 18V11C22 10.4477 21.5523 10 21 10H20C19.4477 10 19 10.4477 19 11V18H22zM2 18H5V11C5 10.4477 4.55228 10 4 10H3C2.44772 10 2 10.4477 2 11V18zM9 6C9.55229 6 10 6.44772 10 7C10 7.55228 9.55229 8 9 8C8.44771 8 8 7.55228 8 7C8 6.44772 8.44771 6 9 6zM15 6C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6z"
                                                fill="orange" />
                                        </svg>
                                    </span>
                                </h6>
                                <h6>Exceptional Lifestyle</h6>
                            </div>

                            <div className=" flex flex-row items-center gap-2">
                                <h6 className='bg-pink-100 p-3 rounded-full'>
                                    <span>

                                        <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.19729 2.69839C2.82994 1.64467 3.96894 1 5.19799 1H9.80201C11.0311 1 12.1701 1.64467 12.8027 2.69839L15 6.35813V12.5C15 13.3284 14.3284 14 13.5 14H12.5C11.6716 14 11 13.3284 11 12.5V12H4V12.5C4 13.3284 3.32843 14 2.5 14H1.5C0.671573 14 0 13.3284 0 12.5V6.35813L2.19729 2.69839ZM12 7H3V6H12V7ZM2 10H5V9H2V10ZM13 9H10V10H13V9Z"
                                                fill="orange" />
                                        </svg>
                                    </span>
                                </h6>
                                <h6>Complete 24/7 Security</h6>
                            </div>

                        </div>

                        <div className=" text-gray-500 p-10 bg-pink-50  border-4  border-l-orange-400 border-t-0 border-b-0 border-r-0">
                            <p className=''>Enimad minim veniam quis nostrud exercitation llamcobr laboris. Lorem ipsum dolor sit amet</p>
                        </div>
                        <button className='my-6 bg-orange-400 p-4 font-semibold w-44 text-white rounded-md'>Our Services</button>
                    </div>
                </div>
            </div>

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

            <Services />

            {/*--------------FEATURES-SECTION-----------------*/}
            <div className="container mx-auto p-20">
            <div className="title text-center py-6 mb-6">
                            <button className="bg-red-50 text-orange-400 w-40 p-2 rounded-3xl font-semibold">Our Services</button><br /><br />
                            <h1 className="font-bold text-4xl">Featured Listings</h1>
                        </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

                    <div className="content">
                        <div className="relative">
                            <img src={mai15} width="100%" />
                            <button className='absolute top-0 right-0 m-4 bg-green-500 p-2 px-3 rounded-xl text-xs font-semibold text-white'>FOR RENT</button>
                            <div className="items-center flex gap-2 justify-between absolute bottom-0 p-4">

                                <div className="location flex justify-center  items-center gap-1">
                                    <p>
                                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                                                fill="white" />
                                        </svg>
                                    </p>
                                    <p className='text-xs text-white'>Belmos,Garden Chicago</p>
                                </div>

                                <div className='flex  gap-1'>
                                    <p className='bg-green-200 p-2 rounded-2xl border-2 transition duration-300 border-green-200 hover:border-green-400'>
                                        <svg fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
                                        </svg>
                                    </p>
                                    <p className="bg-green-200 p-2 rounded-2xl border-2 transition duration-300 border-green-200 hover:border-green-400">
                                        <svg fill="white" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className=" p-4 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                            <p className='text-orange-500 font-semibold'>$34,900/Month</p><br />
                            <p className='text-xl font-semibold'>New Apartement Nice View</p>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis nisi quis haru</p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 py-5">

                                
                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'> 3</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4zm3 5h2v4H3V9zm6 4v2H5v-2h4zm0-4h2v4H9V9zm0 0H5V7h4v2z"
                                                    fill="gray" />
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Bedrooms</h6>
                                </div>

                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'>2</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.19729 2.69839C2.82994 1.64467 3.96894 1 5.19799 1H9.80201C11.0311 1 12.1701 1.64467 12.8027 2.69839L15 6.35813V12.5C15 13.3284 14.3284 14 13.5 14H12.5C11.6716 14 11 13.3284 11 12.5V12H4V12.5C4 13.3284 3.32843 14 2.5 14H1.5C0.671573 14 0 13.3284 0 12.5V6.35813L2.19729 2.69839ZM12 7H3V6H12V7ZM2 10H5V9H2V10ZM13 9H10V10H13V9Z"
                                                    fill="gray" />
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Car Parking</h6>
                                </div>

                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'> 3456</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg fill="gray" width="15px" height="15px" viewBox="0 0 32 32" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <title>square</title>
                                                <path
                                                    d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                                </path>
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Square Ft</h6>
                                </div>

                            </div><hr width="100%" />
                            <div className='agent py-4 flex justify-between items-center'>
                                <div className="">
                                    <img src={men2} width="50px" height="50px" className='rounded-full' />
                                    <p className='font-semibold text-gray-500 text-xs'>Willam Seklo<br /> State Agent</p>
                                </div>
                                <div className=" flex gap-2">
                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>

                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z" />
                                        </svg>
                                    </p>

                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="relative">
                            <img src={mai17} width="100%" />
                            <button className='absolute top-0 right-0 m-4 bg-green-500 p-2 px-3 rounded-xl text-xs font-semibold text-white'>FOR RENT</button>
                            <div className="items-center flex gap-2 justify-between absolute bottom-0 p-4">

                                <div className="location flex justify-center  items-center gap-1">
                                    <p>
                                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                                                fill="white" />
                                        </svg>
                                    </p>
                                    <p className='text-xs text-white'>Belmos,Garden Chicago</p>
                                </div>

                                <div className='flex  gap-1'>
                                    <p className='bg-green-200 p-2 rounded-2xl border-2 transition duration-300 border-green-200 hover:border-green-400'>
                                        <svg fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
                                        </svg>
                                    </p>
                                    <p className="bg-green-200 p-2 rounded-2xl border-2 transition duration-300 border-green-200 hover:border-green-400">
                                        <svg fill="white" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className=" p-4 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                            <p className='text-orange-500 font-semibold'>$34,900/Month</p><br />
                            <p className='text-xl font-semibold'>Luxy Villa</p>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis nisi quis haru</p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 py-5">

                                
                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'> 3</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4zm3 5h2v4H3V9zm6 4v2H5v-2h4zm0-4h2v4H9V9zm0 0H5V7h4v2z"
                                                    fill="gray" />
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Bedrooms</h6>
                                </div>

                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'>2</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.19729 2.69839C2.82994 1.64467 3.96894 1 5.19799 1H9.80201C11.0311 1 12.1701 1.64467 12.8027 2.69839L15 6.35813V12.5C15 13.3284 14.3284 14 13.5 14H12.5C11.6716 14 11 13.3284 11 12.5V12H4V12.5C4 13.3284 3.32843 14 2.5 14H1.5C0.671573 14 0 13.3284 0 12.5V6.35813L2.19729 2.69839ZM12 7H3V6H12V7ZM2 10H5V9H2V10ZM13 9H10V10H13V9Z"
                                                    fill="gray" />
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Car Parking</h6>
                                </div>

                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'> 3456</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg fill="gray" width="15px" height="15px" viewBox="0 0 32 32" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <title>square</title>
                                                <path
                                                    d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                                </path>
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Square Ft</h6>
                                </div>

                            </div><hr width="100%" />
                            <div className='agent py-4 flex justify-between items-center'>
                                <div className="">
                                    <img src={men3} width="50px" height="50px" className='rounded-full' />
                                    <p className='font-semibold text-gray-500 text-xs'>Willam Seklo<br /> State Agent</p>
                                </div>
                                <div className=" flex gap-2">
                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>

                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z" />
                                        </svg>
                                    </p>

                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="content">
                        <div className="relative">
                            <img src={mai16} width="100%" />
                            <button className='absolute top-0 right-0 m-4 bg-green-500 p-2 px-3 rounded-xl text-xs font-semibold text-white'>FOR RENT</button>
                            <div className="items-center flex gap-2 justify-between absolute bottom-0 p-4">

                                <div className="location flex justify-center  items-center gap-1">
                                    <p>
                                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                                                fill="white" />
                                        </svg>
                                    </p>
                                    <p className='text-xs text-white'>Belmos,Garden Chicago</p>
                                </div>

                                <div className='flex  gap-1'>
                                    <p className='bg-green-200 p-2 rounded-2xl border-2 transition duration-300 border-green-200 hover:border-green-400'>
                                        <svg fill="white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
                                        </svg>
                                    </p>
                                    <p className="bg-green-200 p-2 rounded-2xl border-2 transition duration-300 border-green-200 hover:border-green-400">
                                        <svg fill="white" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className=" p-4 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                            <p className='text-orange-500 font-semibold'>$34,900/Month</p><br />
                            <p className='text-xl font-semibold'>Beautifull Flat</p>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis nisi quis haru</p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 py-5">

                                
                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'> 3</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4zm3 5h2v4H3V9zm6 4v2H5v-2h4zm0-4h2v4H9V9zm0 0H5V7h4v2z"
                                                    fill="gray" />
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Bedrooms</h6>
                                </div>

                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'>2</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.19729 2.69839C2.82994 1.64467 3.96894 1 5.19799 1H9.80201C11.0311 1 12.1701 1.64467 12.8027 2.69839L15 6.35813V12.5C15 13.3284 14.3284 14 13.5 14H12.5C11.6716 14 11 13.3284 11 12.5V12H4V12.5C4 13.3284 3.32843 14 2.5 14H1.5C0.671573 14 0 13.3284 0 12.5V6.35813L2.19729 2.69839ZM12 7H3V6H12V7ZM2 10H5V9H2V10ZM13 9H10V10H13V9Z"
                                                    fill="gray" />
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Car Parking</h6>
                                </div>

                                <div className=" p-4 text-gray-500 cursor-pointer rounded-md bg-pink-50 ">
                                    <div className="flex items-center ">
                                        <h6 className='mr-1 text-xs'> 3456</h6>
                                        <p><span>{/*---svg---*/}
                                            <svg fill="gray" width="15px" height="15px" viewBox="0 0 32 32" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <title>square</title>
                                                <path
                                                    d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                                </path>
                                            </svg>
                                        </span></p>{/*--ENDSVG--*/}
                                    </div>
                                    <h6 className='pt-1 text-xs'>Square Ft</h6>
                                </div>

                            </div><hr width="100%" />
                            <div className='agent py-4 flex justify-between items-center'>
                                <div className="">
                                    <img src={men1} width="50px" height="50px" className='rounded-full' />
                                    <p className='font-semibold text-gray-500 text-xs'>Willam Seklo<br /> State Agent</p>
                                </div>
                                <div className=" flex gap-2">
                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>

                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z" />
                                        </svg>
                                    </p>

                                    <p className='bg-blue-50 p-3 rounded-full border-2 transition duration-300 border-blue-50 hover:border-blue-200'>
                                        <svg fill="gray" width="20px" height="20px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>square</title>
                                            <path
                                                d="M28 24v4h-4v-1h-16v1h-4v-4h1v-16h-1v-4h4v1h16v-1h4v4h-1v16h1zM5 27h2v-2h-2v2zM7 5h-2v2h2v-2zM24 7h-16v1h-1v16h1v1h16v-1h1v-16h-1v-1zM27 5h-2v2h2v-2zM25 25v2h2v-2h-2z">
                                            </path>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            

        </div>
    )
}

export default Home