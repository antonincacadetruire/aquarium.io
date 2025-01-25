/* 
  Partie front-end du site. 
  Ce fichier décrit les intéractions sur le menu 
  il est appelé par menu.html
*/

/*********** fonction globale initiée au chargement de la page  *************/

function init() {
  console.log("settings...")

  /*********** envoie des données poisson + difficulté *************/
  /*********** lorsque le bouton est cliqué *************/

  document.getElementById("startgame").addEventListener("click", function (e) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'poisson', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = JSON.stringify({ 
      poisson: `${document.getElementById('item').innerHTML}`,
      difficulty : `${document.getElementById('dif').value}`
  });

    xhr.send(data);
    window.location.href = "game.html"
  });

/*********** Variables *************/

  var items = ['<img id="poisson1" class= "objets" src="img/poisson1.png" alt="Ma Image">',
    '<img id="poisson2" class= "objets" src="img/poisson2.png" alt="Ma Image">',
    '<img id="poisson3" class= "objets" src="img/poisson3.png" alt="Ma Image">',
    '<img id="poisson4" class= "objets" src="img/poisson4.webp" alt="Ma Image">'];
  
  var currentItemIndex = 0;
  var itemElement = document.getElementById('item');
  var leftButton = document.getElementById('leftButton');
  var rightButton = document.getElementById('rightButton');

  function updateItem() {
    itemElement.innerHTML = items[currentItemIndex];
  }

  updateItem();

  leftButton.addEventListener('click', function () {
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    updateItem();
  });

  rightButton.addEventListener('click', function () {
    currentItemIndex = (currentItemIndex + 1) % items.length;
    updateItem();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});