"use strict";

// Function to save task to local storage
function saveTasks(tasks)
{
    // 2 diff ways to access local storage: local storage, session storage deletes when browser is closed
    localStorage.set("tasks",JSON.stringify(tasks)) //key value, make teach item in array into a string and save it with the key "tasks", these are key value pairs

}


// Function to load tasks from local stroage
function loadTasks()
{
    const tasks = localStroage.getItem("tasks"); //we are retrieiving this 
    return tasks ? JSON.parse(tasks) : []; //if its not null, parse the array, otherwise return an empty array

}


// Exports
export { saveTasks, loadTasks };