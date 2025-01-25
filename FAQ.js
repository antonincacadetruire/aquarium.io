/* 
  Partie front-end du site. 
  Ce fichier décrit les intéraction de la FAQ
  il est appelé par FAQ.html
*/

function init(){
    console.log("starting...")
    document.getElementById("Backtomenu").addEventListener("click", function (e) {
        window.location.href="/"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});
