import men1 from "./images/men1.jpg"
import men2 from "./images/men2.jpg"
import men3 from "./images/men3.jpg"


function Testymonies() {
    return (
        <div>
            <div className="py-20 bg-right-top bg-cover" style={{ backgroundImage: "url('/src/assets/images/mai24.jpg')" }}>
                <div className="container mx-auto p-20">
                    <div className="title text-center">
                        <button className="bg-red-100 text-orange-400 w-40 p-2 rounded-3xl font-semibold">Our Testymonies</button><br /><br />
                        <h1 className="font-bold text-4xl">Clients Feetback</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
                        <div className="content bg-white text-gray-600 p-10 rounded-2xl hover:-translate-y-2  transition-transform  duration-500ease-in-out">
                            <p className="mb-1">
                                <span>
                                    <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="orange"><path fillRule="evenodd" clipRule="evenodd" d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" /></svg>
                                </span>
                            </p>
                            <p> Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi illum eveniet veritatis itaque dolores id voluptate a magni quia aut. dolor sit amet consectetur adipisicing elit. Eius reiciendis harum deleniti dignissimos, vel tempora ex hic nihil praesentium, tempore nesciunt explicabo eveniet molestias? </p>

                            <div className="flex gap-3 py-6">
                                <img src={men1} alt="" width="50px" className="rounded-full hover:-translate-y-2 hover:scale-105    duration-500ease-in-out" />
                                <p className="font-bold">Jacobs Willa <br />State Agent</p>
                            </div>
                        </div>

                        <div className="content bg-white text-gray-600 p-10 rounded-2xl hover:-translate-y-2   transition-transform  duration-500ease-in-out">
                            <p className="mb-1">
                                <span>
                                    <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="orange"><path fillRule="evenodd" clipRule="evenodd" d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" /></svg>
                                </span>
                            </p>
                            <p> Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi illum eveniet veritatis itaque dolores id voluptate a magni quia aut. dolor sit amet consectetur adipisicing elit. Eius reiciendis harum deleniti dignissimos, vel tempora ex hic nihil praesentium, tempore nesciunt explicabo eveniet molestias? </p>

                            <div className="flex gap-3 py-6">
                                <img src={men2} alt="" width="50px" className="rounded-full" />
                                <p className="font-bold">Jacobs Willa <br />State Agent</p>
                            </div>
                        </div>

                        <div className="content bg-white text-gray-600 p-10 rounded-2xl hover:-translate-y-2  transition-transform  duration-500ease-in-out">
                            <p className="mb-1">
                                <span>
                                    <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="orange"><path fillRule="evenodd" clipRule="evenodd" d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" /></svg>
                                </span>
                            </p>
                            <p> Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi illum eveniet veritatis itaque dolores id voluptate a magni quia aut. dolor sit amet consectetur adipisicing elit. Eius reiciendis harum deleniti dignissimos, vel tempora ex hic nihil praesentium, tempore nesciunt explicabo eveniet molestias? </p>

                            <div className="flex gap-3 py-6">
                                <img src={men3} alt="" width="50px" className="rounded-full" />
                                <p className="font-bold">Jacobs Willa <br />State Agent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testymonies