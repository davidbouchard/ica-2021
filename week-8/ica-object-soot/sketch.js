let soots = [];

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);      
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
  background("white");
  
  
  for (let i = 0; i < soots.length; i++) {
    soots[i].draw();
  }
}

function mousePressed() {
  // add a new soot object to the end of the array 'soots'
  let newSoot = new Soot(mouseX, mouseY, random(50, 200));
  soots.push(newSoot);  
}


// ------------------------------------------------------------------
// Eye class

class Eye {
  // runs when we call "new Eye()"
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  // functions
  draw() {
    fill("white");
    stroke("black");
    circle(this.x, this.y, this.diameter);

    fill("black");
    let pupilX = constrain(
      mouseX,
      this.x - this.diameter / 4,
      this.x + this.diameter / 4
    );
    let pupilY = constrain(
      mouseY,
      this.y - this.diameter / 4,
      this.y + this.diameter / 4
    );

    circle(pupilX, pupilY, this.diameter / 8);
  }
}

// ------------------------------------------------------------------
// Soot class (soot --> a Miyazaki character)

class Soot {
  // runs when we can "new Soot()"
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;

    let eSize = diameter / 4; // eyeSize
    let spacing = 0.6;

    this.leftEye = new Eye(this.x - eSize * spacing, this.y, eSize);
    this.rightEye = new Eye(this.x + eSize * spacing, this.y, eSize);
  }

  // functions
  draw() {
    // spikes
    stroke("black");
    strokeWeight(3);
    push();
    translate(this.x, this.y);
    for (let i = 0; i < 50; i++) {
      line(0, 0, this.diameter * 0.6, 0);
      rotate(TWO_PI / 50);
    }
    pop();

    strokeWeight(1);
    fill("black");
    noStroke();
    circle(this.x, this.y, this.diameter);

    this.leftEye.draw();
    this.rightEye.draw();
  }
}
