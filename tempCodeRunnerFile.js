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
console.log(tasks)