var ctx = document.getElementById("ctx").getContext("2d");
var WIDTH = 500;
var HEIGHT = 500;
ctx.font = "20px Calibri";

var ball = {
  x: 0,
  y: 0,
  radius: 5,
  color: "blue"
};

var base = {
  x: 0,
  y: 400,
  height: 20,
  width: 100,
  color: "red"
};

drawBall = function() {
  ctx.save();
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
};

drawBase = function() {
  ctx.save();
  ctx.fillStyle = base.color;
  ctx.fillRect(base.x, base.y, base.width, base.height);
  ctx.restore();
};

startGame = function() {
  base.x = 150;
  ball.x = base.x + 100;
  ball.y = base.y - 100;
  drawBall();
  drawBase();
};

startGame();
