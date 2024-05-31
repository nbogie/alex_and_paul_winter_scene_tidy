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