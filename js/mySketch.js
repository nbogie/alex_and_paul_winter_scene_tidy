//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

function setup() {
    createCanvas(windowWidth, windowHeight / 2);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    updateView()
    drawSnowman(width/2, height* 0.75, 100);
    drawPineTree(width*0.25, height* 0.75, 100);
    drawMessage(width/2, 50);
    drawPresent(width*0.9, 200, "blue", "yellow", 50, 100)
}

function mouseClicked() {
    if(time.mode == 'day') {
        switchMode('night')
    } else if (time.mode === 'night') {
        switchMode('day')
    }
}