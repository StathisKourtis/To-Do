import { Project } from "./projectCreator.js";

import { toDoManager } from "./toDoManager.js";

export const projectManager = {
  projects: [],

  getProjects() {
    return this.projects;
  },
  addProject(title, desc, isFinished, dueDate) {
    const newProject = new Project(title, desc, isFinished, dueDate);
    this.projects.push(newProject);
  },
  deleteProject(projectTitle) {
    let i = this.projects.indexOf(
      this.getProject(projectTitle)
    );
    this.projects.splice(i, 1);
  },
  markProjectComplete(projectTitle) {
    this.getProject(projectTitle).isFinished = true;
  },
  markProjectNotComplete(projectTitle) {
    this.getProject(projectTitle).isFinished = false;
  },
  changeProjectDetails() {},
  getProject(projectTitle) {
    return this.projects.find((project) => project.title == projectTitle);
  },
};
