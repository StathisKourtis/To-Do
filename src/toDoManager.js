import { ToDo } from "./todoCreator.js";


export const toDoManager = {
    toDos : [],

     getToDoListByProjectTitle(projectTitle){
        return this.toDos.filter((todo) => todo.projectOwner == projectTitle)
    },
    addToDo(title,desc,isFinished,dueDate,importance,projectOwner){
        const newToDo = new ToDo(title,desc,isFinished,dueDate,importance,projectOwner)
        this.toDos.push(newToDo)
    },
    deleteToDo(){},
    markToDoComplete(){},
    changeToDoDetails(){},
    transfereToDo(){},

}
