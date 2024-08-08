setTimeout(function(){
    console.log("Hello World");
},5000);

console.log(id);
clearTimeout(id);


console.log("Hey there");

//Way to write setTimeOut and ClearTimeOut in a single line

let id = setTimeout(function(){
    console.log("Hello world");

}, 5000, setTimeout(function () {
    clearTimeout(id);
}, 6000));