const rezeptList = [
  "125ml Gemüsebrühe",
  "50g rote Linen",
  "50g Möhren",
  "100g Kokosmilch",
  "5g Ingwer",
  "2g Kurkuma"
]


function calculate() {
  const newRezeptList = []
  let result
  let table = document.getElementById('table')
  table.innerHTML = ""
  for (let i = 0; i < rezeptList.length; i++) {
    //calculate int in string
    let number = parseInt(rezeptList[i])
    result = number * document.getElementById('number').value
    //remove int from string
    let text = rezeptList[i].replace(/[0-9]/g, "")
    //and creat a new rezeptlist
    newRezeptList.push(`${result}${text}`)
    //push in HTML
    table.innerHTML += `<tr><td>${newRezeptList[i]}</td></tr>`
  }
  document.querySelector('#tr:nth-child').style.color = ' #eeeeee'
  console.log(newRezeptList)
}

