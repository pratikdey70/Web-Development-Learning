let itemList = document.querySelectorAll('.item')
let container = document.querySelector('.container')
console.log(itemList);


// itemList.forEach((item)=>{
//     //console.log(item);
//     item.addEventListener('click',()=>{
//         console.log(item.innerText);
//     })
// })

// let li = document.createElement('li');
// li.classList.add('item');
// li.innerText=8;
// container.appendChild('li')



// EVENT DELEGATION CONCEPT -> where we can add event listener to the parent not individually to every listStyle: 
container.addEventListener('click', (ev)=>{
    //console.log(ev.target);
    let item =  ev.target;
    console.log(item.innerText);
})