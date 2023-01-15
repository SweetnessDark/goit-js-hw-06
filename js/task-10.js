function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", getBtn);

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const sizeBase = 30;

  for (let i = 0; i < amount; i++) {
    const element = sizeBase + i * 10;

    const div = document.createElement("div");

    div.style.cssText = `width: ${element}px;
    height: ${element}px;
    background-color: ${getRandomHexColor()};`
    
    boxes.appendChild(div);
  }

}

function getBtn() {
   const amount = +document.querySelector("input").value;
   createBoxes(amount);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
