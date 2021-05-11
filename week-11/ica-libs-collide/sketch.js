let r;  // rect
let c;  // circle

// lines
let a;
let b; 

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  // rect
  r = {
    x: width/2,
    y: height/2,
    w: 300,
    h: 200
  };
  
  // circle
  c = {
    x: 0,
    y: 0, 
    d: 100
  };
  
  // line a 
  a = {
    x1: width/2,
    y1: height/2, 
    x2: 0, 
    y2: 0,
  };
  
  // line b
  b = { 
    x1: random(width),
    y1: random(height), 
    x2: random(width),
    y2: random(height)
  }
  
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
  background('black');
  //rectCircleDemo();
  linesDemo();  
}

//------------------------------------------------------------------
function linesDemo() {
  stroke('white');
  strokeWeight(3);
  
  a.x2 = mouseX;
  a.y2 = mouseY; 
  
  line(a.x1, a.y1, a.x2, a.y2);
  
  let hit = collideLineLine(a.x1, a.y1, a.x2, a.y2, b.x1, b.y1, b.x2, b.y2, true );
  
  print(hit);
  if (hit.x) {
    stroke('green');
    line(b.x1, b.y1, hit.x, hit.y);    
    stroke('red');
    line(hit.x, hit.y, b.x2, b.y2);
  }
  else {
    stroke('white');
    line(b.x1, b.y1, b.x2, b.y2);   
  }
  
}


//------------------------------------------------------------------
function rectCircleDemo() {
    
  noStroke();
  fill('white');
  
  c.x = mouseX;
  c.y = mouseY; 
  circle(c.x, c.y, c.d);
  
  let hit = collideRectCircle(r.x, r.y, r.w, r.h, c.x, c.y, c.d);
  
  //print(hit);
  if (hit) {
    fill('green');
  }
  else {
    fill('white');
  }
  
  rect(r.x, r.y, r.w, r.h);  
}