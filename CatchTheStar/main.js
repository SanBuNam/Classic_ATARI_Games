var ctx = document.getElementById("ctx").getContext("2d");
var catcherOne = new Image();
var catcherTwo = new Image();
var catcherThree = new Image();
var catcherFour = new Image();
var background = new Image();
var blood = new Image();
var tile = new Image();
var food = new Image();

var tileObject = {
  height: 20,
  width: 50
};

var catcher = {
  x: 100,
  y: 350,
  width: 30,
  height: 50,
  jump: 0,
  onair: false,
  jumpUnit: 5,
  spd: 0,
  leftPressed: false,
  rightPressed: false,
  gravity: 10,
  safe: true
};

var foodObject = {
  height: 50,
  width: 50,
  spd: 3
};

var score = 0;
var level = 100;
var animation = 0;
var foodTimer = 0;
var gameover = false;
var intervalVar;
var foodList = [];
var tileList = [];
var foodDrop = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

background.onload = function() {
  blood.onload = function() {
    catcherOne.onload = function() {
      catcherTwo.onload = function() {
        catcherThree.onload = function() {
          catcherFour.onload = function() {
            food.onload = function() {
              tile.onload = function() {
                // Game Area
              };
              tile.src = "images/tile.png";
            };
            food.src = "images/food.png";
          };
          catcherFour.src = "images/catcher4.png";
        };
        catcherThree.src = "images/catcher3.png";
      };
      catcherTwo.src = "images/catcher2.png";
    };
    catcherOne.src = "images/catcher1.png";
  };
  blood.src = "images/blood.png";
};
background.src = "images/background.jpg";
