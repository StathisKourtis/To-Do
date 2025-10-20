import { ToDo } from "./todoCreator.js";

export const toDoManager = {
  toDos: [],
  errors: [],
  getErrors() {
    return this.errors;
  },
  getToDo(toDoTitle) {
    return this.toDos.find((toDo) => toDo.title == toDoTitle);
  },
  getToDos() {
    return this.toDos;
  },

  getToDoListByProjectTitle(projectTitle) {
    return this.toDos.filter((todo) => todo.projectOwner == projectTitle);
  },

  addToDo(title, desc, isFinished, dueDate, importance, projectOwner) {
    this.errors = [];
    if (this.newToDoValidation(title, projectOwner)) {
      this.errors.push("A To Do with that name already exists!");
      return;
    }
    const newToDo = new ToDo(
      title,
      desc,
      isFinished,
      dueDate,
      importance,
      projectOwner
    );
    this.toDos.push(newToDo);
  },
  deleteToDo(toDoTitle) {
    let i = this.toDos.indexOf(this.getToDo(toDoTitle));
    this.toDos.splice(i, 1);
  },
  markToDoComplete(toDoTitle) {
    this.getToDo(toDoTitle).isFinished = true;
  },
  markToDoNotComplete(toDoTitle) {
    this.getToDo(toDoTitle).isFinished = false;
  },
  updateToDosOwner(oldProjectOwner, newProjectOwner) {
    let updatedToDos = this.getToDoListByProjectTitle(projectOwner);
    for (let i = 0; i < toDos.length; i++) {
      updatedToDos[i].title = projectOwner;
    }
  },
  changeToDoDetails() {},
  transfereToDo(toDoTitle, newOwnerTitle) {
    this.getToDo(toDoTitle).projectOwner = newOwnerTitle;
  },
  newToDoValidation(newToDoTitle, projectOwnerTitle) {
    const toDoList = this.getToDoListByProjectTitle(projectOwnerTitle);
    return toDoList.some((toDo) => toDo.title == newToDoTitle);
  },
};
