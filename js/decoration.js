//Draw fence
function drawFence() {
    push();
    fill("brown");
    //fenceposts
    for (let x = 0; x < width; x += 40) {
        rect(x, height - 105, 10, 60);
    }
    //top bar of fence
    rect(0, height - 110, width, 10);
    pop();
}

//Draw snowman
function drawSnowman(posX, posY, size) {
    push();
    //Snowman Body:
    translate(posX, posY);
    fill(255);
    circle(0, 0, size);
    circle(0, -size * 0.75, size * 0.75);
    circle(0, -size * 1.25, size * 0.5);
    //Snowman Eyes and buttons:
    fill(0);

    circle(-size * 0.1, -size * 1.35, size * 0.05);
    circle(size * 0.1, -size * 1.35, size * 0.05);
    circle(0, -size * 0.75, size * 0.05);
    circle(0, -size * 0.85, size * 0.05);
    circle(0, -size * 0.65, size * 0.05);
    //Snowman Nose:
    fill(255, 165, 0);
    triangle(0, 0 - size * 1.3, 0, 0 - size * 1.2, size * 0.2, 0 - size * 1.25);
    pop();
}

//Draw pine tree
function drawPineTree(posX, posY, size) {
    push();
    rectMode(CENTER);
    //tree trunk:
    fill(160, 82, 45);
    rect(posX, posY, size, size * 0.75);
    pop();
    //green stuff:
    fill(0, 100, 0);
    triangle(
        posX,
        posY - size * 1.5,
        posX - size,
        posY - size * 0.375,
        posX + size,
        posY - size * 0.375
    );
    triangle(
        posX,
        posY - size * 2,
        posX - size,
        posY - size * 0.875,
        posX + size,
        posY - size * 0.875
    );
    triangle(
        posX,
        posY - size * 2.5,
        posX - size,
        posY - size * 1.375,
        posX + size,
        posY - size * 1.375
    );
}

//Draw present
function drawPresent(
    posX,
    posY,
    colour1,
    colour2,
    presentWidth,
    presentHeight
) {
    //present body
    push();
    rectMode(CENTER);
    fill(colour1);
    rect(posX, posY, presentWidth, presentHeight);
    //ribbons
    fill(colour2);
    rect(posX, posY, presentWidth / 5, presentHeight);
    rect(posX, posY, presentWidth, presentHeight / 5);
    pop();
}
