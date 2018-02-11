function drawMap(startX, startY, endX, endY){
	
		minx = Math.floor(xoffset/tilesize);// Minimum tile x position that is visible on screen
		miny = Math.floor(yoffset/tilesize);// Minimum tile y position that is visible on screen
		
		maxx = Math.ceil((xoffset + (frame.width/viewMultiplier))/tilesize);// Maximum tile x position that is visible on screen
		maxy = Math.ceil((yoffset + (frame.height/viewMultiplier))/tilesize);// Maximum tile y position that is visible on screen
		
		/* If entire screen needs to be redrawn - so when drawMap(0,0,0,0)*/
		if(startX == 0 && startY == 0 && endX == 0 && endY ==0){
			startX = minx;
			startY = miny;
			endX = maxx;
			endY = maxy;		
		}		
		/* End */
		
		
		/* Change the area being rendered to the visible area */
		if (startX < minx) startX = minx; 		
		if (startY < miny) startY = miny;
		
		if (endX > maxx) endX = maxx;
		if (endY > maxy) endY = maxy;
		/* End */
		/* Start drawing the map */
		for (var j=startY; j < endY; j++){
			for (var i=startX; i < endX; i++){	
				var tileStyle = emptyTile; // Initialise style(property of tile)

				/* Set the coordinates where the tile will be drawn */
				xPrint = (viewMultiplier *(tilesize*i - xoffset));
				yPrint = (viewMultiplier *(tilesize*j - yoffset));
				
				if (i < 0 || j < 0 || i > mapArray[0].length - 1 || j > mapArray.length - 1){ // If the tile isnt in the array, draw a black square 
					tileStyle = emptyTile;
				}
				else{
					for (k = 0; k < tilePool.length; k++){
						if (mapArray[j][i] == tilePool[k].colorIndex){
							tileStyle = tilePool[k];
						}
					}
				}
				//context.putImageData(tileStyle.data,xPrint,yPrint);
				context.drawImage(tileStyle,xPrint,yPrint,viewMultiplier*tilesize,viewMultiplier*tilesize); //Draw the tile on the canvas
			}
		}
		/* End drawing the map */
		/* Draw entities */
		for (a = 0; a < entityPool.length; a++){
			entityPool[a].drawEntity();	
		}		
	
}