	
	/* Initializing Entities */
	entityPool = [];
	entityTypePool = [];
	currentEntityType = 0;
	
	function Entity(){
	}
	Entity.prototype.deleteEntity = function(entityPool){
		if (this.isDead == false){
			var entityIndex = entityPool.indexOf(this);
			entityPool.splice(entityIndex, 1);
			this.isDead = true;
		}
	};
	Entity.prototype.drawEntity = function(){
		xPosition = viewMultiplier*(this.x - xoffset);
		yPosition = viewMultiplier*(this.y - yoffset);
		
		xRotationOffset = viewMultiplier*this.sprite.width/2;
		yRotationOffset = viewMultiplier*this.sprite.height/2;
		
		//context.drawImage(this.sprite,xPosition,yPosition,viewMultiplier*this.sprite.width,viewMultiplier*this.sprite.height);	

		
		context.save();
		context.beginPath();
		context.translate(xPosition + xRotationOffset,yPosition  + yRotationOffset);
		context.rotate(this.angleOfDirection);
		context.drawImage(this.sprite,-1*(xRotationOffset), -1*(yRotationOffset),viewMultiplier*this.sprite.width,viewMultiplier*this.sprite.height);	
		context.restore();
		
		this.angleOfDirection += 0.1;
	}
	
	function Mob(){
	}
	Mob.prototype = new Entity();
	Mob.prototype.constructor = Mob;
	Mob.prototype.deleteEntity(entityPool);
	
	function Projectile(){
	}
	Projectile.prototype = new Entity();
	Projectile.prototype.constructor = Projectile;
	Projectile.prototype.deleteEntity(entityPool);
	
	function Particle(){
	}
	Particle.prototype = new Entity();
	Particle.prototype.constructor = Particle;
	Particle.prototype.deleteEntity(entityPool);
		
	function addToEntityTypePool(name, reference, tileWidth, tileHeight){
		entityTypePool[currentEntityType] = name;
		entityTypePool[currentEntityType].referenceNumber = reference;
		entityTypePool[currentEntityType].width = tileWidth;
		entityTypePool[currentEntityType].height = tileHeight;		
		currentEntityType ++;	
	}