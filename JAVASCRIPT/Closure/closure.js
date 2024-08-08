function Parent(){
     var x =1;

    function child(){
        x++
        console.log(x);
    }
    return child;
}

let f = Parent();
let f1= Parent();

f();  //2
f();  //3
f();  //4

f1();
f1();