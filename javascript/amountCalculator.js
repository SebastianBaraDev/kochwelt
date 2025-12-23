
function calculateIngredients() {

  // 1. Portionen aus dem Inputfeld holen
  let portions = document.getElementById("portions").value;

  // 2. Daten aller Mengen-Zellen holen
  let amountCells = document.getElementsByClassName("amount");

  // 3. Jede Mengeangabe durchgehen
  for (let i = 0; i < amountCells.length; i++) {

    // Grundmenge aus dem data-Attribut holen
    let baseAmount = amountCells[i].dataset.amount;

    // Neue Menge berechnen
    let newAmount = baseAmount * portions;

    // Ergebnis in die Tabelle schreiben
    amountCells[i].innerText = newAmount;
  }
}