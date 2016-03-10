"use strict";

var $ = function(id) {
	return document.getElementById(id);
};

var tasks = [];
var sortDirection = "ASC";
var name = "Tasks";

var displayTaskList = function() {
    var list = "";
    
    // displays name in case it exists in localStorage
    name = localStorage.getItem("name") && localStorage.getItem("name").concat("'s Tasks") || name;
    $("name").firstChild.nodeValue = name;
    
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { tasks = storage.split("|"); }
    }
        
    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
        if(sortDirection === "ASC") {
        	tasks.sort();
        } else {
        	tasks.sort();
        	tasks.reverse();
        }
    	list = tasks.join("\n");
    }
    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();
}

var addToTaskList = function() {   
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {  
        // add task to array and local storage
    	tasks.push(task.value);
    	tasks.sort();
    	localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

var deleteTask = function() {
	console.log("Delete Task - Started");
	var taskToDelete = parseInt(prompt("Insert the index of the task you want to delete!", 0));
	if(isNaN(taskToDelete)) {
		console.log("Delete Task - Failed: Index is not a number.");
	} else if(tasks.length === 0) {
		console.log("Delete Task - Failed: There are no tasks to delete.");
	} else if(taskToDelete <= 0 || taskToDelete > tasks.length) {
		console.log("Delete Task - Failed: Index out of bounds.");
	} else {
		// delete task on array and local storage
        tasks.splice(taskToDelete - 1, 1)
        console.log("Delete Task - Success");
		localStorage.tasks = tasks.join("|");

        // re-display tasks
        displayTaskList();
	}
	console.log("Delete Task - Ended");
	
}

var toggleSort = function() {
	// Toggle the ascend or descend order and display array
	sortDirection = sortDirection === "ASC" ? "DSC" : "ASC";
	displayTaskList();
}

var setName = function() {
	var namePrompt = prompt("Please insert your name (max:8)", "");
	if(namePrompt.trim().length === 0) {
		console.log("ERROR! SetName Failed: Please insert a Name!");
	} else if (namePrompt.length > 8) {
		console.log("ERROR! SetName Failed: Name cannot have more than 8 characters!");
	} else {
		localStorage.setItem("name", namePrompt);
		$("name").firstChild.nodeValue = namePrompt.concat("'s Tasks");
	}
}

var filterTasks = function() {
	var list = "";
	var tasksFiltered = tasks.filter(checkImportant);
	if (tasksFiltered.length > 0) {
        if(sortDirection === "ASC") {
        	tasksFiltered.sort();
        } else {
        	tasksFiltered.sort();
        	tasksFiltered.reverse();
        }
    }
	list = tasksFiltered.join("\n");
	// display tasks string and set focus on task text box
    $("task_list").value = list;
}

var checkImportant = function(value){
	var isImportant = false;
	if (value.toLowerCase().indexOf("important!") != -1) {
		isImportant = true;
	}
	return isImportant;
}

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    $("delete_task").onclick = deleteTask;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    $("filter_tasks").onclick = filterTasks;
    displayTaskList();
}