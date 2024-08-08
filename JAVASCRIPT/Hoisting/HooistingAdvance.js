
sayHello("Sam")

var sayHello = function(){
    console.log("hello", name);

}

sayHello("Pratik")

//**********Hoisted function below*********

var sayHello;
sayHello("Sam")  //Will give an error

sayHello = function(name){
    console.log("hello", name);

}

sayHello("Pratik");