import './output.css'
import { projectManager } from "./projectManager.js";
import { toDoManager } from "./toDoManager.js";


// Testing
window.projectManager = projectManager;
window.toDoManager = toDoManager;



// init for testing

projectManager.addProject("work","aaaaaaa",false,"11-11-11")
projectManager.addProject("gym","aaaaaa",false,"11-11-11")


toDoManager.addToDo("open store","aaaaa",false,"11-11-11","hight",projectManager.getProject("work").title)

toDoManager.addToDo("close store","aaaaa",false,"11-11-11","hight",projectManager.getProject("work").title)

toDoManager.addToDo("clean store","aaaaa",false,"11-11-11","hight",projectManager.getProject("work").title)

toDoManager.addToDo("go to gym","aaaaa",false,"11-11-11","hight",projectManager.getProject("gym").title)
