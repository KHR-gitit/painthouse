import logo from './../logo.png';
import { Link } from "react-router-dom";
import {useState} from "react";
const Menu = ({menuHover, menuRemoveHover, toTop}) => {
    const [navbarState, setNavbarState] = useState(false);

    return (
        <header className="w-full shadow-md bg-white fixed z-40">
            <div className="flex w-full text-gray-600 relative md:container md:mx-auto">
                <div className="logo p-2 w-32">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className={`flex-col mt-20 mx-auto ${navbarState? "flex" : "hidden"} lg:flex lg:flex-row lg:mt-0 lg:mr-0`}>
                        <Link to="/" className="font-bold py-6 px-32 cursor-pointer lg:py-8 lg:px-10" onMouseOver={menuHover} onMouseOut={menuRemoveHover} onClick={toTop}>
                            Home 
                        </Link>
                        <Link to="/contact" className="font-bold py-6 px-32 cursor-pointer lg:py-8 lg:px-10" onMouseOver={menuHover} onMouseOut={menuRemoveHover} onClick={toTop}>Contact</Link>
                        <Link to="/about" className="font-bold py-6 px-32 cursor-pointer lg:py-8 lg:px-10" onMouseOver={menuHover} onMouseOut={menuRemoveHover} onClick={toTop}>About</Link>
                        <Link to="gallery" className="font-bold py-6 px-32 cursor-pointer lg:py-8 lg:px-10" onMouseOver={menuHover} onMouseOut={menuRemoveHover} onClick={toTop}>Gallery</Link>
                        <a href="tel:0403 855 291" className="font-bold py-6 px-32 cursor-pointer lg:py-8 lg:px-10" onMouseOver={menuHover} onMouseOut={menuRemoveHover} ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></a>
                        <a href="mailto:info@painthouse.com.au" className="font-bold py-6 px-32 cursor-pointer lg:py-8 lg:px-10" onMouseOver={menuHover} onMouseOut={menuRemoveHover} ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a>

                </nav>
                <button className="font-bold text-xs py-7 px-10 cursor-pointer absolute z-50 right-0 focus:outline-none ml-auto mr-0 lg:hidden " onMouseOver={menuHover} onMouseOut={menuRemoveHover}  onClick={()=> setNavbarState(!navbarState)}>
                    <span className="menu-bar bar-1"></span>
                    <span className="menu-bar bar-2"></span>
                    <span className="menu-bar bar-3"></span>
                 </button>
            </div>
        </header>
    )
}

export default Menu;

