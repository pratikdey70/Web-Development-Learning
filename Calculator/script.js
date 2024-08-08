let string = ''
let btns = document.querySelectorAll('#btn');
let input = document.querySelector('#inputField');

btns.forEach(btn => {
    btn.addEventListener('click', (ev) => {
        if(ev.target.innerText == '='){
            string = string(eval(string))
            input.value = string;
        }
        else if (ev.target.innerText == 'C'){
            string = ''
            input.value = string;
        }

        else if(ev.target.innerText == 'B'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }

        else{
            console.log(ev.target);
            string += ev.target.innerText
            input.value = string;
        }
    });
});

// input.addEventListener('keypress',(ev)=>{
//     if(ev.key == "enter"){
//         event.preventDefault();
//         document.querySelector('#btn').click().innerText == 'C';
//     }
// })