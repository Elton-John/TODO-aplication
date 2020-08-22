console.log("index");


class ApiService {

    constructor() {
        this.apikey = "da1ebfaa-6185-4442-9d00-4ee6192e51b3";
        this.url = 'https://todo-api.coderslab.pl';

    }

    getTask(successCallback, errorCallback) {
        fetch(this.url + '/api/tasks', {
            headers: {
                "Authorization": this.apikey
            },
            method: "GET"
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                // console.log(data);
                const tasks = json.data.map(function (item) {
                    return createTaskFromResponseData(item);
                });
                successCallback(tasks);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    }

    saveTask(task, successCallback, errorCallback) {
        fetch(this.url + '/api/tasks', {
            headers: {
                "Authorization": this.apikey,
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(task)
        }).then(function (response) {
            return response.json();
        })
            .then(function (json) {
                const newTask = createTaskFromResponseData(json.data);
                successCallback(newTask);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    }

    deleteTaskById(taskId, successCallback, errorCallback) {
        fetch(this.url + '/api/tasks/' + taskId, {
            method: "DELETE",
            headers: {
                "Authorization": this.apikey
            },
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log("z delete Task", json.data)
            successCallback(taskId);
        })
            .catch(function (error) {
                errorCallback(error);
            })

    }


    getTaskWithOperations(taskId, successCallback, errorCallback) {
        fetch(this.url + "/api/tasks/" + taskId + "/operations", {
            method: "GET",
            headers: {
                "Authorization": this.apikey
            }
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
/////
            successCallback(json);
        }).catch(function (error) {
            errorCallback(error);
        })
    }

   updateTask(taskId, task, successCallback, errorCallback) {
        fetch(this.url + "/api/tasks/" + taskId, {
            method: "PUT",
            headers: {
                "Authorization": this.apikey,
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(task)
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
/////
            successCallback(json);
        }).catch(function (error) {
            errorCallback(error);
        })
    }
}
//
// /api/
// tasks /
// :
// id



function createTaskFromResponseData(data) {
    const task = new Task(data.title, data.description, data.status);
    if (data.id) {
        task.id = data.id;
    }
    return task;
}


