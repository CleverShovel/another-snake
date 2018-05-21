document.onkeydown = function (event) {
	var size = directions.length;
	
	keyCode = window.event.keyCode;
	keyCode = event.keyCode;

    switch (keyCode) {
		case 37:
			num_direction = (size+num_direction-1)%size;
			direction = directions[num_direction];
			isMoving = false;
			break;
		
		case 39:
			num_direction = (size+num_direction+1)%size;
			direction = directions[num_direction];
			isMoving = false;
			break;
	
		case 38:
			direction = directions[num_direction];
			isMoving = true;
			break;
		
		default:
			direction = "null";
			break;
	}
	
	document.getElementById('direction').textContent = direction;
}

function reset()
{
	direction = "down";
	num_direction = 2;
	
	isMoving = true;
}

btn.onclick = function()
{
	start.style.display = "none";
	reset();
	document.getElementById('direction').textContent = direction;
	drawModule.init();
}

function addCommand(command)
{
	program = document.getElementById('program');
	if (!program.textContent.trim()) program.textContent=command;
	else program.textContent += '\r\n'+command;
}

forward.onclick = function()
{
	addCommand('forward');
}

right.onclick = function()
{
	addCommand('right');
}

left.onclick = function()
{
	addCommand('left');
}

function* changeDirection(inText){
	var size = directions.length;
	var lines = inText.split(/\s*\n\s*/);
	for (var j = 0; j < lines.length; j++) {
		if (lines[j].trim()==="right"){
			num_direction = (size+num_direction+1)%size;
			direction = directions[num_direction];
			isMoving = false;
		}
		else if (lines[j].trim()==="left"){
			num_direction = (size+num_direction-1)%size;
			direction = directions[num_direction];
			isMoving = false;
		}
		else if (lines[j].trim()==="forward"){
			direction = directions[num_direction];
			isMoving = true;
		}
		document.getElementById('direction').textContent = direction;
		yield direction;
	}
}

go.onclick = function()
{
	var iter = changeDirection(document.getElementById('program').textContent);
	setInterval(function(iter) {
		iter.next();
	}, 100, iter);
}

/*var commandRead = setInterval(function(iter) {
  iter.next();
}, 100, iter);*/

canvas.addEventListener("gameover", function(event) {
	start.style.display = "block";
	}, false);