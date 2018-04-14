var start = document.getElementById('start');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var snakeSize = 10; 
var w = 350;
var h = 350;
var score = 0;
var snake;
var snakeSize = 10;
var food;

var direction = "down";
var directions = ["up","right","down","left"];
var num_direction = 2;