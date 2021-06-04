


//NAVIGATION
var menuItems = document.querySelectorAll('.nav .sidebar a');
menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        menuItems.forEach(function(item) {
            console.log(item);
          item.classList.remove("active");
        });
        item.classList.add("active");
    })
})

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



button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let taskDeadline = taskDeadlineInput.value; 
  let estimatedCompletionTime = estimatedCompletionTimeInput.value;
  let priorityRating = priorityRatingInput.options[priorityRatingInput.selectedIndex].value;
    

  addTask(task, dueDate, priorityRating, taskDeadline, estimatedCompletionTime, priorityRatingInput, false)
  console.log(taskListArray);
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
  taskListArray.push(task);
  renderTask(task);
  coveyRenderTask(task);
  
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

//redner a covery task

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




//Covey Quadrants

// var importantUrgent =[];

// function addTaskToCovey(taskDescription){
//   let d = new Date();
//   let dateCreated = d.getFullYear();
//   let task = {
//     taskDescription
//   };
//  importantUrgent.push(task);
//   renderTask(task);

//   //create html elements 
// let item = document.createElement("li");
// item.innerHTML = "<p>" + task.taskDescription + "</p>";

// importantUrgent.appendChild(item);


// }


// var notImportantUrgent =[];
// var importantNotUrgent =[];
// var notImportantNotUrgent =[];


  




//TIMER
var TIME_LIMIT;
let timePast;
let timeLeft;
let timeInterval;