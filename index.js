/* 
  Partie front-end du site. 
  Ce fichier décrit les intéractions sur l'accueil 
  il est appelé par index.html
*/


/* 
  chacun des evenements permet de changer de page
*/

/************* initialisation **************/

function init(){
    console.log("starting...")
    document.getElementById("startmenu").addEventListener("click", function (e) {
        window.location.href="menu.html"
    });
    document.getElementById("trophee").addEventListener("click", function (e) {
        window.location.href="leaderboard.html"
    });
    document.getElementById("FAQ").addEventListener("click", function (e) {
        window.location.href="FAQ.html"
    });
    document.getElementById("regles").addEventListener("click", function (e) {
        window.location.href="regles.html"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});