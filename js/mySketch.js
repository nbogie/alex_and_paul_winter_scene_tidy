//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded
function setup() {
    createCanvas(windowWidth, windowHeight / 2);
    noStroke();
    createSnowflakes();
    createClouds();
}

function draw() {
    updateView();
    drawSnowman(width / 2, height * 0.75, 100);
    drawPineTree(width * 0.25, height * 0.9, 100);
    drawMessage(width / 2, 50);
    drawPresent(300, 350, "red", "green", 50, 100);
    drawLand();
    drawFence();
    drawSnowflakes();
    moveSnowflakes();
    drawClouds();
    moveClouds();
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}

function mouseClicked() {
    if (time.mode == "day") {
        switchMode("night");
    } else if (time.mode === "night") {
        switchMode("day");
    }
}
