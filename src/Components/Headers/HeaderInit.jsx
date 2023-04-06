import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./HeaderInit.style.css";
import { useState, useEffect } from "react";
import HeaderHamburger from "./HeaderHamburger";
import Header from "./Header";

const HeaderInit = () => {
    const [navBarVisible, setNavBarVisible] = useState(false);

    const useWindowSize = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        useEffect( () => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            }
        }, []);
        return windowWidth;
    };
    

    return (

    <div className="header-init-container">

{useWindowSize() < 768 && <FontAwesomeIcon className="header-init-hamburger-icon" icon={faBars} onClick={()=> {

        setNavBarVisible(true);
    }} />}
    {navBarVisible && <HeaderHamburger setNavBarVisible={setNavBarVisible}/>}
    {useWindowSize() > 768 && <Header/>}
   
    </div>


);

};

export default HeaderInit;