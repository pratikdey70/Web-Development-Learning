let btn = document.querySelector('.btn');
let movieList = document.querySelector('.movieList')


let movies= [
    "Avengers",
    "Thor",
    "Superman",
    "Perman"
];

let imgLinks = [
    'https://images.unsplash.com/photo-1682695796795-cc287af78a2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1709710189876-8aebd66de2f7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

let i= 0 ;
btn.addEventListener('click', ()=>{
    if (i==movies.length){
        let url = imgLinks[Math.floor((Math.random()*imgLinks.length))]
        let img = document.createElement('img')
        img.setAttribute('src',url);
        movieList.appendChild(img);
        i++;
        
    }
    else if(i< movies.length){
        let li = document.createElement('li');
        li.innerText = movies[i];
        movieList.appendChild(li);
        i++;
    }
})