let clouds = [];

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