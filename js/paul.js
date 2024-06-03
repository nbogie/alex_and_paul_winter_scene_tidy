// File to work on my contribution

function drawSnowman(posX, posY, size) {
    //Snowman Body:
    fill(255);
    circle(posX,posY,size);
    circle(posX,posY - size*0.75,size*0.75);
    circle(posX,posY - size*1.25,size*0.5);
    //Snowman Eyes and buttons:
    fill(0);
    circle(posX - size*0.1, posY - size*1.35, size*0.05);
    circle(posX + size*0.1, posY - size*1.35, size*0.05);
    circle(posX, posY - size*0.75, size*0.05);
    circle(posX, posY - size*0.85, size*0.05);
    circle(posX, posY - size*0.65, size*0.05);
    //Snowman Nose:
    fill(255, 165, 0);
    triangle(posX,posY - size*1.3, posX,posY - size*1.2, posX + size*0.2,posY - size*1.25);
}

function drawPineTree(posX, posY, size) {
    //tree trunk:
    fill(160,82,45);
    rect(posX,posY,size, size*0.75)
    //green stuff:
    fill(0,100,0);
    triangle(posX,posY - size*1.5, posX - size, posY - size*0.375, posX + size, posY - size*0.375);
    triangle(posX,posY - size*2, posX - size, posY - size*0.875, posX + size, posY - size*0.875);
    triangle(posX,posY - size*2.5, posX - size, posY - size*1.375, posX + size, posY - size*1.375);
}

function drawMessage(posX, posY) {
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255); // White colour for the text
    
    fill(0, 102, 153); // Dark blue shadow colour
    text("Happy Christmas!", posX + 5, posY + 5);
    fill(255); // White colour for the text
    text("Happy Christmas!", posX, posY);
  }

let glowsize = 50;
function drawSun(posX, posY) {
    //Sun glow effect
    fill(255, 50);
    let size = 50;
    circle(posX, posY, glowsize);
    glowsize += 0.5
    if (glowsize > size+size/2.5) {
        glowsize = size;
    }
    //Orange sun circle
    fill(244, 128, 55);
    circle(posX, posY, size);
}

let eclipsePos = 55;
function drawMoon(posX, posY) {
    //white moon circle
    fill(255);
    circle(posX, posY, 50);
    //moon cycling
    fill(25, 25, 112);
    circle(posX-eclipsePos, posY, 50);
    eclipsePos -= 0.5
    if (eclipsePos < -55) {
        eclipsePos = 55
    }
}

function drawPresent(posX, posY, colour1, colour2, presentWidth, presentHeight) {
    //present body
    fill(colour1)
    rect(posX, posY, presentWidth, presentHeight)
    //ribbons
    fill(colour2)
    rect(posX, posY, presentWidth/5, presentHeight)
    rect(posX, posY, presentWidth, presentHeight/5)
}

//Day and Night modes:
const time = {
    mode: 'day',
};

function switchMode(newMode) {
    time.mode = newMode;
    updateView();
}

function updateView() {
    switch(time.mode) {
        case 'day':
            background("skyblue")
            drawSun(width * 0.75, 75)
            break;
        case 'night':
            background(25, 25, 112);
            drawMoon(width * 0.75, 75)
            break;
    }
}