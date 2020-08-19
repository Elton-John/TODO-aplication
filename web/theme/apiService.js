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


}

function createTaskFromResponseData(data) {
    const task = new Task(data.title, data.description, data.status);
    if (data.id) {
        task.id = data.id;
    }
    return task;
}

