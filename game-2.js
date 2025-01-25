/* 
  Partie front-end du site. 
  Ce fichier est le coeur du jeu
  il est appelé par game.html
  il détaille la fonction déplacer élement,
  qui permet de faire bouger les déchets
  sur l'écran
*/

function deplacerElement(element, xFinal, yFinal, duree) {
    const xInitial = element.offsetLeft;
    const yInitial = -100;

    const deltaX = xFinal - xInitial;
    const deltaY = yFinal - yInitial;
    const fps = 120; // Nombre d'images par seconde
    const dureeFrames = duree / 1000 * fps; // Durée en frames

    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      if (frame >= dureeFrames) {
        clearInterval(interval);
      } else {
        const progress = frame / dureeFrames;
        const xCurrent = xInitial + deltaX * progress;
        const yCurrent = yInitial + deltaY * progress;

        element.style.left = xCurrent + 'px';
        element.style.top = yCurrent + 'px';
      }
    }, 1000 / fps);
  }