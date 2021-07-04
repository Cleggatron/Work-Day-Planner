var currentDayEl = $("#currentDay");
var tableRowsEl = $("tr");
var saveBtnEl = $(".saveBtn");


//sets our current day
function currentDay(){
    currentDayEl.innerHTML = moment().format("DD/MM/YYYY");
}


//function check current time (rounded down) against the interval times
function checkEventTimes(){
    
    //run through our intervals
    for(i = 1; i < tableRowsEl.length; i++){
        var currentTimeHour = moment().minutes(0).seconds(0);
        var intervalTime = tableRowsEl[i].children[0].getAttribute("data-hours");
        var intervalDateTimer = moment().hours(intervalTime).minutes(0).seconds(0);        
        
        //logical comparisons then set our classes
        if(moment(intervalDateTimer).isBefore(currentTimeHour)){        
        tableRowsEl[i].classList.add("past");
        }else if(moment(intervalDateTimer).isSame(currentTimeHour)){
            tableRowsEl[i].classList.add("present");
        }else{
            tableRowsEl[i].classList.add("future");
        }
    }
}

//function will get our task list from local storage
function pushToLocalStorage(taskToSave){
    var storedTasks = JSON.parse(localStorage.getItem("storedTasksLS"));

    //if we have nothing in local storage
    if(storedTasks === null){
        storedTasks = [];
        storedTasks.push(taskToSave);
        localStorage.setItem("storedTasksLS", JSON.stringify(storedTasks));
        return;
    }
    //The for loop checks if we already have the value. 
    for(var i = 0; i < storedTasks.length; i++){
        if(storedTasks[i].interval === taskToSave.interval){
            storedTasks[i] = taskToSave;
            localStorage.setItem("storedTasksLS", JSON.stringify(storedTasks));
            return;
        }
    }
    //else we can just push it to the array
    storedTasks.push(taskToSave);
    localStorage.setItem("storedTasksLS", JSON.stringify(storedTasks));
    return;
}

function saveContent(event){
    event.preventDefault();

    var currentInterval = $(event.target).attr("data-hours");
    var inputField = $(event.target).siblings().eq(1).children().val();

    var taskData ={
        interval: currentInterval,
        task: inputField,
    };    
    //push to local storage here.
    pushToLocalStorage(taskData);
}

//function sets the task content from local storage
function updateTaskEls(){
    var taskList = JSON.parse(localStorage.getItem("storedTasksLS"));
    var inputEl = $("input");

    if(taskList === null){
        return;
    }

    //loop through our input fields. Then loop through
    for(i = 0; i < inputEl.length; i++){
        for(j = 0; j < taskList.length; j++){
            if($(inputEl[i]).attr("data-hours") === taskList[j].interval){
                inputEl[i].value = taskList[j].task;
            }
        }
    }
    
    return;

}

currentDayEl.text(moment().format("DD/MM/YYYY"));

checkEventTimes();

saveBtnEl.on("click", saveContent);

updateTaskEls()

