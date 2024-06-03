let snowflakes = [];
let clouds = [];

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

function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        let snowflake = {
            x: random(0, width),
            y: random(0, height),
            size: 5,
            speed: random(1, 5)
        }
        snowflakes.push(snowflake);
    }
}

function drawSnowflakes() {
    for (let snowflake of snowflakes) {
        push();
        fill("white");
        circle(snowflake.x, snowflake.y, snowflake.size);
        pop();
    }
}

function moveSnowflakes() {
    for (let snowflake of snowflakes) {
        snowflake.y += snowflake.speed;
        if (snowflake.y >= height) {
            snowflake.y = 0;
        }
    }
}

function drawFence() {
    push();
    fill("brown");
    for (let x = 0; x < width; x += 40) {
        rect(x, height - 105, 10, 60);
    }
    rect(0, height - 90, width, 10);
    pop();
}