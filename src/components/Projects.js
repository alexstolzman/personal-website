import { getProjects } from "../projects"
import { Outlet, Link } from 'react-router-dom'


export default function Projects(){
    const projects= getProjects()

    return(
        <div>
            <h1>Projects</h1>
            <ul className="projects">
                {projects.map((project)=>
                <li id={project.name}>
                    <Link to={project.name}>{project.name}</Link>
                </li>
            )}
            </ul>
            
            <Outlet />
        </div>
    )
}