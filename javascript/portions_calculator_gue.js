
/*Basiswerte für 4 Portionen*/

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
    rosinencalc : function calc1(){
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount1 = (rosinen/4*portions) + "g";
    console.log(amount1)
    return amount1;
}
    rumcalc : function calc2(){
        const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount2 = (rosinen/4*portions) + "g";
    console.log(amount2)
    return amount2;
}    
    eicalc : 1,
    zuckercalc : 50,
    apfelmuscalc : 3,
    schlagoberscalc : 200,
    zartbitterschokoladecalc : 50,
    backkakaocalc : 20,
}*/

/*Handover to html

function value1(){
let amount1 = document.getElementById("rosinen");
amount1.innerHTML = calc();
console.log(amount1.innerHTML);
return amount1
}*/


/*Funktionen*/

function calcrecipe(){
    if (document.getElementById("portions").value > 20) {
        return "invalid"
    }
    else if(document.getElementById("portions").value < 1){
        return "invalid"
    }
    else {
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
}}




/*-->Ingredient 1*/

/*Kalkulation*/

function calc_ingred_1(){
    console.log("Button gedrückt")
    const portions = document.getElementById("portions").value;
    console.log(portions)
    let amount_1 = (rosinen/4*portions) + "g" + " " + "Rosinen";
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
    let amount_2 = (rum/4*portions) + "cl" + " " + "Rum";
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
    let amount_3 = (ei/4*portions + " " + "Ei (mittelgroß)");
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
    let amount_4 = (zucker/4*portions) + "g" + " " + "Zucker";
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
    let amount_5 = (apfelmus/4*portions) + "EL" + " " + "Apfelmus";
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
    let amount_6 = (schlagobers/4*portions) + "g" + " " + "Schlagobers";
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
    let amount_7 = (zartbitterschokolade/4*portions) + "g" + " " + "Zartbitterschokolade geschmolzen";
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
    let amount_8 = (backkakao/4*portions) + "g" + " " + "Backkakao (ungesüsst)";
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