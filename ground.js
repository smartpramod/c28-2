// CHILD CLASS of the PARENT CLASS Fixed
class Ground extends Fixed {
    constructor() {
        super(750,775,1500,75);
        this.image = loadImage("Assets/ground.png");
    }
}