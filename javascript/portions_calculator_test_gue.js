
/*Basiswerte*/

let rosinen = 30;
let rum = 4;
let ei = 1;
let zucker = 50;
let apfelmus = 3;
let schlagobers = 200;
let zartbitterschokolade = 50;
let backkakao = 20;


/*Objekt

let my_recipe_object ={
    rosinen : 30,
    rum : 4,
    ei : 1,
    zucker : 50,
    apfelmus : 3,
    schlagobers : 200,
    zartbitterschokolade : 50,
    backkakao : 20,
}*/


/*Funktionen*/

function calcrecipe(){
    calc()
    value()
}

/*Kalkulation*/

function calc(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount = (rosinen/4*portions) + "g";
    console.log(amount)
    return amount;
}


/*Ausgabe des Wertes in HTML*/
function value(){
let amount = document.getElementById("rosinen");
amount.innerHTML = calc();
console.log(amount.innerHTML);
return amount
}