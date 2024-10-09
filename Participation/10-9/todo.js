"user strtict"; //JS is loosely typed, typos in variable names will create new names when typo is encounted. adds enforced syntaz

// Function to add a task
function addTask(task, taskList) 
{
    const li = document.createElement("li");
    li.textContent = task; //arg passed in from input box and assign to text item
    taskList.appendChild(li); //append it to the list 

}


// Function to clear the input field
function clearInput(inputField)
{
    inputField.value = ""; //set it to an empty string this i s refernce to the input box in first div, but now we clear it

}


// Alternate method to export, (add export to the front of the function)
export function sayHello()
{
    alert("Hello, World!");
}


// Exporting functions
export{ addTask, clearInput }; //to make this work with modules, we need to Export

