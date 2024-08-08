let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');
console.log(body);

function scrollKaFunction() {
    console.log("Scrolling");
}

window.addEventListener('scroll', debounce(scrollKaFunction,1000));

function debounce(fun,delay){
    let id;
    return function(){
        clearInterval(id);
        id = setTimeout(()=>{
            fun();
        },delay);
    } 
} 