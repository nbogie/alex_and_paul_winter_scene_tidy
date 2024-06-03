
function drawLand() {
    let landHeight = 200;
    push();
    stroke("black");
    fill("GoldenRod");
    rect(0, height - 50, width, landHeight);
    pop();
}

function drawSky() {
    push();
    fill("DeepSkyBlue");
    rect(0, 0, width, height - 50);
}

function drawSnowflake() {
    let randomPositionX = random(0, width);
    fill("white");
    circle(randomPositionX, 0, 5);
    randomPositionX++;
}

function drawSnowflakes() {
    for (let i = 0; i < 50; i++) {
        drawSnowflake();
    }
}