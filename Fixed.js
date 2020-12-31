// PARENT CLASS for the static bodies
class Fixed {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("Assets/stone.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
        pop();
    }
}