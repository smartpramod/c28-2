class Stone {
    constructor() {
        var options = {
            restitution: 0,
            density: 1.2,
            friction: 1
        }
        this.body = Bodies.rectangle(295, 612, 50, 40, options);
        this.w = 50;
        this.image = loadImage("Assets/stone.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);
        pop();
    }
}