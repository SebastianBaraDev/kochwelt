//dieser Rechner ist von Julian Hergert selbst geschrieben. Ich habe hier nichts gecopy/pasted. :D
//ich habe vor Jahren schon einige Javascriptübungen genmacht.
const rezeptList = [
  "125ml Gemüsebrühe",
  "50g rote Linen",
  "50g Möhren",
  "100g Kokosmilch",
  "1 kleine Zwiebel",
  "1 kleine Knoblauchzehe",
  "5g Ingwer, frisch",
  "2g Kurkuma, frisch",
  "1 TL Öl",
  "1 viertel TL Kreuzkümmel, gemahlen",
  "1 viertel Chili",
  "1 halben TL Limettensaft zum Abschmecken",
  "1 viertel Bunt Petersilie",
  "1 priese Salz",
  "1 getrocknete Abrikosen, Geheimzutat von meinem Vater"
]

function calculate() {
  let valueFromInput = document.getElementById('number').value
  // Validierung: nur Zahlen von 1–20
  if (isNaN(valueFromInput) || valueFromInput < 1) valueFromInput = 1;
  if (valueFromInput > 20) valueFromInput = 20;
  // 
  const newRezeptList = []
  let result
  let table = document.getElementById('table')
  table.innerHTML = ""
  for (let i = 0; i < rezeptList.length; i++) {
    //calculate int in string
    let number = parseInt(rezeptList[i])
    result = number * valueFromInput
    //remove int from string
    let text = rezeptList[i].replace(/[0-9]/g, "")
    //and creat a new rezeptlist
    newRezeptList.push(`${result}${text}`)
    //push in HTML
    table.innerHTML += `<tr><td>${newRezeptList[i]}</td></tr>`
  }
  console.log(newRezeptList)
}