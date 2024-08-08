let btn = document.querySelector('button');
let para = document.querySelector('.para');

btn.onclick = ()=>{
    console.log("Click just");
}
/*btn.addEventListener('click',()=>{
    alert("Clicked")
})*/

para.onmouseenter = ()=>{
    para.classList.add('mouse-enter');
}

para.onmouseleave = () =>{
    para.classList.remove('mouse-enter');
}
para.ondblclick = () =>{
    console.log("I am double Clicked");
}

 // Another Way

 btn.addEventListener('click', ()=>{
    console.log("Clicked me!");
 })
