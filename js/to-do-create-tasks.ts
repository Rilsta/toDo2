/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the Dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for(var task of thorTasks){
  console.log(task);
}

var homeTasks = ToDoList.listTasksByType("home", tasks);
console.log("Here are the Home Tasks: ");
for(var task of homeTasks){
  console.log(task);
}

var workTasks = ToDoList.listTasksByType("work", tasks);
console.log("Here are the Work Tasks: ");
for(var task of workTasks){
  console.log(task);
}

var hobbyTasks = ToDoList.listTasksByType("hobby", tasks);
console.log("Here are the Hobby Tasks: ");
for(var task of hobbyTasks){
  console.log(task);
}

var lowTasks = ToDoList.listTasksByPriority("Low", tasks);
console.log("Here are the Low Priority Tasks: ");
for(var task of lowTasks){
  console.log(task);
}
var mediumTasks = ToDoList.listTasksByPriority("Medium", tasks);
console.log("Here are the Medium Priority Tasks: ");
for(var task of mediumTasks){
  console.log(task);
}
var highTasks = ToDoList.listTasksByPriority("High", tasks);
console.log("Here are the High Priority Tasks: ");
for(var task of highTasks){
  console.log(task);
}

$(document).ready(function() {
  var highThor = ToDoList.personHighPriority("High", people.thor, tasks);
  for(var task of highThor){
    $("#thorHighest").append("Here is Thor's highest task: " + task);
    {break;}
  };
  var highDiane = ToDoList.personHighPriority("High", people.diane, tasks);
  for(var task of highDiane){
    $("#dianeHighest").append("Here is Diane's highest task: " + task);
    {break;}
  };
  var highLoki = ToDoList.personHighPriority("High", people.loki, tasks);
  for(var task of highLoki){
    $("#lokiHighest").append("Here is Loki's highest task: " + task);
    {break;}
  };
});
