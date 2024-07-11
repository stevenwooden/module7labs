import { NavLink } from "react-router-dom"; 

export default function NavBar() {
    return(
        <nav className="NavBar">
            <ul className="menu">
                <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "/about">About</NavLink></li>
                <li><NavLink to = "/bitcoinrates">Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    )
}