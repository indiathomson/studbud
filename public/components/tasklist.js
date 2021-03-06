//TASKLIST
 
const form = document.getElementById("taskform");
const button = document.getElementById("taskform > button");
var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var taskDeadlineInput = document.getElementById("taskDeadlineInput");
var estimatedCompletionTimeInput = document.getElementById("estimatedCompletionTimeInput");
var priorityRatingInput = document.getElementById("priorityRatingInput");



button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let taskDeadline = taskDeadlineInput.value; 
  let estimatedCompletionTime = estimatedCompletionTimeInput.value;
  let priorityRatingInput = priorityRatingInput.options[priorityRatingInput.selectedIndex].value;


  addTask(task, dueDate, priorityRating, taskDeadline, estimatedCompletionTime, priorityRatingInput, false)
  console.log(taskList);
});


button.addEventListener("click", function(event){
});

var taskListArray =[];

function addTask(taskDescription, dueDate, priorityRating, taskDeadline, estimatedCompletionTime, completionStatus){
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    priorityRating,
    taskDeadline,
    estimatedCompletionTime,
    completionStatus
  };
  taskListArray.pusk(task);
  renderTask(task);
  
}


function renderTask(task){


//create html elements 
let item = document.createElement("li");
    item.innerHTML = "<p>" + task.taskDescription + "</p>";

    taskList.appendChild(item);
    
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

// clear the input form
form.reset();
}