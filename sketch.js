var circle = {
  x: 250,
  y: 250,
  w: 50,
  h: 50,
  c: 10
};
var i = 1;


var t;
var num = 100;

function preload() {
  mySound = loadSound('quite.mp3');

}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
  createCanvas(800, 800);
  background(255);
  frameRate(10);
}

function draw() {
  circle.c = random(0, 255);

  // circle
  noStroke();
  fill(circle.c, random(0, 255), random(0, 255), 40);
  
  t = 60;
  for (var i = 120; i < 480; i++);
  rect(random(0, 255), random(0, 255), random(0, 255), random(0, 255));



}

function mousePressed() {
  background(255);
}