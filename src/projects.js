const projects= [
    {
        name: "Example",
        description: "Placeholder project" ,
        tech: ["React", "React Router"]
    },
    {
        name: "Portfolio Website",
        description: "Personal website" ,
        tech: ["React", "React Router", "Tailwind CSS"]
    },
    {
        name: "APOD Scipt",
        description: "Script" ,
        tech: ["React", "NASA APOD Api"]
    }
]


export function getProjects(){
    return projects.map(({ name })=> ({ name }));
}

export function getProject(name){
    return projects.find(project=>project.name===name)
}