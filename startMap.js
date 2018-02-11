	//Map tile reference, making it a global variable that can be accessed outside this function

	context.drawImage(map,0,0);
	
	var debug = document.getElementById('debug');
	window.mapArray = [];
	var mapImage = context.getImageData(0,0,map.width,map.height);
	
	for (var j = 0; j < map.height; j++){
		mapArray[j] = [];
		for (var i = 0; i < map.width; i++){
			var red = mapImage.data[4 * ((j*map.width) + i)]; //Red defines the tile
			var green = mapImage.data[4 * ((j*map.width) + i) + 1];//Green defines the entity on the tile
			var blue = mapImage.data[4 * ((j*map.width) + i) + 2];
			
			mapArray[j][i] = red;
			if (green != 0){
				for (k = 0; k < entityTypePool.length; k ++){
					if (green == entityTypePool[k].referenceNumber){
						x = ((i+0.5) * tilesize) - ((entityTypePool[k].width)/2)
						y = ((j+0.5) * tilesize) - ((entityTypePool[k].height)/2)

						angle = Math.PI * ((2* blue/255) - 1);
						
						if (entityTypePool[k].name == "Player"){
							player = new Player(x,y,angle);
						}
						else{
							new entityTypePool[k](x,y,angle);
						}
						debugging("Entity Type: " + entityTypePool[k].name + " Position on map: ["+i+"]["+j+"]");
					}
				}			
			}
		}
	}