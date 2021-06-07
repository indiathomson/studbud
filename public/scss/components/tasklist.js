//TASKLIST
 
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskList = document.getElementById("taskList");
var coveyTaskList = document.getElementById("coveyTaskList");
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var taskDeadlineInput = document.getElementById("taskDeadlineInput");
var estimatedCompletionTimeInput = document.getElementById("estimatedCompletionTimeInput");
var priorityRatingInput = document.getElementById("priorityRatingInput");
var urgencyInput = document.getElementById("urgencyInput");


button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let taskDeadline = taskDeadlineInput.value; 
  let estimatedCompletionTime = estimatedCompletionTimeInput.value;
  let priorityRating = priorityRatingInput.options[priorityRatingInput.selectedIndex].value;
  let urgency = urgencyInput.options[urgencyInput.selectedIndex].value;

  addTask(task, dueDate, priorityRating, taskDeadline, estimatedCompletionTime, priorityRatingInput, urgency)
  console.log(taskListArray);
  console.log(taskList);
});

button.addEventListener("click", function(event){
});

var taskListArray =[];

function addTask(taskDescription, dueDate, priorityRating, taskDeadline, estimatedCompletionTime, urgency){
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    taskDeadline,
    estimatedCompletionTime,
    priorityRating,
    urgency
  };
  taskListArray.push(task);
  renderTask(task);
  coveyRenderTask(task);
  
}


function renderTask(task){

updateEmpty();

//create html elements 
let item = document.createElement("li");
    item.innerHTML = "<p>" + task.taskDescription + task.DueDate + "</p>";

    taskList.appendChild(item);

    item.innerHTML = "<p>" + task.DueDate + "</p>"

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
    updateEmpty();
});

// clear the input form
form.reset();
}


function updateEmpty(){
  if (taskListArray.length > 0){
    document.getElementById('emptyList').style.display='none';
 }else{
    document.getElementById('emptyList').style.display='block';

 } 
}
