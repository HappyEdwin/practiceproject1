var images = [];
images["Cowgod"] = "vaca.png";
images["Piggod"] = "cerdo.png";
images["Ckngod"] = "pollo.png";

class pakiman{
    constructor(name, hp, attack){
        this.image = new Image();
        this.name = name;
        this.hp = hp;
        this.attack = attack
        this.image.src = images[this.name];
    }
    speak(){
        alert(this.nombre);
    }
    show(){
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong><br/>");
        document.write("hp: " + this.hp + "<br/>");
        document.write("attack: " + this.attack + "<br/>");
        document.write("<hr/></p>");
    }
}

var pakimanList = [];
pakimanList.push(new pakiman("Cowgod", 100,30));
pakimanList.push(new pakiman("Piggod", 120 ,40));
pakimanList.push(new pakiman("Ckngod", 80, 50));

for(var i of pakimanList){
    i.show();
}