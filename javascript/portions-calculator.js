let basePortions = 1;

let recipe = document.getElementById("recipe");
let ingredientElements = [];
let allElements = document.getElementsByTagName("*");

for (let i = 0; i < allElements.length; i++) {
  let id = allElements[i].id;

  if (id && id.indexOf("ingred_") === 0) {
    ingredientElements.push(allElements[i]);
  }
}

let originalIngredients = [];

for (let i = 0; i < ingredientElements.length; i++) {
  originalIngredients.push(ingredientElements[i].innerText);
}





function calcrecipe() {

  let input = document.getElementById("portions");
  let portions = Number(input.value);

  if (portions < 1) portions = 1;
  if (portions > 20) portions = 20;

  input.value = portions;

  for (let i = 0; i < ingredientElements.length; i++) {

    let text = originalIngredients[i];

    let parts = text.split(" ");

    let number = Number(parts[0]);

   if (isNaN(number)) {
      ingredientElements[i].innerText = text;
    continue;
    }

  let restText = "";
    for (let j = 1; j < parts.length; j++) {
      restText += parts[j] + " ";
    }

    let newValue = (number / basePortions) * portions;

    if (newValue % 1 !== 0) {
      newValue = newValue.toFixed(2);
    }

    ingredientElements[i].innerText = newValue + " " + restText.trim();
  }
}

