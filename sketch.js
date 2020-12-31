// name_spacing for the Matter.js Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

// Variables used in this program
var engine, world;
var bg;
var tree, boy, stone, ground;
var sling1, sling2;
var Mangoes = [];
/*Adding GameState*/
var gameState = "Aim";

// preloading some images
function preload() {
    tree = loadImage("Assets/tree.png");
    bg = loadImage("Assets/bg.jpg");
    boy = loadImage("Assets/boy.png");
}

function setup() {
    createCanvas(1500, 800);
    // creating our own engine
    engine = Engine.create();
    world = engine.world;
    // adding elements to the game
    ground = new Ground();
    stone = new Stone();
    sling1 = new Sling(stone.body, {
        x: 255,
        y: 460
    });
    // adding mangoes using array
    for (var i = 0; i < 30; i++) {
        x = round(random(1000, 1350));
        y = round(random(125, 435));
        var mango = new Mango(x, y);
        Mangoes.push(mango);
    }

    // running the engine
    Engine.run(engine);
}

function draw() {
    background(bg);
    // updating the engine
    Engine.update(engine);

    // displaying the elements of the game
    image(tree, 830, 0);
    ground.display();
    image(boy, 50, 410);
    stone.display();
    sling1.show();
    // adding mangoes
    for (j = 0; j < Mangoes.length; j++) {
        Mangoes[j].display();
        touched(stone, Mangoes[j]);
    }

    if (gameState != "launched") {
        if (mouseIsPressed) {
            Body.setPosition(stone.body, {
                x: mouseX,
                y: mouseY
            });
        }
    }

    fill("HotPink");
    textSize(48);
    stroke(150, 0, 150);
    strokeWeight(5);
    text("Press Space to reload the sling !!!", 250, 50);
}

// relesing the stone from the sling
function mouseReleased() {
    sling1.sling.bodyA = null;
    gameState = "launched";
}

// reloading the sling with a stone
function keyPressed() {
    if (keyCode == 32) {
        sling1.sling.bodyA = stone.body;
        Body.setPosition(stone.body, {
            x: 295,
            y: 612
        });
        gameState = "Aim";
    }
}

// collision detection function 
function touched(stone, mango) {
    var mango_pos = mango.body.position;
    var stone_pos = stone.body.position;
    var distance = dist(stone_pos.x, stone_pos.y, mango_pos.x, mango_pos.y);
    if (distance <= stone.w + mango.r)
        Body.setStatic(mango.body, false);
}