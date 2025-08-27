export function Project (title,desc,isFinished,dueDate) {
    this.title = title
    this.desc = desc
    this.isFinished = isFinished
    this.dueDate = dueDate
    this.id = crypto.randomUUID()
}
