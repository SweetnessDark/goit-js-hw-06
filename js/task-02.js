const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const liElem = document.createElement("li");

  liElem.textContent = ingredient;
  
  liElem.classList.add("item");

  ulElem.appendChild(liElem);
}

console.log(ulElem);
