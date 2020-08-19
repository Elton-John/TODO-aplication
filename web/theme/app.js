console.log("app");


const apiService = new ApiService();

apiService.getTask(function (tasks) {
    console.log(tasks);
}, function (error) {
    console.error(error);
});