const hoursElement = document.querySelector(".Hours");
const minutesElement = document.querySelector(".Minutes");
const secondsElement = document.querySelector(".Seconds");
const milisecElement = document.querySelector(".Miliseconds");
const display = document.getElementById("display");
const btn = document.querySelectorAll("button");

let stopwatch;
let isRunning = false;
let hours = 0,
  minutes = 0,
  seconds = 0,
  miliseconds = 0;

const startStopwatch = (callback) => {
  if (!isRunning) {
    isRunning = true;
    stopwatch = setInterval(() => {
      miliseconds += 10;
      if (miliseconds === 1000) {
        miliseconds = 0;
        seconds++;

        if (seconds === 60) {
          seconds = 0;
          minutes++;

          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      callback();
    }, 10);
  }
};

const stopStopwatch = () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(stopwatch);
  }
};

const resetStopwatch = (callback) => {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  miliseconds = 0;
  callback();
};

const updateDisplay = () => {
  hoursElement.innerText = hours.toString().padStart(2, "0");
  minutesElement.innerText = minutes.toString().padStart(2, "0");
  secondsElement.innerText = seconds.toString().padStart(2, "0");
  milisecElement.innerText = miliseconds.toString().padStart(3, "00");

  // console.log(`${hours}:${minutes}:${seconds}:${miliseconds}`);
};

btn[0].addEventListener("click", () => {
  startStopwatch(updateDisplay);
});
btn[1].addEventListener("click", () => {
  stopStopwatch();
});
btn[2].addEventListener("click", () => {
  resetStopwatch(updateDisplay);
});
