/* 
  Partie front-end du site. 
  Ce fichier est le coeur du jeu
  il est appelé par game.html
*/

/************* variables globales **************/
/*
    Ce tableau correspond au différents déchets affichables
    dans le jeu
*/

var items = [
'<img class= "objets" src="img/bouteille.png" alt="Ma Image">',
'<img class= "objets" src="img/machine_a_laver.png" alt="Ma Image">',
'<img class= "objets" src="img/pneu.png" alt="Ma Image">',
'<img  class= "objets" src="img/sac.png" alt="Ma Image">',
'<img  class= "objets" src="img/sac-plastique.png" alt="Ma Image">',
'<img  class= "objets" src="img/toxique.png" alt="Ma Image">'
];

/*
    Cette fonction créer les éléments à éviter.
    @paramètre duree correspond au temps que met 
    l'élement à traverser l'écran de manière random
*/

function createFallingElement(duree) {
    var element = document.createElement('div');
    element.classList.add('div1');
    element.style.top = '-100px'
    element.style.left = getRandomBetween(0, window.innerWidth) + 'px';
    element.style.transform = 'rotate(' + getRandomAngle() + ')';
    element.style.width = getRandomBetween(40, 120) + 'px';
    element.style.height = getRandomBetween(40, 120) + 'px';
    element.innerHTML=randomtrash();
    document.body.appendChild(element);
    deplacerElement(element, getRandomBetween(0, window.innerWidth), window.innerHeight + 50, duree);
}

/*
    Cette fonction créer les éléments à éviter.
    @paramètre duree correspond au temps que met 
    l'élement à traverser l'écran
    sa particularité est qu'elle fait traverser l'écran
    en ligne droite l'élement qu'elle créer
*/

function createFallingElement2(duree) {
    var element = document.createElement('div');
    element.classList.add('div1');
    element.style.top = '-100px'
    element.style.left = getRandomBetween(0, window.innerWidth) + 'px';
    element.style.transform = 'rotate(' + getRandomAngle() + ')';
    element.style.width = getRandomBetween(40, 120) + 'px';
    element.style.height = getRandomBetween(40, 120) + 'px';
    document.body.appendChild(element);
    element.innerHTML=randomtrash();
    deplacerElement(element, element.style.left, window.innerHeight + 50, duree); //ici se trouve la différence
}

/*
    fonction générant les vagues d'élements à éviter
    @paramètre duree correspond au temps que mettent les élements
    à traverser l'écran, 
    @paramètre k correspond à l'intervalle d'appel des fonctions
    de créations des élements
*/

function startFalling(k, duree) {
    let timeInterval = 20000 / k;

    const intervalId = setInterval(() => {
        if(alive == false){
            clearInterval(intervalId);
            document.getElementById('gameover').innerHTML=`<div><h1>You lost after ${timervalue}</h1></div>`
         }
        createFallingElement(duree)
        createFallingElement2(duree)
        timeInterval -= 1;

        if (timeInterval <= 0) {
            clearInterval(intervalId);
           
        }
        
    }, k);
}

/*************** generate random angles and  ******************/

function getRandomAngle() {
    return getRandomBetween(-10, 10) + 'deg';
}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

/*************** get random trash **************** */

function randomtrash(){
    return items[Math.floor(Math.random() * 6)]
}