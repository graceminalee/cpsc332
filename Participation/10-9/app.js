// Main program (like in c++), where we load our appfrom
"use strict";

// Import modules
import { addTask, clearInput } from "./todo.js";
import {saveTasks, loadTasks } from "./storage.js";

/* Alternately, we can import all by doing:
import * as storage from "./storage.js";
*/


// Set up DOM references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-list");

// Load tasks from local storage
const tasks = loadTasks();


// Add event listener for new tasks
addTaskButton.addEventListener("click", ()=>{
    const taks = newTaskInput.value.trim(); // this grabs the text from the input box, trim out white spaces
    tasks.push(task);
    saveTasks(tasks);
    clearInput(newTaskInput)
});