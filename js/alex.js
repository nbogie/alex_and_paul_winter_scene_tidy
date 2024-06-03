let snowflakes = [];
let clouds = [];

function drawLand() {
    let landHeight = 100;
    push();
    stroke("black");
    fill("white");
    rect(0, height - 50, width*4, landHeight);
    pop();
}

function drawSky() {
    push();
    fill("DeepSkyBlue");
    rect(0, 0, width, height - 50);
}


function drawFence() {
    push();
    fill("brown");
    for (let x = 0; x < width; x += 40) {
        rect(x, height - 105, 10, 60);
    }
    rect(0, height - 110, width*4, 10);
    pop();
}

function drawClouds() {
    for (let cloudArray of clouds) {
        for (let rectangleObject of cloudArray) {
            push();
            fill("white");
            rect(rectangleObject.x, rectangleObject.y, rectangleObject.w, rectangleObject.h)
            pop();
        }
    }   
}

function createClouds() {
    for (let i = 0; i < 4; i ++) {
        let cloudX = random(0, width);
        let cloudY = random(10, 150);
        let speed = random(1, 1.1);
        let cloud = [
            {
                x: cloudX,
                y: cloudY,
                w: 70,
                h: 30,
                speed: speed
            },
            {
                x: cloudX + 20,
                y: cloudY - 30,
                w: 30,
                h: 30,
                speed: speed
            }
        ]
        clouds.push(cloud);
    }

}

function moveClouds() {
    for (let cloudArray of clouds) {
        for (let rectangleObject of cloudArray) {
            rectangleObject.x += rectangleObject.speed;
        }
        if (cloudArray[0].x > width) {
            for (let rectangleObject of cloudArray) {
                rectangleObject.x -= width + cloudArray[cloudArray.length -1].w;
            }
        }
    }
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
        circle(snowflake.x, snowflake.y, snowflake.speed*1.5);
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

// function drawLights() {
//     drawLightPoles();
//     push();
//     fill("gray");
//     rect(20, 210, width - 35, 5);
//     let lightsDiameter = 5;
//     for (let i = 30; i < width - 20; i += 10) {
//         push();
//         fill("yellow");
//         circle(i, 212, lightsDiameter);
//         pop();
//     }
// }

// function drawLightPoles() {
//     push();
//     fill("black");
//     rect(20, 200, 5, 500); 
//     rect(width - 20, 200, 5, 500);
//     pop();
// }