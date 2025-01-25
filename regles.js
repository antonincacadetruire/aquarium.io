/* 
  Partie front-end du site. 
  Ce fichier permet de revenir à l'accueil du jeu
  il est appelé par regles.html
*/

function init(){
    console.log("starting...")
    document.getElementById("understood").addEventListener("click", function (e) {
        window.location.href="/"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});
