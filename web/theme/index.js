console.log("index");

const keyAPI = "da1ebfaa-6185-4442-9d00-4ee6192e51b3";
const url = " https://todo-api.coderslab.pl/api/tasks";
const headers = {
    "Authorization": keyAPI
};
fetch(url, {
    headers: headers
})
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        //console.error(err);
    });