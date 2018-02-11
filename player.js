function Player(x, y, angleOfDirection){
		this.name = "Player";
		this.speed = 3;
		this.angleOfDirection = angleOfDirection;		
		this.sprite = ninja_model;
		this.x = x;
		this.y = y;
		
		this.isDead = false;
		this.hitPoints = 10;
		entityPool.push(this);	
}

Player.prototype = new Ninja();
Player.prototype.constructor = Player;
Player.prototype.deleteEntity(entityPool);
addToEntityTypePool(Player,100,ninja_model.width, ninja_model.height);