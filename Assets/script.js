var currentDayEl = $("#currentDay");
var tableRowsEl = $("tr");
var saveBtnEl = $(".saveBtn");

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

function saveContent(event){
    event.preventDefault();
    var siblingElText = $(event.target).siblings().eq(1).val();
    var intervalText = $(event.target).siblings().first().attr("data-hours");

    console.log($(event.target).siblings().eq(1).text());
    console.log($(event.target).siblings().first());


    console.log(siblingElText + " " + intervalText);
}

currentDayEl.text(moment().format("DD/MM/YYYY"));
checkEventTimes();

saveBtnEl.on("click", saveContent);

