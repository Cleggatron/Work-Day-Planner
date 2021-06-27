var currentDayEl = $("#currentDay");



function currentDay(){
    currentDayEl.innerHTML = moment().format("DD/MM/YYYY");
}


currentDayEl.text(moment().format("DD/MM/YYYY"));