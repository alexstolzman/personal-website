import { useParams } from "react-router-dom"
import { getProject } from "../projects"
import "../style/Project.css"

export default function Project(){
    const { project } = useParams()
    const  projectInfo = getProject(project)
    return(
        <div className="project">
            <p>{projectInfo.name}</p>
            <p>{projectInfo.description}</p>
            <ul>
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