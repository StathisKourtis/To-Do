export function ToDo (title,desc,isFinished,dueDate,importance,projectOwner) {
    this.title = title
    this.desc = desc
    this.isFinished = isFinished
    this.dueDate = dueDate
    this.importance = importance
    this.projectOwner = projectOwner
    this.id = crypto.randomUUID()
}
