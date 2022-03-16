const canvas = document.getElementById("canvas");
const btnt = document.getElementById("btnt");
const btnr = document.getElementById("btnr");
const btnb = document.getElementById("btnb");
const btnl = document.getElementById("btnl");
const context = canvas.getContext("2d");

canvas.style.border = "1px solid black"

const rad = 20;
var randx = Math.floor(Math.random()*400)
var randy = Math.floor(Math.random()*400)
var x = 20;
var y = 20;

var dir=2;
btnt.onmousedown = function() {
    dir=1
}
btnr.onmousedown = function() {
    dir=2
}
btnb.onmousedown = function() {
    dir=3
}
btnl.onmousedown = function() {
    dir=4
}


var t, speed=2, sc=0;
function rand(){
  var timePassed = (Date.now() - t) / 1000;
  console.log(timePassed);
  context.clearRect(0,0,400,400);
  context.beginPath();
  if (x > 400) x = x-400;
  if (y > 400) y = y-400;
  if (x < 0) x = x+400;
  if (y < 0) y = y+400;
  if (dir===1) y-=10;
  if (dir===2) x+=10;
  if (dir===3) y+=10;
  if (dir===4) x-=10;
  context.arc(x, y, rad, 0, 6.28);
  context.fillStyle="red";
  context.fill();
  
  if (Math.abs(x-randx)<40 && Math.abs(y-randy)<40) {
      sc+=1;
      randx = Math.floor(Math.random()*400);
      randy = Math.floor(Math.random()*400);
  }
  t = Date.now();
  
  context.beginPath();
  context.font = "20px Arial";
  context.fillText("Score: "+sc, 310, 30);
  

  context.beginPath();
  context.arc(randx, randy, rad/4, 0, 6.28);
  context.fillStyle="red";
  context.fill();
}


//rand()
setInterval(rand, 50)


/*function draw() {
  context.clearRect(0,0,400,400);
  context.beginPath();
  context.rect(x, y, 100, 100);
  context.fillStyle="red";
  context.fill();
  x += 10;
  if (x >= 400) {
    x = -100
  }
  y += 10;
  if (y >= 400) {
    y = -100
  }
}
var step=10;
function draw2() {
  context.clearRect(0,0,400,400);
  context.beginPath();
  context.arc(x, y, 20, 0, 6.28);
  context.fillStyle="red";
  context.fill();
  y += step;
  if (y >= (400 - 50) || y <= 50) {
      step *= -1;
  }
}

var step2=30
function draw3() {
  context.clearRect(0,0,400,400);
  context.beginPath();
  context.arc(x, y, 20, 0, 6.28);
  context.fillStyle="red";
  context.fill();
  y += step;
  if (y >= (400 - 50) || y <= 50) {
      step *= -1;
  }
  x += step2;
  if (x >= (400 - 30) || x <= 30) {
      step2 *= -1;
  }
}


context.beginPath();
context.arc(250, 250, 200, 0, 6.28);
context.strokeStyle = "red";
context.lineWidth = 10;
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.rect(400, 400,100,100);
context.strokeStyle = "red";
context.lineWidth = 10;
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath()
context.lineWidth = 1;
context.strokeStyle = "purple";
context.font = "20px Arial";
context.strokeText("Stroke Text", 200, 550);*/