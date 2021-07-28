var arrowKey = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var canva = document.getElementById("draw").getContext("2d");
var x=250, y=250;

document.addEventListener("keydown", drawingWithKeyboard);

drawline(canva, "red", x-1, y-1, x+1, y+1); //central point on cavas

function drawingWithKeyboard(event){
    var color = "darkblue";
    var pixelMovement = 10;
    switch(event.keyCode)
    {
        case arrowKey.UP:
            drawline(canva, color, x, y, x, y-pixelMovement);
            y-=pixelMovement;
        break;
    
        case arrowKey.DOWN:
            drawline(canva, color, x, y, x, y+pixelMovement);
            y+=pixelMovement;
        break;

        case arrowKey.LEFT:
            drawline(canva, color, x, y, x-pixelMovement, y);
            x-=pixelMovement;
        break;

        case arrowKey.RIGHT:
            drawline(canva, color, x, y, x+pixelMovement, y);
            x+=pixelMovement;
        break;
    }
}
function drawline(background, color, xinicial, yinicial, xfinal, yfinal){
    background.beginPath();
    background.strokeStyle = color;
    background.lineWidth = 3;
    background.moveTo(xinicial, yinicial);
    background.lineTo(xfinal, yfinal);
    background.stroke();
    background.closePath();
}

