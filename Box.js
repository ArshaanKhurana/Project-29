class Box {
  constructor(x,y,color) {
    var options = {
        isStatic: false,
        restitution:0.04,
        friction:0
    }
    this.body = Bodies.rectangle(x,y,30,40,options);
    World.add(world, this.body);
    this.color=color
  }
  display(){
    var pos =this.body.position;
    //translate(pos.x,pos.y)
    //rotate(this.body.angle)

    
    rectMode(CENTER);
    fill(this.color)
    rect(pos.x,pos.y, 30, 40);
  }
};
