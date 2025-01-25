/* 
  Partie front-end du site. 
  Ce fichier est le coeur du jeu
  il est appelé par game.html
*/

/************* variables globales **************/

let timervalue = 0;
let alive = true;


function init(dif) {

  console.log("in game...");
  start();

  /* follower est le poisson que nous jouons */

  var follower = document.getElementById('follower');

  document.addEventListener('mousemove', function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    // Récupérer les dimensions de la fenêtre
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var posX = mouseX - follower.offsetWidth / 2;
    var posY = mouseY - follower.offsetHeight / 2;


    var maxPosX = windowWidth - follower.offsetWidth;
    var maxPosY = windowHeight - follower.offsetHeight;

    // Vérifier et ajuster la position si elle dépasse les limites
    posX = mouseX > maxPosX ? maxPosX : mouseX - follower.offsetWidth / 2;
    posY = mouseY > maxPosY ? maxPosY : mouseY - follower.offsetHeight / 2;
    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    follower.style.left = posX + 'px';
    follower.style.top = posY + 'px';

    checkForOverlap();
  });

  // éviter le bug de rester immobile pour gagner
  setInterval(() => {
    checkForOverlap();
  }, 10)


  document.getElementById("gohome").addEventListener("click", function (e) {
    window.location.href = "/";
  });
  if (dif == "normal") {
    ingame();
  }
  else if (dif == "chill") {
    ingame2();
  } else {
    ingame3();
  }
  function ingame() {
    console.log(alive)
    let vitesse = 1000;
    let duree = 3000;
    startFalling(vitesse, duree);
    const intervalId = setInterval(() => {
      if (alive == false) {
        clearInterval(intervalId);
      }
      startFalling(vitesse * 1.2, duree * 1.2);
      startFalling(vitesse, duree);
      if (vitesse < 850) {
        startFalling(vitesse * 1.4, duree);
      }
      if (vitesse < 700) {
        startFalling(vitesse * 0.9, duree);
      }
      vitesse *= 0.9;
      duree *= 0.9;

    }, 21000);
  }
  function ingame2() {
    console.log(alive)
    let vitesse = 2000;
    let duree = 4000;
    startFalling(vitesse, duree);
    const intervalId = setInterval(() => {
      if (alive == false) {
        clearInterval(intervalId);
      }
      startFalling(vitesse, duree);
      if (vitesse < 850) {
        startFalling(vitesse * 1.4, duree);
      }
      if (vitesse < 700) {
        startFalling(vitesse * 0.9, duree);
      }
      vitesse *= 0.98;
      duree *= 0.98;

    }, 21000);
  }
  function ingame3() {
    console.log(alive)
    let vitesse = 1000;
    let duree = 2000;
    startFalling(vitesse, duree);
    const intervalId = setInterval(() => {
      if (alive == false) {
        clearInterval(intervalId);
      }
      startFalling(vitesse * 0.95, duree * 0.95);
      startFalling(vitesse * 0.9, duree * 0.9);
      startFalling(vitesse * 1.05, duree * 1.05);

      if (vitesse < 850) {
        startFalling(vitesse * 1.4, duree);
      }
      if (vitesse < 700) {
        startFalling(vitesse * 0.9, duree);
      }
      vitesse *= 0.9;
      duree *= 0.9;

    }, 21000);
  }




  function checkForOverlap() {
    var elementsToCheck = document.querySelectorAll('.div1');
    var rect1 = follower.getBoundingClientRect();
    for (var i = 0; i < elementsToCheck.length; i++) {
      var rect2 = elementsToCheck[i].getBoundingClientRect();

      // Check for overlap
      var overlap = !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);

      if (overlap && alive) {
        stop();
        timervalue = document.getElementById('chrono').innerHTML;


        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'timer', true);
        xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type to JSON

        const data = JSON.stringify({ timer: `${timervalue}` , difficulty: `${dif}`}); // Convert object to JSON string

        xhr.send(data); // Send JSON data






        alive = false;
        let styleTag = document.createElement('style');
        document.head.appendChild(styleTag);
        let styleSheet = styleTag.sheet;
        styleSheet.insertRule('.div1 { display: none;}', 0);
        styleSheet.insertRule('#follower { display: none;}', 0);
        break;
      }
    }
  }
}



document.addEventListener("DOMContentLoaded", function () {
  let xhr = new XMLHttpRequest();
  let poissonData
  xhr.open('GET', '/poisson', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      poissonData = JSON.parse(xhr.responseText);
      document.getElementById("follower").innerHTML = poissonData.poisson;
      console.log(poissonData.difficulty)
      init(poissonData.difficulty);
    }
  };
  xhr.send();



});

