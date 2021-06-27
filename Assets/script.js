var currentDayEl = $("#currentDay");
var tableRowsEl = $("tr");


//sets our current day
function currentDay(){
    currentDayEl.innerHTML = moment().format("DD/MM/YYYY");
}



function checkEventTimes(){

    for (i = 1; i < tableRowsEl.length; i++){
        // creates a moment rounding down to the nearest hour
        var currentTimeHour = moment().minutes(0).seconds(0);
        var intervalTime = tableRowsEl[1].children[0].getAttribute("data-hours");
        var intervalDateTimer =moment().hours(intervalTime).minutes(0).seconds(0);        
        
        
        if(moment(intervalDateTimer).isBefore(currentTimeHour)){
            tableRowsEl[i].addClass("past");
        }else if(moment(intervalDateTimer).isSame(currentTimeHour)){
            tableRowsEl[i].addClass("present");
        }else{
            tableRowsEl[i].addClass("future");
        }
    }
}

currentDayEl.text(moment().format("DD/MM/YYYY"));
