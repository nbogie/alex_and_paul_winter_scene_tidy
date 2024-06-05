//Global variables
const time = {
    mode: "day",
};
let glowsize = 50;
let eclipsePos = 55;

//Draw sun
function drawSun(posX, posY) {
    //Sun glow effect
    fill(255, 50);
    let size = 50;
    circle(posX, posY, glowsize);
    glowsize += 0.5;
    if (glowsize > size + size / 2.5) {
        glowsize = size;
    }
    //Orange sun circle
    fill(244, 128, 55);
    circle(posX, posY, size);
}

//Draw moon
function drawMoon(posX, posY) {
    //white moon circle
    fill(255);
    circle(posX, posY, 50);
    //moon cycling
    fill(25, 25, 112);
    circle(posX - eclipsePos, posY, 50);
    eclipsePos -= 0.5;
    if (eclipsePos < -55) {
        eclipsePos = 55;
    }
}

//Day and Night modes:

function switchMode(newMode) {
    time.mode = newMode;
    updateView();
}

function updateView() {
    switch (time.mode) {
        case "day":
            background("skyblue");
            drawSun(width * 0.75, 75);
            break;
        case "night":
            background(25, 25, 112);
            drawMoon(width * 0.75, 75);
            break;
    }
}
