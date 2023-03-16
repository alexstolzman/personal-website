import { useParams } from "react-router-dom"
import { getProject } from "../projects"

export default function Project(){
    const { project } = useParams()
    const  projectInfo = getProject(project)
    return(
        <div className="project">
            <h3>Name</h3>
            <p>{projectInfo.name}</p>
            <h3>Description</h3>
            <p>{projectInfo.description}</p>
            <h3>Tech Stack</h3>
            <ul className="tech">
                 {
                projectInfo.tech.map((tech)=>
                    <li id={tech}>
                        {tech}
                    </li>
                )
            }
            </ul>
           
        </div>
    )
}