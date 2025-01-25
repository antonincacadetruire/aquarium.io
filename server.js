/* 

  trashictecture :

  Partie back-end du site. Pour lancer l'application, faire npm run start dans le terminal
  ne pas oublier d'ajouter sur mongoDB l'adresse IP actuelle, pour éviter les problèmes de 
  connexion à la base

  Bon jeu!
*/

/*********** Variables globales et modules *************/

const express = require('express');

const path = require('path');

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

let poisson;
let timetodeath = "0";

/*********************html ****************************/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/game.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'game.html'));
});
app.get('/menu.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'menu.html'));
});
app.get('/FAQ.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'FAQ.html'));
});
app.get('/regles.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'regles.html'));
});

/***************** Javascript ****************************/



app.get('/index.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.js'));
});
app.get('/game-1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'game-1.js'));
});
app.get('/game-2.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'game-2.js'));
});
app.get('/game-3.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'game-3.js'));
});
app.get('/menu.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'menu.js'));
});
app.get('/timer.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'timer.js'));
});
app.get('/FAQ.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'FAQ.js'));
});
app.get('/regles.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'regles.js'));
});

/********************** Css ****************************/

app.get('/index.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.css'));
});
app.get('/game.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'game.css'));
});
app.get('/menu.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'menu.css'));
});
app.get('/FAQ.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'FAQ.css'));
});
app.get('/regles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'regles.css'));
});

/******************** Images ***************************/

app.get('/img/underwater.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/underwater.jpg'));
});
app.get('/img/poisson1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/poisson1.png'));
});
app.get('/img/poisson2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/poisson2.png'));
});
app.get('/img/poisson3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/poisson3.png'));
});
app.get('/img/poisson4.webp', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/poisson4.webp'));
});
app.get('/img/bouteille.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/bouteille.png'));
});
app.get('/img/machine_a_laver.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/machine_a_laver.png'));
});
app.get('/img/pneu.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/pneu.png'));
});
app.get('/img/toxique.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/toxique.png'));
});
app.get('/img/sac.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/sac.png'));
});
app.get('/img/sac-plastique.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img/sac-plastique.png'));
});


/**************** requêtes interpage *************************/

app.post('/poisson', function (req, res) {
  poisson = req.body;
  console.log("prout")
  res.send('POST request received'); // Send response back to the client
});

app.get('/poisson', function (req, res) {
  res.send(poisson); // Send response back to the client
});

app.post('/timer', function (req, res) {
  timetodeath = req.body.timer; // Log the request body
  let dif = req.body.difficulty;
  console.log(timetodeath)
  console.log(dif)
  res.send('POST request received'); // Send response back to the client
});

/**** fonctions d'intéraction avec la base de données ****/

/********** fonction d'inscription *******************/

/********** fonction de lecture *******************/

/********** fonction de communication *******************/
/************* des meilleurs scores *********************/


/********** initialisation + lancement *******************/
/*********** du jeu sur le port local ********************/



app.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});