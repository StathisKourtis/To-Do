import { Project } from "./projectCreator.js";

import { toDoManager } from "./toDoManager.js";



export const projectManager = {
    projects : [],

    getProjects(){
        return this.projects
    },
    addProject(title,desc,isFinished,dueDate){
        const newProject = new Project(title,desc,isFinished,dueDate)
        this.projects.push(newProject)
    },
    deleteProject(project){
        let i = projects.indexOf(project)
        this.projects.splice(i,1)
    },
    markProjectComplete(project){
        project.isFinished = true
    },
    markProjectNotComplete(project){
        project.isFinished = false
    },
    changeProjectDetails(){},
    getProject(title){
       return this.projects.find((project) => project.title == title)
    },



}

