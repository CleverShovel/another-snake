var drawModule = (function () { 
	var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }
	
	var pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }
	
	var scoreText = function() {
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, 145, h-5);
    }
	
	var drawSnake = function() {
        var length = 4;
        snake = [];
        
        for (var i = length; i>=0; i--) {
            snake.push({x:(i+1), y:1});
        }  
    }
	
	var createFood = function() {
        food = {
			x: Math.floor(Math.random() * w/snakeSize),
			y: Math.floor(Math.random() * h/snakeSize)
        }
        
        for (var i=0; i>snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;
            
             if (food.x===snakeX || food.y === snakeY) {
                food.x = Math.floor(Math.random() * w/snakeSize);
                food.y = Math.floor(Math.random() * h/snakeSize);
            }
        }
    }

	var paint = function () {
		ctx.fillStyle = 'lightgrey';
		ctx.fillRect(0, 0, w, h);
	
		ctx.strokeStyle = 'black';
		ctx.strokeRect(0, 0, w, h);
	
		var snakeX = snake[0].x;
		var snakeY = snake[0].y;
		
		if (isMoving){
			if (direction == 'right') {
				snakeX++;
			} else if (direction == 'left') {
				snakeX--;
			} else if (direction == 'up') {
				snakeY--;
			} else if (direction == 'down') {
				snakeY++;
			}
		}
	
		if ((snakeX == -1 || snakeX >= w / snakeSize || snakeY == -1 || snakeY >= h / snakeSize
			|| checkCollision(snakeX, snakeY, snake)) && direction != "null") {
			
			var event = new CustomEvent("gameover", {
				detail: null
			});

			canvas.dispatchEvent(event);
			
			score = 0;
			
			ctx.clearRect(0, 0, w, h);
			gameloop = clearInterval(gameloop);
			return;
		}
	
		if (snakeX == food.x && snakeY == food.y) {
			score++;
	
			createFood();
		}
	
		if (isMoving)
		{
			var tail = snake.pop();
			tail.x = snakeX;
			tail.y = snakeY;
		
			snake.unshift(tail);
			
			direction = "null";
			isMoving=false;
		}
	
		for (var i = 0; i < snake.length; i++) {
			bodySnake(snake[i].x, snake[i].y);
		}
	
		pizza(food.x, food.y);
	
		scoreText();
	}
	
	var checkCollision = function(x, y, array) {
        for(var i = 1; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
            return true;
        } 
        return false;
    }
	
	var init = function () {
		direction = 'down';
		drawSnake();
		createFood();
		gameloop = setInterval(paint, 80);
	}

	return {
		init: init
	};  
}());