var d=0, x, y;
var canva = document.getElementById("background").getContext("2d");
var color = document.getElementById("userColor");
console.log(color);

document.addEventListener("mousedown",mouseDown);
document.addEventListener("mousemove",mouseDrawing);
document.addEventListener("mouseup",mouseUp);

drawline(canva, "black", 1, 1, 1, 499);
drawline(canva, "black", 499, 1, 1, 1);
drawline(canva, "black", 499, 1, 499, 499);
drawline(canva, "black", 499, 499, 1, 499);

function mouseDown(){
    d=1;
}
function mouseUp(){
    d=0;
}
function mouseDrawing(event){
    var mouseCorrection = { CX:5, CY:82 };
    if(d==1){
        drawline(canva, color.value, x, y, event.layerX-mouseCorrection.CX, event.layerY-mouseCorrection.CY);
    }
    x=event.layerX-mouseCorrection.CX;   
    y=event.layerY-mouseCorrection.CY;
}
function drawline(background, color, xinicial, yinicial, xfinal, yfinal){
    background.beginPath();
    background.strokeStyle = color;
    background.lineWidth = 4;
    background.moveTo(xinicial, yinicial);
    background.lineTo(xfinal, yfinal);
    background.stroke();
    background.closePath();
}