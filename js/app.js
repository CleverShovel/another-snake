
document.onkeydown = function (event) {
	num_direction = directions.indexOf(direction);
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
			console.log(direction);
			break;
	}
}

btn.onclick = function()
{
	start.style.display = "none";
	
	drawModule.init();
}

canvas.addEventListener("gameover", function(event) {
	start.style.display = "block";
	}, false);
	