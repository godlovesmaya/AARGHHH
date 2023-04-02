var message = " كيف حالك ابو العث؟ ", 
  font,
  bounds, 
  fontsize = 90,
  x, y;

function preload() {
}

function setup() {
  createCanvas(700, 400);


  textSize(fontsize);

  bounds = {x: 0, y: 0, h: 4, w: 650, advance: 0}
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {

  fill(0,0,255);
  rect(0, 0, width, height);


  fill('yellow');
  text(message, x, y);
  bounds = {x: x, y: y, h: 4, w: 9, advance: 0}

 
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}