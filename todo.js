let add = document.getElementById("add");
let taskInput = document.getElementById("taskInput");
let clear = document.getElementById("clear");
let taskCount = 0;
let counter = document.getElementById("counter");



add.addEventListener("click", function(){
    let task = taskInput.value;
    if(task !== ""){
        let li = document.createElement("li");
        li.innerHTML = task;
        taskCount++;
        counter.innerText = `Tasks Remaining: ${taskCount}`;


        li.addEventListener("click", function(){
            li.classList.toggle("completed");
            if(li.classList.contains("completed")){
                taskCount--;
            } else {
                taskCount++;
            }
            counter.innerText = `Tasks Remaining: ${taskCount}`;
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "❌";

        deleteButton.addEventListener("click", function(event){
             event.stopPropagation();

             if(!li.classList.contains("completed")){
                taskCount--;
             }
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
    taskCount = 0;
    counter.innerText = `Tasks remaining: ${taskCount}`;
});



