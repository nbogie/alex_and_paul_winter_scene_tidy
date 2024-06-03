//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

function setup() {
    createCanvas(windowWidth, windowHeight / 2);
    noStroke();
}

function draw() {
    background(25, 25, 112);
    drawSnowman(width/2, height* 0.75, 100);
    drawPineTree(width*0.25, height* 0.75, 100);
    drawMessage(width/2, 50);
    drawSun(width * 0.75, 75)
    drawMoon(width * 0.75, 150)
}
