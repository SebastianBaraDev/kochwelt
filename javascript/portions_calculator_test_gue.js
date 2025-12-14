
/*Basiswerte*/

let rosinen = 30;
let rum = 4;
let ei = 1;
let zucker = 50;
let apfelmus = 3;
let schlagobers = 200;
let zartbitterschokolade = 50;
let backkakao = 20;


/*Funktion*/

function calcrecipe(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount = (rosinen/4*portions) + "g";
    console.log(amount)
    return amount;
}


/*Ausgabe des Wertes in HTML*/

let amount = document.getElementById("rosinen");
amount.innerHTML = calcrecipe();
console.log(amount.innerHTML);