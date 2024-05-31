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