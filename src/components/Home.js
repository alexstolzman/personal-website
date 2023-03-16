import { NavLink } from "react-router-dom";
import '../style/Home.css'



export default function Home(){
    return(
        <div>
            <h1>Welcome to my site!</h1>
            <p>This is a personal website I created to showcase myself and my projects</p>
            <ul>
                <li>
                    Check out <NavLink to="about" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>About</NavLink> for more information about me
                </li>
                <li>
                   Check out <NavLink to="projects" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Projects</NavLink> to learn about some of my project
                </li>
                <li>
                    Visit <NavLink to="interests" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Interests</NavLink> for more about my interests as a person
                </li>
                <li>
                    Go to <NavLink to="contact" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Contact</NavLink> if you want to contact me
                </li>
            </ul>
        </div>
    )
}