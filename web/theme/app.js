console.log("app");


const apiService = new ApiService();

apiService.getTask(function (tasks) {
    console.log(tasks);
}, function (error) {
    console.error(error);
});

// const newTask = new Task("someTitle", "Opis zadania", "open");
// apiService.saveTask(newTask,
//     function (newTask) {
//         console.log(newTask);
//     }, function (error) {
//         console.log(error)
//     }
// );

console.log("-------------------");


const idOfTaskToDelete = "675b5dc5-54a2-4d94-936e-8434b8e84a42";
apiService.deleteTask(idOfTaskToDelete, function (id) {
console.log("usunięto task o id " + id);
}, function (error) {
console.error(error)
});

apiService.getTask(function (tasks) {
    console.log(tasks);
}, function (error) {
    console.error(error);
});