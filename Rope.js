class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x:offsetX, y:offsetY}
            }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){

        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        line(posA.x,posA.y,posB.x+this.offsetX,posB.y+this.offsetY);
             
             
    }
}