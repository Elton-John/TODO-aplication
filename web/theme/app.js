console.log("app");


const apiService = new ApiService();

apiService.getTask(function (tasks) {
    console.log(tasks);
}, function (error) {
    console.error(error);
});

const newTask = new Task("someTitle", "Opis zadania", "open");
apiService.saveTask(newTask,
    function (newTask) {
        console.log(newTask);
    }, function (error) {
        console.log(error)
    }
);