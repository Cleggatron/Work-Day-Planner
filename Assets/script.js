var currentDayEl = $("#currentDay");
var tableRowsEl = $("tr");


//sets our current day
function currentDay(){
    currentDayEl.innerHTML = moment().format("DD/MM/YYYY");
}



function checkEventTimes(){
    for(i = 1; i < tableRowsEl.length; i++){
        var currentTimeHour = moment().minutes(0).seconds(0);
        var intervalTime = tableRowsEl[i].children[0].getAttribute("data-hours");
        var intervalDateTimer = moment().hours(intervalTime).minutes(0).seconds(0);        
        
    
        if(moment(intervalDateTimer).isBefore(currentTimeHour)){        
        tableRowsEl[i].classList.add("past");
        }else if(moment(intervalDateTimer).isSame(currentTimeHour)){
            tableRowsEl[i].classList.add("present");
        }else{
            tableRowsEl[i].classList.add("future");
        }
    }
}
currentDayEl.text(moment().format("DD/MM/YYYY"));
checkEventTimes();

