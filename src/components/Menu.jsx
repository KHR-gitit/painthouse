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

