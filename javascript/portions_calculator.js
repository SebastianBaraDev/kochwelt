
let portions = 8;
let rosinen = 30;
let rum = 4;
let ei = 1;
let zucker = 50;
let apfelmus = 3;
let schlagobers = 200;
let zartbitterschokolade = 50;
let backkakao = 20;



function calculator (){
return (rosinen/4*portions) + "g";
}
let amount = document.getElementById("rosinen");
console.log(amount.innerHTML);
amount.innerHTML = calculator();


/*
console.log(rosinen / 4 * portions); 
console.log(rum / 4 * portions)
console.log(ei / 4 * portions)
console.log(zucker / 4 * portions)
console.log(apfelmus / 4 * portions)
console.log(schlagobers / 4 * portions)
console.log(zartbitterschokolade / 4 * portions)
console.log(backkakao  / 4 * portions)
*/