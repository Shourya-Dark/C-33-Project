class Snowball {
    constructor(x, y, r) {
        var options = {
            restitution : 0.4,
            //'fricton':1.0
        }
        this.r = r;
        this.body = Bodies.circle(x ,y , this.r,options);
        World.add(world,this.body);
        this.image = loadImage("snow4.webp");
        

    }
    display() {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
}