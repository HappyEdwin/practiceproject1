var background = document.getElementById("background").getContext("2d");

var map = { url:"tile.png" , charge: false, image:"" };

map.image = new Image();
map.image.src = map.url;
map.image.addEventListener("load", backgroundCharge);

var pig = { url:"cerdo.png", charge: false, image:"" };
pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", pigCharge);

var cow = { url:"vaca.png", charge: false, image:"" };
cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", cowCharge);

var ckn = { url:"pollo.png", charge: false, image:"" };
ckn.image = new Image();
ckn.image.src = ckn.url;
ckn.image.addEventListener("load", cknCharge);

var wolf = { url: "lobo.png", charge: false, image:"" };
wolf.image = new Image();
wolf.image.src = wolf.url;
wolf.image.addEventListener("load", wolfCharge);

var arrowKey = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
document.addEventListener("keydown", wolfMovement);

var x = {
    pig: randomNumber(0,420),
    cow: randomNumber(0,420),
    ckn: randomNumber(0,420),
    wolf: randomNumber(0,420)
};
var y = {
    pig: randomNumber(0,420),
    cow: randomNumber(0,420),
    ckn: randomNumber(0,420),
    wolf: randomNumber(0,420)
};

//------------------ Function separator Line -------------------//

function wolfMovement(event){
    var movePixels = 5;
    switch(event.keyCode){
        case arrowKey.UP:
            y.wolf-=movePixels;
        break;
        case arrowKey.DOWN:
            y.wolf+=movePixels;
        break;
        case arrowKey.LEFT:
            x.wolf-=movePixels;
        break;
        case arrowKey.RIGHT:
            x.wolf+=movePixels;
        break;
    }
    wolfCharge();
}

function backgroundCharge(){
    map.charge = true;
    draw();
}
function pigCharge(){
    pig.charge = true;
    draw();
}
function cowCharge(){
    cow.charge = true;
    draw();
}
function cknCharge(){
    ckn.charge = true;
    draw();
}
function wolfCharge(){
    wolf.charge = true;
    draw();
}

function draw(){
    var i;
    if(map.charge){
        background.drawImage(map.image, 0, 0);
    }
    if(pig.charge){
        var pigNumber = randomNumber(1,3);  // No funciona el bucle por que se superponen las imagenes.
        for(i=0; i<pigNumber; i++){
            background.drawImage(pig.image, x.pig, y.pig);
        }
    }
    if(cow.charge){
        var cowNumber = randomNumber(1,3);  // No funciona el bucle por que se superponen las imagenes.
        for(i=0; i<cowNumber; i++){
            background.drawImage(cow.image, x.cow, y.cow);
        }
    }
    if(ckn.charge){
        var cknNumber = randomNumber(1,3);  // No funciona el bucle por que se superponen las imagenes.
        for(i=0; i<cknNumber; i++){
            background.drawImage(ckn.image, x.ckn, y.ckn);
        }
    }
    if(wolf.charge){
        background.drawImage(wolf.image, x.wolf, y.wolf);
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}