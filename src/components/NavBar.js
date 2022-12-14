import "./NavBar.css";
import {Link} from "react-router-dom";

export default function NavBar(){
    return (
    <div class="navbar">
        <div className="logo">
            <h1>Anon</h1>
        </div>
        <div className="links">
            <ul className="nav-links">
                <li className="nav-link"><Link className="link" to="/portfolio">Projects</Link></li>
                <li className="nav-link"><Link  className="link" to="/about">About</Link></li>
                <li className="nav-link"><Link   className="link" to="/resume">Resume</Link></li>
            </ul>
        </div>
    </div>
    );
}