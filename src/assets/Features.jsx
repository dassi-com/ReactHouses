import mai15 from "../assets/images/mai15.jpg"
import mai16 from "../assets/images/mai16.jpg"
import men2 from "../assets/images/men2.jpg"
import men1 from "../assets/images/men1.jpg"
import men3 from "../assets/images/men3.jpg"
import mai17 from "./images/mai17.jpg"

function Features (){
    return(
              <div>
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

export default Features