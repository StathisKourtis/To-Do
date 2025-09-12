import { Project } from "./projectCreator.js";

import { toDoManager } from "./toDoManager.js";

export const projectManager = {
  projects: [],
  errors: [],
  selectedProject: "",
  getSelectedProject() {
    return this.selectedProject;
  },
  setSelectedProject(project) {
    this.selectedProject = project;
  },

  getProjects() {
    return this.projects;
  },
  getErrors() {
    return this.errors;
  },
  addProject(title, desc, isFinished, dueDate) {
    this.errors = [];
    if (this.newProjectValidation(title)) {
      this.errors.push("A project with that name already exists!");
      return;
    }
    const newProject = new Project(title, desc, isFinished, dueDate);
    this.projects.push(newProject);
  },
  deleteProject(projectTitle) {
    let i = this.projects.indexOf(this.getProject(projectTitle));
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
  newProjectValidation(newProjectTitle) {
    return this.projects.some((project) => project.title == newProjectTitle);
  },
};
