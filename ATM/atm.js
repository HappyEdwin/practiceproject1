class paperMoney{
    constructor(value, amount){
        this.value = value;
        this.amount = amount;
    }
}

function withdrawMoney(){

    var deliveredPaperMoney, div, deliveredCash = [];
    var requestedMoney = document.getElementById("money").valueAsNumber;    //or parseInt(document.getElementById("money").value);
    console.log(requestedMoney);

    if(requestedMoney<=totalMoney && (requestedMoney%10==0)){
        for (var i of cash){
            if(requestedMoney>0){
                div = Math.floor(requestedMoney/i.value);
                if(div > i.amount){
                    deliveredPaperMoney = i.amount;
                    i.amount -= deliveredPaperMoney;
                }
                else{
                    deliveredPaperMoney = div;
                    i.amount -= deliveredPaperMoney;
                }
                deliveredCash.push(new paperMoney(i.value, deliveredPaperMoney));
                requestedMoney -= i.value*deliveredPaperMoney;
                totalMoney -= requestedMoney;
            }
        }
        for (var j of deliveredCash){
            if(j.amount>0){
            document.getElementById("results").innerHTML +=  "Te he entregado " + j.amount + " billetes de $" + j.value + "<br/>";
            }
        }
        document.getElementById("results").innerHTML += "<br/>";
    }
    else{
        alert("Lo sentimos, no nos queda más dinero :( \nO haz introducido una cifra incorrecta.");
    }
    console.log(deliveredCash);
}

var cash = [];
cash.push(new paperMoney(50,10));
cash.push(new paperMoney(20,20));
cash.push(new paperMoney(10,20));
var totalMoney = (cash[0].value*cash[0].amount)+(cash[1].value*cash[1].amount)+(cash[2].value*cash[2].amount);

document.getElementById("withdrawButton").addEventListener("click", withdrawMoney);

