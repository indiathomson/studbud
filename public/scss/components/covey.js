//RENDER A COVEY TASK

function coveyRenderTask(task){


    //create html elements 
    let item = document.createElement("li");
        item.innerHTML = "<p>" + task.taskDescription + "</p>";
    
        coveyTaskList.appendChild(item);
    
    //extra task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    
    //event listeners for the DOM elements
    delButton.addEventListener("click", function(event){
        event.preventDefault();
        item.remove();
    });
    
    }