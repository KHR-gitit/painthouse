const Feature = ({menuHover, menuRemoveHover}) => {
    return (
        <section className="bg-gray-100 py-32 lg:bg-gray-200">
            <div className="container mx-auto">
            <h1 className="text-5xl text-center ">Our Speciality</h1>
            <div className="lg:hidden pt-32">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-300 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Interoir</h2>
                        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            <button className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </button>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Commercial</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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
                        <img className="absolute z-1 object-cover w-full h-full" src="https://mcintoshpainters.com.au/wp-content/uploads/2019/08/ser-1.jpg?id=116" alt=""/>
                        <div className="content hero-bg w-4/5 mx-auto text-center text-gray-100 bottom-0 absolute z-10 left-1/2" style={{transform:'translate(-50%, 50%)'}}>
                            <h3 className="text-3xl text-gray-900 2xl:text-4xl">Interior</h3>
                            <button className="bg-white py-1 px-3 rounded text-gray-700 mt-3" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                        </div>
                    </div>
                    <div className="box relative flex-grow h-4/5  w-1/3">
                        <img className="absolute z-1 object-cover w-full h-full" src="https://instagram.fmel10-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/127149769_383485306310326_5502152025580544642_n.jpg?tp=1&_nc_ht=instagram.fmel10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Hm9h0uMGkJMAX9_4DV7&oh=16ceaa83a2e81a4138202963647d39ac&oe=607B2399" alt=""/>
                        <div className="content hero-bg w-4/5 mx-auto text-center text-gray-200 bottom-0 absolute z-10 left-1/2" style={{transform:'translate(-50%, 50%)'}}>
                            <h3 className="text-3xl text-gray-900 2xl:text-4xl">Exterior</h3>
                            <button className="bg-white py-1 px-3 rounded text-gray-700 mt-3" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                        </div>
                    </div>
                    <div className="box relative flex-grow h-4/5  w-1/3">
                        <img className="absolute z-1 w-full object-cover h-full" src="https://instagram.fmel10-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/154923746_4048022611909200_7749405390955637529_n.jpg?tp=1&_nc_ht=instagram.fmel10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=pVxuHwgmHMAAX8u--e0&oh=169ef173d19303c92deb1f31cc912eb8&oe=6078444C" alt=""/>
                        <div className="content hero-bg w-4/5 mx-auto text-center text-gray-200 bottom-0 absolute z-10 left-1/2 px-5" style={{transform:'translate(-50%, 50%)'}}>
                            <h3 className="text-3xl text-gray-900 2xl:text-4xl">Commercial</h3>
                            <button className="bg-white py-1 px-3 rounded text-gray-700 mt-3" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;
