class Plink{
    constructor(x, y, radius){

        var options={
            isStatic : true
        }

        this.radius=radius;

        this.body = Bodies.circle(x, y, this.radius, options);
        
        
        
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        fill(255);
        ellipseMode(RADIUS);
        circle(0, 0, this.radius);
        pop();

        
        }
};