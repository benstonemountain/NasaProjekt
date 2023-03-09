import {Link} from "react-router-dom";
import "./Header.css";

const HomeHeader = () => {


return(

    <div className="home-header-container">
        
            <ul className="menus">
            <li className="home"> <Link to="/">Home</Link></li>
            <li className="near-earth-objects"><Link to="/spaceobjectheader">Near Earth Objects</Link></li>
            <li className="pic-of-day"><Link to="/imagetop">Picture of The Day</Link></li>
            <li className="planets">Planets</li>
            </ul>
        
    </div>
);


};

export default HomeHeader;