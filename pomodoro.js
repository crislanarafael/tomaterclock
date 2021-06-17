//Minutes are dependent on the users selection of top menu
let minutes = 25; //default
let seconds = 60;
let isStart = false;
let isStop = false;
let isReset = false;
let isPomodoroSelected = true;
let isShortBreakSelected = false;
let isLongBreakSelected = false;
let timeDisplay = document.getElementById("output"); //default
let timer;        //setInterval(myTimer, 1000);

function pomodoro(){
  minutes = 25;
  timeDisplay.innerHTML = "25:00";
  isPomodoroSelected = true;
  isShortBreakSelected = false;
  isLongBreakSelected = false;
}

function shortBreak(){
  minutes = 5;
  timeDisplay.innerHTML = "5:00";
  isPomodoroSelected = false;
  isShortBreakSelected = true;
  isLongBreakSelected = false;
}

function longBreak(){
  minutes = 15;
  timeDisplay.innerHTML = "15:00";
  isPomodoroSelected = false;
  isShortBreakSelected = false;
  isLongBreakSelected = true;
}

function startTimer(){
  //Make sure we don't have a timer already
  //if we do, don't make a new one
  //or we will have two timers.
  if (timer === undefined) {
      if(isPomodoroSelected || isShortBreakSelected || isLongBreakSelected){
        document.getElementById("short").disabled = true;
        document.getElementById("long").disabled = true;
        document.getElementById("pomodoro").disabled = true;
      }

      timer = setInterval(myTimer, 1000);
  }
}

function myTimer(){
  seconds = (seconds - 1);
  if(seconds == 59){
    minutes -= 1;
  }
  if(seconds < 10 && seconds >= 0){
    timeDisplay.innerHTML = minutes + ":0" + seconds;
  }
  else{
    timeDisplay.innerHTML = minutes + ":" + seconds;
  }
  if(seconds == 0){
    seconds = 60;
  }
  if(minutes === 0 && seconds === 60){
    let audio = new Audio("alarm.wav");
    audio.play();
    clearInterval(timer);
  }
}

function stop() {
    clearTimer();

}

function clearTimer() {
    //Make sure that we don't have a timer
    if (timer !== undefined) {
        clearInterval(timer);
        //set the reference back to null,
        //indicating no timer
        timer = undefined;
    }
}

function reset() {
    let outputElement = document.getElementById("output");
    clearTimer();
    if(isPomodoroSelected){
      minutes = 25;
    }
    if(isShortBreakSelected){
      minutes = 5;
    }
    if(isLongBreakSelected){
      minutes = 15;
    }
    outputElement.innerHTML = minutes + ":00";
    seconds = 60;
    document.getElementById("short").disabled = false;
    document.getElementById("long").disabled = false;
    document.getElementById("pomodoro").disabled = false;
}
