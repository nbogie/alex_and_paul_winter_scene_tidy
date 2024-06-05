"use strict";
let clouds = [];

function createClouds() {
    clouds = collect(4, createOneCloud);
}

function createOneCloud() {
    let cloudX = random(0, width);
    let cloudY = random(10, 150);
    let speed = random(1, 1.1);
    let cloud = {
        pieces: [
            {
                x: cloudX,
                y: cloudY,
                w: 70,
                h: 30,
                speed: speed,
            },
            {
                x: cloudX + 20,
                y: cloudY - 30,
                w: 30,
                h: 30,
                speed: speed,
            },
        ],
        speed,
    };
    return cloud;
}
function drawClouds() {
    for (let cloud of clouds) {
        for (let rectangleObject of cloud.pieces) {
            push();
            fill("white");
            rect(
                rectangleObject.x,
                rectangleObject.y,
                rectangleObject.w,
                rectangleObject.h
            );
            pop();
        }
    }
}

function moveClouds() {
    for (const cloud of clouds) {
        moveOneCloud(cloud);
    }
}
function moveOneCloud(cloud) {
    for (let rectangleObject of cloud.pieces) {
        rectangleObject.x += cloud.speed;
    }
    if (cloud.pieces[0].x > width) {
        for (let rectangleObject of cloud.pieces) {
            rectangleObject.x -=
                width + cloud.pieces[cloud.pieces.length - 1].w;
        }
    }
}
