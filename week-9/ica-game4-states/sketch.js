// References:
// Player and Zombie animations by Jesse Freeman: https://gumroad.com/l/z-art-free
// Female player animation by Zoe Bockasten: https://www.behance.net/zbocka
// Music from: http://ericskiff.com/music/

let assetUrl = "https://cdn.glitch.com/35c70f44-9814-44f1-a58b-85a40ec22cea%2F";

let mPlayerFrames = [];
let fPlayerFrames = [];
let zombieFrames = [];

let player;
let zombie;

let debug = false;

// 0 -> intro, 1 -> runGame, 2 -> gameOver;
const INTRO = 0;
const RUN_GAME = 1;
const GAME_OVER = 2;

let gameState = INTRO;

// ------------------------------------------------------------------
function preload() {
  mPlayerFrames = loadFrames("Mplayer-", 9);
  fPlayerFrames = loadFrames("Fplayer-", 9);
  zombieFrames = loadFrames("zombie-", 6);
}

// ------------------------------------------------------------------
// load all the images in a sequence into an array
// return the array
function loadFrames(prefix, numFrames, extension = ".png") {
  let frames = [];
  for (let i = 0; i < numFrames; i++) {
    let file = prefix + i + extension;
    print("Loading: " + file);
    frames[i] = loadImage(assetUrl + file);
  }
  return frames;
}

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  player = new Player();
  zombie = new Zombie();
}

// ------------------------------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ------------------------------------------------------------------
// Main render loop - code placed in draw() will repeat over and over
function draw() {
  if (gameState == INTRO) intro();
  else if (gameState == RUN_GAME) runGame();
  else if (gameState == GAME_OVER) gameOver();
}

// ------------------------------------------------------------------
function intro() {
  background("black");

  textAlign(CENTER);

  fill("green");
  textSize(60);
  text("ZOMBIE APOCALYPSE", width / 2, height / 4);

  textSize(20);
  text("PLAYER SELECT", width / 2, height / 2);

  image(fPlayerFrames[0], width / 2 - 100, height * 0.75);
  image(mPlayerFrames[0], width / 2 + 100, height * 0.75);
}

// ------------------------------------------------------------------
function runGame() {
  // Place your drawing code here
  background("black");

  player.move();
  player.animate();
  player.display();

  zombie.move();
  zombie.animate();
  zombie.display();

  if (collision(player, zombie) == true) {
    gameState = GAME_OVER; // it's over :(
  }
}

// ------------------------------------------------------------------
function gameOver() {
  background("black");

  player.display();
  zombie.display();

  textAlign(CENTER);

  fill("red");
  textSize(60);
  text("GAME OVER", width / 2, height / 4);

  fill("white");
  textSize(20);
  text("CLICK TO RESTART", width / 2, height / 2);
}

// ------------------------------------------------------------------
// a and b should have a x, y and radius property
function collision(a, b) {
  let distance = dist(a.x, a.y, b.x, b.y);
  if (distance < a.radius + b.radius) {
    return true;
  } else {
    return false;
  }
}

// ------------------------------------------------------------------
function mousePressed() {
  if (gameState == INTRO) {
    gameState = RUN_GAME;
  } else if (gameState == GAME_OVER) {
    gameState = RUN_GAME;
  }
}

// ------------------------------------------------------------------
class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.flip = 1;
    this.animationImages = mPlayerFrames;
    this.animationIndex = 0;
    this.radius = 25;
  }

  move() {
    this.x = mouseX;
    this.y = mouseY;
    // determine which direction the mouse is moving (either left or right)
    if (mouseX > pmouseX) this.flip = 1;
    if (mouseX < pmouseX) this.flip = -1;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.flip, 1);
    image(this.animationImages[this.animationIndex], 0, 0);

    // test
    if (debug) {
      noFill();
      stroke("green");
      circle(0, 0, this.radius * 2);
    }

    pop();
  }

  animate() {
    // % 4 --> slow down x4
    if (frameCount % 4 == 0) this.animationIndex++;
    if (this.animationIndex >= this.animationImages.length)
      this.animationIndex = 0;
  }
}

// ------------------------------------------------------------------
class Zombie {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.flip = 1;
    this.animationImages = zombieFrames;
    this.animationIndex = 0;
    this.radius = 25;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > width) this.speedY *= -1;
    if (this.speedX > 0) this.flip = 1;
    if (this.speedX < 0) this.flip = -1;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.flip, 1);
    image(this.animationImages[this.animationIndex], 0, 0);

    // test
    if (debug) {
      noFill();
      stroke("green");
      circle(0, 0, this.radius * 2);
    }

    pop();
  }

  animate() {
    // % 4 --> slow down x4
    if (frameCount % 4 == 0) this.animationIndex++;
    if (this.animationIndex >= this.animationImages.length)
      this.animationIndex = 0;
  }
}
