function Ninja(x,y,angleOfDirection){
		this.name = "Ninja";
		this.x = x;
		this.y = y;
		this.speed = 3;
		this.angleOfDirection = angleOfDirection;		
		this.sprite = ninja_model;
		
		this.isDead = false;
		this.hitPoints = 5;
		entityPool.push(this);	
	}
Ninja.prototype = new Mob();
Ninja.prototype.constructor = Ninja;
Ninja.prototype.deleteEntity(entityPool);
addToEntityTypePool(Ninja,255,ninja_model.width, ninja_model.height);