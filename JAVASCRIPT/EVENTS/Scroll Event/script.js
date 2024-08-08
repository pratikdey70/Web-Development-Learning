let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');

// body.addEventListener('scroll', (ev)=>{
//     console.log(ev.target);
// })

window.onscroll = (ev)=>{
    //console.log(ev);
    // console.log(window.scrollY);
    // let pageNumber = window.scrollY % 800;
    // console.log(pageNumber);
    // if(pageNumber > 5){
    //     console.log("On page 5");
    // }
    
    // else{
    //     console.log("On page < 5");
    // }
console.log("Scroll");
    if(window.scrollY>300){
        navBar.style.backgroundColor = "Orange";
    }
    else{
        navBar.style.backgroundColor = "White";
    }
}

// window.onscrollend = (ev) =>{
//     alert("kahatm ho gaya page sale")
// }