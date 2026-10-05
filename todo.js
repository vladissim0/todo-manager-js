
const tasks = [];

let nextId = 1;

function addTask(title, priority, dueDate){
    if(title.trim().length === 0){
        console.log("A task must be named correctly without using any spaces")
        return false;
    }
    if((priority !== "high" && priority !== "medium" && priority !== "low")){
        console.log("Incorrect priority defenition");
        return
    }
    const task = {
        id: nextId++ ,
        title: title,
        completed: false,
        priority,
        dueDate
    }
    
    tasks.push(task);
    return task;
}
addTask("Learn JavaScript", "high", "2026-10-10");
addTask("Practice JSON", "medium", "2026-10-12");
addTask("Learn Closures", "low", "2026-10-15");
addTask("Practice Loops", "high", "2026-10-08");
addTask("Learn Functions", "medium", "2026-10-20");
addTask("Practice Arrays", "low", "2026-10-25");


function showTasks(){
    for(let i = 0; i < tasks.length; i++){
        console.log((tasks[i].completed === true)
        ? `[x] ${tasks[i].id} - ${tasks[i].title}`
        :`[ ] ${tasks[i].id} - ${tasks[i].title}`);
    }
    return;
}


function markCompleted(id){
    const task = tasks.find(function(task){
        return task.id == id;
    })
    if(task === undefined){
        console.log("Error: a task does not exist");
        return;
    }
     task.completed = true;
     return task
}

markCompleted(1);
markCompleted(4);
markCompleted(5);

function removeTask(id){
    
    const task = tasks.find(function(task){
        return task.id == id;
    });
    if(task === undefined){
        console.log("Error: a task does not exist")
        return;
    }
    const taskPos = tasks.findIndex(function(currentTask){
        return task  === currentTask;
    });
     console.log("Task removed");
   return tasks.splice(taskPos, 1)
}
showTasks();

function findTask(keyword){
     return tasks.filter(function(task){
        return task.title.includes(keyword);    
    })
}
console.log(findTask("Loop"));

function countTasks(){
    let taskCounter = 0;
    for(let i = 0; i < tasks.length; i++){
        taskCounter += 1;
    }
    console.log(`Total tasks: ${taskCounter}`);
    return taskCounter;
}
countTasks()

function countCompletedTasks(){
    let completedCounter = 0;
    
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].completed == true){
            completedCounter += 1;
        }
    }
    console.log(`Completed tasks: ${completedCounter}`);
    return completedCounter;
}
countCompletedTasks();

function exportTasks(){
    const exported = JSON.stringify(tasks, null, 2)
    return exported
}


const result = exportTasks();

function importTasks(jsonString){
    const imported = JSON.parse(jsonString)
    return imported
}


function sortByName(){
    tasks.sort(function(taskA, taskB){
        if(taskA.title < taskB.title ){
            return -1;
        }
        if(taskB.title < taskA.title ){
            return 1;
        }
        if(taskA.title === taskB.title){
            return 0;
        }
    })
}

function sortByPriority(){
    tasks.sort(function(taskA, taskB){
        let priorityA;

        if(taskA.priority === "high"){
            priorityA = 1;
        }
        if(taskA.priority === "medium"){
            priorityA = 2;
        }
        if(taskA.priority === "low"){
            priorityA = 3;
        }

        let priorityB;
        if(taskB.priority=== "high"){
            priorityB = 1;
        }
        if(taskB.priority === "medium"){
            priorityB = 2;
        }
        if(taskB.priority === "low"){
            priorityB = 3;
        }

        if(priorityA > priorityB){
            return 1;
        }
        if(priorityA < priorityB){
            return -1;
        }
        if(priorityA === priorityB){
            return 0;
        }
        
    })
}

function toDoStatistics(){
    function showTotalTasks(){
    let total = 0;
    for(let i = 0; i < tasks.length; i++){
        total++;
    }
        console.log(`Total task: ${total}`);
        return total;
    }
    

    let total = showTotalTasks();

  function showCompletedTasks(){
    let completed = 0;
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].completed === true){
            completed++
        }
    }
         console.log(`Completed tasks: ${completed}`)
        return completed;
  }
  

    let completed = showCompletedTasks();
  
  function showOpenedTasks(){
    let opened = 0;
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].completed === false){
            opened++
        }
    }
        console.log(`Opened tasks: ${opened}`)
        return opened;
  }
  
    let opened = showOpenedTasks();
    
    
  function completionRate(){
    const rateResult = (completed/total) * 100;
    console.log(`Completion Rate: ${rateResult}%`)
  }
  completionRate();
}
toDoStatistics();


sortByName();
console.log(tasks);


