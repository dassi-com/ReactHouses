import payment from '../assets/images/payment-4.png'


function Footer() {
    return (

        <div className=''>
            <div className="bg-blue-950">
                <div className="container mx-auto p-4 py-10">
                    <div className="content grid lg:grid-cols-4 md:grid-cols-2 gap-6 text-white">
                        <div className="">
                            <h1>Quater</h1>
                            <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing</p><br/>
                            <p> Brooklyn, New York, United States</p>
                            <p> +0123-456789</p>
                            <p>example@example.com</p>
                        </div>
                        <div className="">
                            <h1>Company</h1>
                            <p>About</p>
                            <p>Location Map</p>
                            <p>Blog</p>
                            <p>All Product</p>
                            <p>FaQ</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="">
                            <h1>Services</h1>
                            <p>Oder Raking</p>
                            <p>My account</p>
                            <p>Wish List</p>
                            <p>Terms & Condition</p>
                            <p>Login</p>
                            <p>Proffessional Offers</p>
                        </div>
                        <div className="">
                            <h1>News-Letters</h1>
                            <p>Subscribe to our weekly Newsletter and receive updates via email</p><br/>
                            <input type="email" placeholder="Email" className="p-2 border-gray-400 font-bold text-black outline-none"/><br></br><br/>
                            <h3 className='text-2xl font-bold'>We Accept</h3>
                            <img src={payment} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer