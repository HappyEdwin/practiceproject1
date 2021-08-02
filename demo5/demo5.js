/* for(var i=1; i<=100; i++){
    if(i%3==0){
        document.write("Fizz");
    }
    if(i%5==0){
        document.write("Buzz");
    }
    if(i%5!=0 && i%3!=0){
        document.write(i);
    }
    document.write("<br/>");
} 
*//*
var conditional;
for(var i=1; i<=100; i++){
    conditional=false;
    if(i%3==0){
        document.write("Fizz");
        conditional=true;
    }
    if(i%5==0){
        document.write("Buzz");
        conditional=true;
    }
    if(!conditional){
        document.write(i);
    }
    document.write("<br/>");
}*/

var conditional;
for(var i=1; i<=100; i++){
    conditional=false;
    if(divisible(i,3)){
        document.write("Fizz");
    }
    if(divisible(i,5)){
        document.write("Buzz");
    }
    if(!divisible(i,3) && !divisible(i,5)){
        document.write(i);
    }
    document.write("<br/>");
}
function divisible(number, div){
    if(number%div==0){
        return true;
    }
    else{
        return false;
    }
}