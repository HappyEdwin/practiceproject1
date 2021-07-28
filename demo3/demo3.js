
var nLines = document.getElementById("txtLines");
var buttom = document.getElementById("btn");

buttom.addEventListener("click",drawByClick);

var d = document.getElementById("draw");
var background = d.getContext("2d");

//------------------ Functions separator line --------------------//

function drawline(color, xinicial, yinicial, xfinal, yfinal){
    background.beginPath();
    background.strokeStyle = color;
    background.moveTo(xinicial, yinicial);
    background.lineTo(xfinal, yfinal);
    background.stroke();
    background.closePath();
}
function drawByClick(){
    var nL = parseInt(nLines.value);
    var xi, yf;
    var width=d.width/nL;
    for(l=0; l<=nL; l++){
        xi=(width*l)+1; yf=(width*(l+1))-1; // +1 y -1 for not lose the exterior lines by antialliasing.
        drawline("Red", 1, yf, xi, (d.width-1));
    }
}