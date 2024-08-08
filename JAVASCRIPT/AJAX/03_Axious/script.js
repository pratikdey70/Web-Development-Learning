const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");



btn.addEventListener("click", () => {
    axios('https://cat-fact.herokuapp.com/facts')
        .then(res=>{
            let data = res.data;
            console.log(data);
            ul.innerText= '';
            data.forEach((d)=> {
                let li = document.createElement('li');
                li.innerText = d.text;
                ul.appendChild(li)
        })
    })
    .catch(err=> reject(err));
});