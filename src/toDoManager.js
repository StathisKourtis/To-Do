import { ToDo } from "./todoCreator.js";

export const toDoManager = {
  toDos: [],
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
    let i = this.toDos.indexOf(
      this.getToDo(toDoTitle)
    );
    this.toDos.splice(i, 1);
  },
  markToDoComplete(toDoTitle) {
    this.getToDo(toDoTitle).isFinished = true;
  },
  markToDoNotComplete(toDoTitle) {
    this.getToDo(toDoTitle).isFinished = false;
  },
  changeToDoDetails() {},
  transfereToDo(toDoTitle, newOwnerTitle) {
    this.getToDo(toDoTitle).projectOwner =
      newOwnerTitle;
  },
};
