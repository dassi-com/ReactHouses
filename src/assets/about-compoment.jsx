
import mai1 from "../assets/images/mai1.png"



function AboutComponent() {
    return (
        <div>
            <div className="container mx-auto p-20 mt-8">
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
                        <button className='my-6 bg-orange-400 p-4 font-semibold w-44 text-white rounded-md'>
                            <a href="#services">Our Services</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent