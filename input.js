	/* Speed of Camera */
	xcameraS = 0;
	ycameraS = 0;
	
	maxzoom = 2.5 * viewMultiplier;//Maximum Zoom
	minzoom = 1 * viewMultiplier;//Minimum Zoom
	
		
	xmouseover = 0;
	ymouseover = 0;
	
	upPressed = 0;
	downPressed = 0;
	leftPressed = 0;
	rightPressed = 0;

	document.onkeydown = function(event){
		event.preventDefault();
		var code = event.keyCode ? event.keyCode : e.which;
		if (code == 38 || code == 87)
			upPressed = 1;
		if (code == 40 || code == 83)
			downPressed = 1;
		if (code == 37 || code == 65)
			leftPressed = 1;
		if (code == 39 || code == 68)
			rightPressed = 1;
	}
	document.onkeyup = function(event){
		var code = event.keyCode ? event.keyCode : e.which;
		if (code == 38 || code == 87)
			upPressed = 0;
		if (code == 40 || code == 83)
			downPressed = 0;
		if (code == 37 || code == 65)
			leftPressed = 0;
		if (code == 39 || code == 68)
			rightPressed = 0;
	}
	frame.addEventListener('mousemove', function(e){
		xmouseover = e.clientX - frame.getBoundingClientRect().left;
		ymouseover = e.clientY - frame.getBoundingClientRect().top;
		//document.getElementById('debug').innerHTML = "x:"+ xmouseover + "|y:" + ymouseover;
		
	}, false);
	document.addEventListener("mousewheel", function(e){
		newview = viewMultiplier * Math.pow(rateofzoom, e.wheelDelta/360);
		if (newview > minzoom && newview < maxzoom){
			viewMultiplier = newview;
		}
	
		document.getElementById('debug').innerHTML = "viewMultiplier:"+ viewMultiplier + "<br>New:" + newview;
		
	}, false);

	
function cameramove(){
	xoffset += xcameraS;
	yoffset += ycameraS;

	if (upPressed == 1)
		ycameraS = -player.speed;
	if (downPressed == 1)
		ycameraS = player.speed;
	if (rightPressed == 1)
		xcameraS = player.speed;
	if (leftPressed == 1)
		xcameraS = -player.speed;
	
	/* Check for deceleration here */
	if (upPressed == 0 && downPressed == 0){
		if (ycameraS > 0)
			ycameraS--;
		if (ycameraS < 0)
			ycameraS++;
	}
	if (leftPressed == 0 && rightPressed == 0){
		if (xcameraS > 0)
			xcameraS--;
		if (xcameraS < 0)
			xcameraS++;
	}
	/*End deceleration */
}