//RENDER A COVEY TASK

 function coveyRenderTask(task){


             //create html elements 
             let item = document.createElement("li");
                 item.innerHTML = "<p>" + task.taskDescription + "</p>";
            
                 coveyTaskListIU.appendChild(item);
            
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

list.appendChild(taskElement);

    //     function coveyQuadrant(){

    //         if ("priorityRatingInput" === "Low" && "urgencyInput" === "notUrgent"){
    //             //Covey list Not Important and Not Urgent
    //             let item = document.createElement("li");
    //             item.innerHTML = "<p>" + task.taskDescription + "</p>";
            
    //             coveyTaskListNINU.appendChild(item);

    //         } else if ("priorityRatingInput" === "Low" && "urgencyInput" === "urgent"){
    //             //Covey list Not Important and Urgent
    //             let item = document.createElement("li");
    //             item.innerHTML = "<p>" + task.taskDescription + "</p>";
            
    //             coveyTaskListNIU.appendChild(item);


    //         }else if ("priorityRatingInput" === "High" && "urgencyInput" === "notUrgent"){
    //             //Covey list Important and Not Urgent
    //             let item = document.createElement("li");
    //             item.innerHTML = "<p>" + task.taskDescription + "</p>";
            
    //             coveyTaskListINU.appendChild(item);

    //         }else  if ("priorityRatingInput" == "High" && "urgencyInput" == "urgent"){
    //             //Covey list Important and Urgent
    //             let item = document.createElement("li");
    //             item.innerHTML = "<p>" + task.taskDescription + "</p>";
            
    //             coveyTaskListIU.appendChild(item);
       
    //         }

    //     }
    



    //   //  var list = document.createElement("li");
       
    //    // var taskElement = document.getElementById("taskDescription");
    