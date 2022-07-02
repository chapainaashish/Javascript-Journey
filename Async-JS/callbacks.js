// A callback is a function passed as an argument to another function.
function getData(token, username, hobbies) {
    setTimeout(function () {
        console.log("Reading data from database");
        // calling callback functions
        username({ token: token, fname: "Aashish" });
        hobbies(['Programming', 'Chess', 'Watching Movies']);
    }, 2000)
}
function caller(user) {
    console.log(user);
}
console.log("Before");
getData(1, caller, caller);
console.log("After");