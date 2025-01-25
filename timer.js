/* 
  Partie front-end du site. 
  Ce fichier décrit l'élement "timer", qui correspond au temps
  de survie du joueur. 
  il est appelé par game.html
*/

/*********** Variables globales  *************/

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

/*********** fonction d'initialisation  *************/

function start() {
  timer = setInterval(updateChrono, 1000);
}

/*********** fonction d'arrêt  *************/

function stop() {
  clearInterval(timer);
}

/*********** fonction de réinitialisation  *************/

function reset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

/*********** fonctions décomptant le temps  *************/

function updateChrono() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById('chrono').innerText = formattedTime;
}

/*********** fonction d'écriture du temps  *************/

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}