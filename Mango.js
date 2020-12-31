class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x, y, 30, options);
        this.r = 30;
        this.image = loadImage("Assets/mango.png");
        World.add(world, this.body);
        angleMode(RADIANS);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
}