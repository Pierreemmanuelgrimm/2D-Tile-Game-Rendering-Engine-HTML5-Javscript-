	/* START OF CODE, FIRST PART TO RUN, INITIALIZES ALL THE VARIABLES */

	/* Start Canvas Initialization */
	
	frame = document.getElementById('frame'); 
	var context = frame.getContext('2d');
	
	/* End Canvas Initialization */
	
	viewMultiplier = 3; //Screen Dilatation Initialization, or Zoom factor
	xoffset = 0; // X coordinate Offset by which map is displayed, this is game pixel precision
	yoffset = 0; // Y coordinate Offset by which map is displayed, this is game pixel precision
	tilesize = 16; //Defines the pixel width/height that will be used
	time = 0; //Initialization of game timer
		
	/* Start Defining Tiles */
	tilePool = [];
	
	var grass = new Image();	
	Tile(grass,"grass", 1, 0);
	
	var dirt = new Image();
	Tile(dirt, "dirt", 100, 0);
	
	var wall = new Image();
	Tile(wall, "wall", 255, 1);
	
	var emptyTile = new Image();
	Tile(emptyTile, "emptyTile", "", 0);
	
	function Tile(tile, name, colorIndex, isCollision){
		tile.name = name;
		tile.colorIndex = colorIndex;
		tile.isCollision = isCollision;
		tile.src = 'images/tiles/' + name + '.png';
		tilePool.push(tile);
	}
	
	/* End Defining Tiles */
	
	/* Load the map image */
	var map = new Image();
	map.src = 'images/maps/map.png';
	/* End */
	
	/* Initializing Mob models*/
	var ninja_model = new Image();
	ninja_model.src = 'images/models/player_model.png';
	/**/
	
	window.onload = function(){
		pagesToLoad = ["entities","mobs", "player" , "startMap", "input", "game"];	
		for (iteration = 0; iteration < pagesToLoad.length; iteration ++){
			var element = document.createElement("script");
			element.src = pagesToLoad[iteration] + ".js";
			document.body.appendChild(element);
		}
	}
