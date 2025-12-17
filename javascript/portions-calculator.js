const basePortions = 1;

// Alle Zutaten-Zeilen sammeln
const ingredientElements = document.querySelectorAll(
  '[id^="ingred_"]'
);

const originalIngredients = Array.from(ingredientElements).map(el => el.innerText);

function calcrecipe() {
  const input = document.getElementById("portions");
  let portions = parseInt(input.value);

  // Validierung: nur Zahlen von 1–20
  if (isNaN(portions) || portions < 1) portions = 1;
  if (portions > 20) portions = 20;

  input.value = portions;

  ingredientElements.forEach((el, index) => {
    const originalText = originalIngredients[index];

    const match = originalText.match(/^([\d.,]+)\s*(.*)$/);

    if (!match) {
      el.innerText = originalText;
      return;
    }

    let amount = parseFloat(match[1].replace(",", "."));
    let restText = match[2];

    let newAmount = (amount / basePortions) * portions;

    newAmount = Number.isInteger(newAmount)
      ? newAmount
      : newAmount.toFixed(2);

    el.innerText = `${newAmount} ${restText}`;
  });
}
