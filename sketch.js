var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function setup(){
    database= firebase.database();
    canvas=createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
 
}

function draw(){
if(playerCount === 2){
game.update(1);

}
if(gameState===1){

clear();
game.play();

}

}
