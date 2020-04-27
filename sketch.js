var player;
var pCount = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player();
    Player.initForm();
    Player.showForm();
}

function draw() {
    background(255, 255, 255);
}
