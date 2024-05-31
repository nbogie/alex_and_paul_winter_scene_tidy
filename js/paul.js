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
    rectMode(CENTER);
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
    fill(255); // White color for the text
    
    // Draw the text with a shadow effect for a festive look
    fill(0, 102, 153); // Dark blue shadow color
    text("Happy Christmas!", posX + 5, posY + 5);
    fill(255); // White color for the text
    text("Happy Christmas!", posX, posY);
  }