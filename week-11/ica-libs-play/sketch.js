let GRAVITY = 0.2;

let player;
let ground;
let platforms = [];
let walls = [];

let jumpCounter = 0;

let platformImage;


function preload() {
  platformImage = loadImage('https://cdn.glitch.com/277b988c-8def-4f22-b1b7-ae85e78fe198%2Fplatform.png?v=1617724359991');  
}

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);

  player = createSprite(width / 2, height / 2, 40, 40);
  player.shapeColor = color("white");

  ground = createSprite(width / 2, height, width * 2, 30);
  ground.shapeColor = color("gray");
  
  walls.push(createSprite(0, height/2, 10, height)); // left wall
  walls.push(createSprite(width, height/2, 10, height)); // left wall
  
}

// ------------------------------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ------------------------------------------------------------------
// Main render loop - code placed in draw() will repeat over and over
function draw() {
  // Place your drawing code here
  background("black");

  player.velocity.y += GRAVITY;

  // check for collisions with the ground
  if (player.collide(ground)) {
    player.velocity.y = 0;
    jumpCounter = 0;
  }
  
  // check for collisions with the walls
  for (let i=0; i < walls.length; i++) {
    player.collide(walls[i]);
  }

  // check for collision with platforms

  for (let i = 0; i < platforms.length; i++) {
    if (player.velocity.y > 0) {
      // allow for jumping through platform
      if (player.collide(platforms[i])) {
        player.velocity.y = 0;
        jumpCounter = 0;
      }
    }
    
    if (platforms[i].position.x > width+200) {
      platforms[i].position.x = -200;   
    }
  }

  // check the player input
  if (keyDown(LEFT_ARROW)) {
    player.velocity.x = -2;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.velocity.x = 2;
  }
  if (keyDown(LEFT_ARROW) == false && keyDown(RIGHT_ARROW) == false) {
    player.velocity.x = 0;
  }
  if (keyWentDown(" ") && jumpCounter < 2) {
    player.velocity.y = -7;
    jumpCounter++;
  }

  drawSprites();
}

function mousePressed() {
  let p = createSprite(mouseX, mouseY);
  
  p.addImage(platformImage);
  p.velocity.x = 3;

  platforms.push(p);
}
