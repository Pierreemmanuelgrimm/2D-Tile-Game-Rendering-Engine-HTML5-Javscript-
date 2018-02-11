/* Start Game Main Loop Function */
		var previousFrameTime = (new Date()).getMilliseconds();
		
	setInterval(function () {run()}, 30);
	function run() {
		//FPS function
		var currentFrameTime = (new Date()).getMilliseconds();
		var FPS = (currentFrameTime - previousFrameTime)/30;
		previousFrameTime = currentFrameTime;
		//debugging(FPS);
		

		
		time++;
		
		
		cameramove();
		drawMap(0,0,0,0); 
		

		/* Future code:
		 time++
		 Draw Map
			 
		 Check movement of entities
		 Draw entities (those visible)
			 
			
		*/
	}
/* End game loop function (this will never happen) */
