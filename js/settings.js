var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

var start = document.getElementById('start');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var snakeSize = 10; 

var area = document.getElementById('area');
var home = document.getElementById('home');
var home_w = size.width*(parseInt(area.style.width)/100)*(parseInt(home.style.width)/100);
var home_h = size.height*(parseInt(area.style.height)/100)*(parseInt(home.style.height)/100);

canvas.width = home_w;
canvas.height = home_h;
var w = canvas.width;
var h = canvas.height;


var score = 0;
var snake;
var snakeSize = size.width/100;
var food;

var direction = "down";
var directions = ["up","right","down","left"];
var num_direction = 2;

var isMoving = true;