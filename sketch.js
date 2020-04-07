var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
 
var boxes = [];
var boxes2 = [];
var gSlider;

var ground;
 
function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;
    
    gSlider = createSlider(0, 100, 50);
    gSlider.position(625, 550);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
    ground = new Ground(200,590,1200,30);
    

}
 
function mousePressed() {
    if (mouseY < 350) {
       boxes2.push(new Particle(mouseX, mouseY, random(10, 50)));
       boxes.push(new Box(mouseX, mouseY, random(20, 80),random(20,80)));
    }
}
console.log(boxes);

function draw() {
    background("orange");
    Engine.update(engine);
    
    var fVal = gSlider.value();
 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
        boxes2[i].display();
    }
     ground.display();
}
 