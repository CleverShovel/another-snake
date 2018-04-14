document.onkeydown = function (event) {
	var size = directions.length;
	
	keyCode = window.event.keyCode;
	keyCode = event.keyCode;

    switch (keyCode) {
		case 37:
			num_direction = (size+num_direction-1)%size;
			direction = directions[num_direction];
			console.log(direction);
			break;
		
		case 39:
			num_direction = (size+num_direction+1)%size;
			direction = directions[num_direction];
			console.log(direction);
			break;
	
		case 38:
			direction = directions[num_direction];
			console.log(direction);
			break;
		
		default:
			direction = "null";
			break;
	}
}

function reset()
{
	direction = "down";
	num_direction = 2;
}

btn.onclick = function()
{
	start.style.display = "none";
	reset();
	drawModule.init();
}

canvas.addEventListener("gameover", function(event) {
	start.style.display = "block";
	}, false);
	