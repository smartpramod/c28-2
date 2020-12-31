// Dedicated class for the Constraint 
class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 20,
        };
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    show() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            stroke(0);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x + 40, pointB.y);
            pop();
        }
    }
}