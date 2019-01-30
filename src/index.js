var ctx = document.getElementById("ctx").getContext("2d");

var square = {
  width: 200,
  height: 200,
  x: 100,
  y: 200,
  color: "red"
};

ctx.save();

ctx.fillStyle = square.color;
ctx.fillRect(square.x, square.y, square.width, square.height);

ctx.restore();
