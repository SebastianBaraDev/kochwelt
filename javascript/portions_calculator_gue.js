
/*Basiswerte für 4 Portionen*/

let rosinen = 30;
let rum = 4;
let ei = 1;
let zucker = 50;
let apfelmus = 3;
let schlagobers = 200;
let zartbitterschokolade = 50;
let backkakao = 20;


/*Funktionen*/

function calcrecipe(){
    calc_ingred_1()
    value_ingred_1()
    calc_ingred_2()
    value_ingred_2()
    calc_ingred_3()
    value_ingred_3()
    calc_ingred_4()
    value_ingred_4()
     calc_ingred_5()
    value_ingred_5()
    calc_ingred_6()
    value_ingred_6()
    calc_ingred_7()
    value_ingred_7()
    calc_ingred_8()
    value_ingred_8()
}

//Fehlermeldung - gültige Zahl und zwischen 1 und 20

function checkvalue() {
    const inputElement = document.getElementById('portions');
    const wert = parseInt(inputElement.value);
    const errormessageElement = document.getElementById('errormessage');

    // Prüfen, ob es eine gültige Zahl ist und im Bereich liegt (1 bis 20)
    if (isNaN(wert) || wert < 1 || wert > 20) {
        errormessageElement.textContent = 'Fehler: Bitte nur Zahlen zwischen 1 und 20 eingeben!';
    } else {
        calcrecipe();
        errormessageElement.textContent = '';
    }
}


/*-->Ingredient 1*/

/*Kalkulation*/

function calc_ingred_1(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_1 = (rosinen/4*Math.round(portions)) + "g" + " " + "Rosinen";
    console.log(amount_1)
    return amount_1;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_1(){
let amount_1 = document.getElementById("ingred_1");
amount_1.innerHTML = calc_ingred_1();
console.log(amount_1.innerHTML);
return amount_1
}

/*-->Ingredient 2*/

function calc_ingred_2(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_2 = (rum/4*Math.round(portions)) + "cl" + " " + "Rum";
    console.log(amount_2)
    return amount_2;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_2(){
let amount_2 = document.getElementById("ingred_2");
amount_2.innerHTML = calc_ingred_2();
console.log(amount_2.innerHTML);
return amount_2
}

/*-->Ingredient 3*/

function calc_ingred_3(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_3 = (ei/4*Math.round(portions)) + " " + "Ei (mittelgroß)";
    console.log(amount_3)
    return amount_3;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_3(){
let amount_3 = document.getElementById("ingred_3");
amount_3.innerHTML = calc_ingred_3();
console.log(amount_3.innerHTML);
return amount_3
}

/*-->Ingredient 4*/

function calc_ingred_4(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_4 = (zucker/4*Math.round(portions)) + "g" + " " + "Zucker";
    console.log(amount_4)
    return amount_4;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_4(){
let amount_4 = document.getElementById("ingred_4");
amount_4.innerHTML = calc_ingred_4();
console.log(amount_4.innerHTML);
return amount_4
}

/*-->Ingredient 5*/

function calc_ingred_5(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_5 = (apfelmus/4*Math.round(portions)) + "EL" + " " + "Apfelmus";
    console.log(amount_5)
    return amount_5;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_5(){
let amount_5 = document.getElementById("ingred_5");
amount_5.innerHTML = calc_ingred_5();
console.log(amount_5.innerHTML);
return amount_5
}

/*-->Ingredient 6*/

function calc_ingred_6(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_6 = (schlagobers/4*Math.round(portions)) + "g" + " " + "Schlagobers";
    console.log(amount_6)
    return amount_6;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_6(){
let amount_6 = document.getElementById("ingred_6");
amount_6.innerHTML = calc_ingred_6();
console.log(amount_6.innerHTML);
return amount_6
}

/*-->Ingredient 7*/

function calc_ingred_7(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_7 = (zartbitterschokolade/4*Math.round(portions)) + "g" + " " + "Zartbitterschokolade geschmolzen";
    console.log(amount_7)
    return amount_7;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_7(){
let amount_7 = document.getElementById("ingred_7");
amount_7.innerHTML = calc_ingred_7();
console.log(amount_7.innerHTML);
return amount_7
}

/*-->Ingredient 8*/

function calc_ingred_8(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_8 = (backkakao/4*Math.round(portions)) + "g" + " " + "Backkakao (ungesüsst)";
    console.log(amount_8)
    return amount_8;
}


/*Ausgabe des Wertes in HTML*/
function value_ingred_8(){
let amount_8 = document.getElementById("ingred_8");
amount_8.innerHTML = calc_ingred_8();
console.log(amount_8.innerHTML);
return amount_8
}