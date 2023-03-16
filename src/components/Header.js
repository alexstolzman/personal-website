import '../style/Header.css'
import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <div className="nav-bar">
            <NavLink to="/" className={({ isActive }) => 
                isActive ? "active-header" : "header"
            }>
                Home
            </NavLink>

            <NavLink to="about" className={({ isActive }) => 
                isActive ? "active-header" : "header"
            }>
                About
            </NavLink>

            <NavLink to="projects" className={({ isActive }) => 
                isActive ? "active-header" : "header"
            }>
                Projects
            </NavLink>

            <NavLink to="interests" className={({ isActive }) => 
                isActive ? "active-header" : "header"
            }>
                Interests
            </NavLink>

            <NavLink to="contact" className={({ isActive }) => 
                isActive ? "active-header" : "header"
            }>
                Contact
            </NavLink>
        </div>
    )
}