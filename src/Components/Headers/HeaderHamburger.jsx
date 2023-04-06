import {Link} from "react-router-dom";

import "./HeaderHamburger.style.css";
const HeaderHamburger = ({setNavBarVisible}) => {

return(
    <>
    <div className="hamburger-header-container">

    </div>
        
            <div className="hamburger-header-overlay">
            <ul className="hamburger-menus">
            <li className="hamburger-home"> <Link to="/">Home</Link></li>
            <li className="hamburger-near-earth-objects"><Link to="/spaceobjectheader">Near Earth Objects</Link></li>
            <li className="hamburger-pic-of-day"><Link to="/imagetop">Picture of The Day</Link></li>
             <li className="hamburger-planets"> <Link to="/">Planets</Link> </li>
            </ul>
            <div className="x" onClick={()=> {

                setNavBarVisible(false);
            }}>X</div>
            </div>
   
            </>



);


};

export default HeaderHamburger;