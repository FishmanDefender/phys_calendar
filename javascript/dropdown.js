function dropdown(number){
    var elem = document.getElementById('arrow'+number.toString());
    var schedule = document.getElementById('schedule'+number.toString());

    if (elem.className === "fas fa-angle-right fa-lg") {
        elem.className = "fas fa-angle-down fa-lg";
    } else {
        elem.className = "fas fa-angle-right fa-lg";
    }

    if (schedule.className === "schedule") {
        schedule.className += '-open';
    } else {
        schedule.className = 'schedule';
    }
}
