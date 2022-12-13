const head = {
  x: 100,
  y: 100,
};

const body = {
  startX: 74,
  startY: 90,
  width: 50,
  height: 150,
  fill: {
    r: 42,
  },
};

const leftHand = {
  x1: 40,
  y1: 40,
  x2: 70,
  y2: 70,
};

const color = {
  r: 177,
  g: 151,
  b: 252,
};

let eyeOpacity = 0;
let eyeColor = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // Body
  fill(body.fill.r);
  noStroke();
  rect(body.startX, body.startY, body.width, body.height);

  // Head
  fill(color.r, color.g, color.b);
  stroke(142, 147, 65);
  ellipse(head.x, head.y, 80, 80);

  // left eye
  fill(130, 130, 130, eyeOpacity);
  noStroke();
  ellipse(80, 100, 20, 20);
  eyeOpacity = eyeOpacity + 10;

  // right eye
  fill(eyeColor, eyeColor, eyeColor, eyeOpacity);
  noStroke();
  ellipse(mouseX, 100, 20, 20);

  // left hand
  stroke(255, 255, 255);
  line(30, 100, 74, 160);

  // right hand
  stroke(255, 255, 255);
  line(170, 100, 125, 160);
}

function mousePressed() {
  if (eyeColor === 255) eyeColor = 0;
  else eyeColor += 10;
}
