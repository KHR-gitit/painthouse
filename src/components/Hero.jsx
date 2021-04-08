const Hero = ({menuHover, menuRemoveHover}) => {
    return (
        <section className="text-gray-600 w-100 body-font relative h-screen overflow-hidden">
            <img className="absolute -z-10 w-screen h-screen object-cover" src="https://images.unsplash.com/photo-1615668501966-577e09f23762?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80" alt=""/>
            <div className="h-screen w-100 mx-auto flex items-center relative flex-row  2xl:container">

                <div className="mx-auto text-center hero-bg flex flex-col lg:mx-5 md:w-4/5 md:items-center lg:items-start lg:text-left lg:flex-grow lg:px-24 lg:w-1/3">
                <h1 className="title-font text-4xl md:text-6xl mb-4 font-medium text-white">We provide Painting Services</h1>
                <p className="mb-8 leading-relaxed text-gray-300 md:text-xl">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Free Quote</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Learn More</button>
                    </div>
                </div>
                <div className="hero-bg hidden flex-col w-full mx-5  md:w-1/2  lg:flex md:ml-auto  md:py-8 mt-8 md:mt-0 lg:w-1/3" >
                    <h2 className="text-white text-lg mb-1 font-medium title-font md:text-2xl">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-gray-300">Here you can contact us for more information</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded text-lg" onMouseOver={menuHover} onMouseOut={menuRemoveHover}>Send</button>
                    </div>
                </div>
                
        </section>
    )
}

export default Hero;
