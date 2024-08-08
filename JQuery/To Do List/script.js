let body = $("body");
let h1 = $("<h1>");

body
  .append(h1.text("To Do List").addClass("h1"))

  .append($("<input>").attr('placeholder','Enter new Task').addClass("inp"))

  .append($("<button>").text("Add Task").addClass("btn"))
  
  .append(
    $("<button>")
      .text("Reset")
      .addClass("btn_1")
      .click((ev) => {
        // $(ev.target).window.location.reload();
      })
    
    )
    .append($("<ul>").addClass("taskList"))


let inp = document.querySelector('.inp');
let taskList = document.querySelector('.taskList');

$(document).ready(function () {
  $(".btn").on("click", function () {
    // Your code to execute when the button is clicked
    // alert("Button clicked!");
    let taskName = inp.value;
    let li = document.createElement('li');
    li.innerHTML =  `
    <span class="taskText">${taskName}</span>
    <button class="upBtn">Up</button>
    <button class="downBtn">Down</button>
    <button class="deleteBtn">Cancel</button>
    `
    li.classList.add('taskItem');
    taskList.appendChild(li);
    inp.value = "";
  });
});

$(document).ready(function () {
    $(".inp").on("keypress", (event)=> {
        if(event.key === "Enter"){
            event.preventDefault();
            document.querySelector('.btn').click();
        }
    });
  });

  $(document).ready(function () {
    $(".btn_1").on("click", ()=> {
        window.location.reload();
    });
  });

  $(document).ready(function () {
    $(".taskList").on("click", (ev)=> {
        let item = ev.target
        if(item.classList.contains('upBtn')){
            //alert("Up Button daba diya");
            let parentElement = item.parentElement;
            let previousElement = parentElement.previousElementSibling;
            taskList.insertBefore(parentElement,previousElement);
            console.log(parentElement);
            console.log(previousElement);
        }
        else if(item.classList.contains('downBtn')){
            // alert("Down button daba diya");
            //taskList.insertBefore(previousElement,parentElement);
            let parentElement = item.parentElement;
            let nextElement = parentElement.nextElementSibling;
            taskList.insertBefore(nextElement,parentElement);
            console.log(parentElement);
            console.log(nextElement);
        }
    
        else if(item.classList.contains('deleteBtn')){
            let parentElement = item.parentElement;
            parentElement.remove();
        }
    });
  });

