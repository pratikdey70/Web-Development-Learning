console.log("Running lib1");

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}


module.exports = {
    add,
    msg: "Hello World"
}