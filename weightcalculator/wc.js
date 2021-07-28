var g_earth = 9.8, g_mars = 3.7, g_jupiter = 24.8;
var weight, final_weigh, planet, w_planet;

weight = parseFloat(prompt("What is your weight?"));
planet = prompt("What planet do you select? between mars and jupiter.");

if(planet=="mars"){
    final_weigh = (weight*g_mars)/g_earth;
    w_planet = "mars";
}
else if(planet=="jupiter"){
    final_weigh = (weight*g_jupiter)/g_earth;
    w_planet = "jupiter";
}
else{
    final_weigh = 1000000000000000000;
    w_planet = "Krypton";
}
document.write("Your weight in " + w_planet + " are:<strong> " + final_weigh.toFixed(2) + " Kg</strong>");

