let add = document.getElementById("add");
let taskInput = document.getElementById("taskInput");
let clear = document.getElementById("clear");


add.addEventListener("click", function(){
    let task = taskInput.value;
    if(task !== ""){
        let li = document.createElement("li");
        li.innerHTML = task;


        li.addEventListener("click", function(){
            li.classList.toggle("completed");
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "❌";

        deleteButton.addEventListener("click", function(event){
             event.stopPropagation();
             li.remove();
        });
        li.appendChild(deleteButton);
        
        document.getElementById("list").appendChild(li);
        taskInput.value = "";
    }
});

clear.addEventListener("click", function(){
    let list = document.getElementById("list");
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
});

