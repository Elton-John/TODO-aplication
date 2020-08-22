console.log("operation");

class Operation {
    constructor(taskId, description, timeSpent) {
        this.taskId = taskId;
        this.id = null;
        this.description = description;
        this.timeSpent = timeSpent === undefined ? 0 : timeSpent;

    }
}