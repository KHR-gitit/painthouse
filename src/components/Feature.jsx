const Feature = ({menuHover, menuRemoveHover}) => {
    return (
        <section className="bg-gray-100 py-32 lg:bg-gray-200">
            <div className="w-11/12 md:10/12 mx-auto">
            <h1 className="text-5xl text-center ">Our Speciality</h1>
            <div className="lg:hidden pt-32">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-300 sm:flex-row flex-col">
                    <div className="relative sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img className="absolute z-1 w-full object-cover h-full rounded-full" src="https://images.unsplash.com/photo-1618219788702-20a1ef509691?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt=""/>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">Interoir</h2>
                        <p className="leading-relaxed text-base">Fresh paint is an ideal way to refresh the appearance of your home or office. Our professional interior painters at Painthouse specialize in spraying commercial and domestic interior paints on a variety of different surfaces and Our interior house painters will take care of your home. We lay the groundwork to protect your home and complete the best painting work.</p>
                        <button className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </button>
                    </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-300 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Exteroir</h2>
                            <p className="leading-relaxed text-base">We are experts at exterior painting as a tired or aging appearance does affect the beauty of your property and greatly affects its value. Whether you want to increase the containment of your property or prepare to sell, our expert exterior painter team at Paithouse will help you.</p>
                            <button className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </button>
                        </div>

                        <div className="relative order-first sm:order-last sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img className="absolute z-1 w-full object-cover h-full rounded-full" src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                    </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                    <div className="relative sm:w-32 sm:h-32 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img className="absolute z-1 w-full object-cover h-full rounded-full" src="https://images.unsplash.com/photo-1529316738131-4d0e0761a38e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                    </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Commercial</h2>
                            <p className="leading-relaxed text-base">We know that running a business can be difficult and the last thing you want is someone interrupting you while you work. We at Painthouse believe that we can come up with a plan for your business hours and minimize interruptions or we can do this after working hours and on weekends.</p>
                            <button className="mt-3 text-indigo-500 inline-flex items-center">Learn More   
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-row  w-full space-x-5 overflow-hidden hidden pt-20 lg:flex 2xl:space-x-10" style={{height:'700px'}}>
                    <div className="box relative flex-grow h-4/5 w-1/3">
                        <img className="absolute z-1 object-cover w-full h-full" src="https://images.unsplash.com/photo-1618219788702-20a1ef509691?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt=""/>
                        <div className="content hero-bg w-4/5 mx-auto text-center text-gray-100 bottom-0 absolute z-10 left-1/2" style={{transform:'translate(-50%, 50%)'}}>
                            <h3 className="text-3xl text-white 2xl:text-4xl">Interior</h3>
                            <button className="bg-white py-1 px-3 rounded text-gray-700 mt-3" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                        </div>
                    </div>
                    <div className="box relative flex-grow h-4/5  w-1/3">
                        <img className="absolute z-1 object-cover w-full h-full" src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                        <div className="content hero-bg w-4/5 mx-auto text-center text-gray-200 bottom-0 absolute z-10 left-1/2" style={{transform:'translate(-50%, 50%)'}}>
                            <h3 className="text-3xl text-white 2xl:text-4xl">Exterior</h3>
                            <button className="bg-white py-1 px-3 rounded text-gray-700 mt-3" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                        </div>
                    </div>
                    <div className="box relative flex-grow h-4/5  w-1/3">
                        <img className="absolute z-1 w-full object-cover h-full" src="https://images.unsplash.com/photo-1529316738131-4d0e0761a38e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                        <div className="content hero-bg w-4/5 mx-auto text-center text-gray-200 bottom-0 absolute z-10 left-1/2 px-5" style={{transform:'translate(-50%, 50%)'}}>
                            <h3 className="text-3xl text-white 2xl:text-4xl">Commercial</h3>
                            <button className="bg-white py-1 px-3 rounded text-gray-700 mt-3" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;
