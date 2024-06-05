"use strict";
//Global variables
let snowflakes = [];

function createSnowflakes() {
    snowflakes = collect(100, createOneSnowflake);
}

function createOneSnowflake() {
    return {
        x: random(0, width),
        y: random(0, height),
        size: 5,
        speed: random(1, 5),
    };
}

function drawSnowflakes() {
    for (let snowflake of snowflakes) {
        push();
        fill("white");
        circle(snowflake.x, snowflake.y, snowflake.speed * 1.5);
        pop();
    }
}

function moveSnowflakes() {
    for (let snowflake of snowflakes) {
        snowflake.y += snowflake.speed;
        if (snowflake.y >= height) {
            snowflake.y = 0;
            snowflake.x = random(0, width);
        }
    }
}

//Draw land function
function drawLand() {
    let landHeight = 100;
    push();
    stroke("black");
    fill("white");
    rect(0, height - 50, width, landHeight);
    pop();
}

//Background message
function drawMessage(posX, posY) {
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255); // White colour for the text

    fill(0, 102, 153); // Dark blue shadow colour
    text("Happy Christmas!", posX + 5, posY + 5);
    fill(255); // White colour for the text
    text("Happy Christmas!", posX, posY);
}
