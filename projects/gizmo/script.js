function setup() {
createCanvas(800, 800);
fill("red");
stroke("brown");
background(0); // Draw once to give a little color
}

function draw() {
} // Empty draw() keeps the program running

function mousePressed() {
rect(mouseX - 40, mouseY - 20, 80, 40);
}
