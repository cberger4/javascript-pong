//JavaScript Pong
//Created by: Chris Berger
//Date: July 27, 2020

//sounds
let pong1, pong2, pong3, oof;

let player;
let ball;
let opponent;
let playerScore = 0;
let opponentScore = 0;
let scoreLimit = 7;

function preload() {
  soundFormats('mp3');
  pong1 = loadSound('sounds/pong1');
  pong2 = loadSound('sounds/pong2');
  pong3 = loadSound('sounds/pong3');
  oof = loadSound('sounds/oof');
}

function setup() {
  createCanvas(600, 400);
  player = new Player();
  ball = new Ball(width / 2, height / 2);
  opponent = new Opponent();
}

function draw() {
  background(0);

  textSize(20);
  textAlign(CENTER, CENTER);
  fill(255);
  text(playerScore, (width / 2) - 25, 25);
  text(opponentScore, (width / 2) + 25, 25);

  player.show();
  ball.show();
  ball.update();

  opponent.show();
  opponent.follow(ball);

  if (player.hits(ball)) {
    pong1.play();
    ball.turnAround();
    ball.changeY();
    ball.speedUp();
  }

  if (opponent.hits(ball)) {
    pong3.play();
    ball.turnAround();
    ball.speedUp();
  }

  if (ball.playerScored()) {
    ball = new Ball(width / 2, height / 2);
    playerScore++;
  }

  if (ball.opponentScored()) {
    oof.play();
    ball = new Ball(width / 2, height / 2);
    opponentScore++;
  }

  if (playerScore == scoreLimit) {
    text("YOU WIN!", width / 2, height / 2 - 50);
    text("Click to RESTART", width / 2, height / 2 + 50);
    noLoop();
  }

  if (opponentScore == scoreLimit) {
    text("YOU LOSE!", width / 2, height / 2 - 50);
    text("Click to RESTART", width / 2, height / 2 + 50);
    noLoop();
  }

  if (keyIsDown(UP_ARROW)) {
    player.up();
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.down();
  }
}

function mousePressed() {
  playerScore = 0;
  opponentScore = 0;
  ball = new Ball(width / 2, height / 2);
  loop();
}