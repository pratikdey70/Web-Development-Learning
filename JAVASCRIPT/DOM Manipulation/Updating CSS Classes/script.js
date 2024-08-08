let movies = document.querySelectorAll('.movie');
let body = document.querySelector('body');
// classList
// 1. add
// 2. remove
// 3. toggle: Agar class hai toh remove kr dega, else add kar denge
// Adding a class to an element using js
// body.classList.add('theme-1)


//Adding a class to an element using js
body.classList.add('theme-1');

console.log(body);

setTimeout(()=>{
    //body.classList.remove('theme-1');
    //body.classList.toggle('theme-1');
},1000);