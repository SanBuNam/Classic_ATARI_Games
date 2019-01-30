var ctx = document.getElementById("ctx").getContext("2d");

var WIDTH = 500;
var HEIGHT = 500;
ctx.font = "20px Calibri";

var snakeBody = {
  width: 20,
  height: 20
};

var food = {
  width: 20,
  height: 20
};

startGame = function() {
  snakeList = [{ x: 220, y: 200 }, { x: 210, y: 200 }, { x: 200, y: 200 }];
  foodList = [];
};
