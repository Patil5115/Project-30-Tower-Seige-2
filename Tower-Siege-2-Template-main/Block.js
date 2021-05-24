class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visibility = 255;  
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width, this.height);
      pop();
      

  if(this.body.speed<5){
    var angle = this.body.angle;
    this.image = loadImage("block.png");
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  else{ 
    
    push();
    this.image = loadImage("block.png");
    this.Visibility = 255;
    this.Visibility = this.Visibility-5;
    tint(255,this.Visibility);
    image(this.image,this.body.position.x, this.body.position.y,50,50);
    World.remove(world,this.body);
    pop();
  }
}
}