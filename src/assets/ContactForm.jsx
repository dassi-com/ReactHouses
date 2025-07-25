

const ContactForm = () => {
    return (
        <section className="min-h-screen px-4 py-16 bg-gray-100 flex items-center justify-center ">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl overflow-hidden p-8 md:p-12">
                {/* Left Side: Contact Form */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contactez-nous</h2>
                    <p className="text-gray-500 mb-8">Nous serons ravis de vous lire</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Nom complet</label>
                            <input
                                type="text"
                                placeholder="Votre nom"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Votre message..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

                {/* Right Side: Contact Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-start space-x-4">
                        {/* ICON 1: Localisation */}
               
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                           
                            <p>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="7" r="5" stroke="orangered" strokeWidth="2" />
                                    <path d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="orangered" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Notre adresse</h4>
                            <p className="text-sm text-gray-500">123 Rue Existence, Douala, Cameroun</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        {/* ICON 2: Email */}
                      
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" fill="orangered" /></svg>

                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Email</h4>
                            <p className="text-sm text-gray-500">contact@exemple.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        {/* ICON 3: Téléphone */}
                      
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <p>
                                <svg fill="orangered" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z" /></svg>

                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Téléphone</h4>
                            <p className="text-sm text-gray-500">+237 6 99 00 00 00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
