const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector("#ingredients");

 function vegetables() {
  return ingredients.map(ingredient => {
    const liElem = document.createElement("li");
  
    liElem.textContent = ingredient;
    
    liElem.classList.add("item");

    return liElem;
  });
}
  
const listElem = vegetables();

ulElem.append(...listElem);

console.log(ulElem);
