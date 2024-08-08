let obj = {
    a: 1,
    b: 2,
    fun: function(){
        console.log(this);
        console.log("a",this.a);
        console.log("b ",this.b);
        // Adding another key 'c'
        this.c= 'Hello';
    }
}

// dot operator se call karne obj.fun() par functioin ko, function ke andar ka this
// point karta hai "obj" object ko

obj.fun();

console.log(obj);