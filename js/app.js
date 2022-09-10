const daysText = document.getElementById('days');
const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');
const button = document.getElementById('button');
const selectedDate = document.getElementById('date');
const icon = document.getElementById('hourglass')

function calculateTime(){
    
    let date = selectedDate.value;
    let dateToCalculate = new Date(date);
    let currentDate = new Date();
    let totalTime, days, hours, minutes, seconds;

    dateToCalculate.setHours(0,0,0,0);
    dateToCalculate<currentDate ? totalTime = (currentDate-dateToCalculate) / 1000 : totalTime = (dateToCalculate-currentDate) / 1000;

    days = Math.floor(totalTime / 3600 / 24);
    hours = Math.floor(totalTime / 3600) % 24;
    minutes = Math.floor(totalTime / 60) % 60;
    seconds = Math.floor(totalTime) % 60;

    if(date){
        daysText.innerHTML = days;
        hoursText.innerHTML = hours;
        minutesText.innerHTML = minutes;
        secondsText.innerHTML = seconds;
    }else{
        daysText.innerHTML = 0;
        hoursText.innerHTML = 0;
        minutesText.innerHTML = 0;
        secondsText.innerHTML = 0
        return;
    }
}

button.onclick = function start() {
    calculateTime();
    setInterval(calculateTime, 1000);
    button.classList.add("date__selector__button-disabled");
    icon.classList.add("rotate");
}








