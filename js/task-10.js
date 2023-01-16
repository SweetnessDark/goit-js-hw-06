function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  if(!input.value) {
    return;
  }

  const inputBtn = createBoxes(input.value)

  boxDestroy(inputBtn);
});

destroyBtn.addEventListener("click", () => {
  boxDestroy('');
});

const createBoxes = function (amount) {
  const sizeBase = 30;

  const arrElem = [];

  for (let i = 0; i < amount; i++) {
    const element = sizeBase + i * 10;

    const div = `<div class = "color-boxes" style = "width: ${element}px;
    height: ${element}px;
    background-color: ${getRandomHexColor()};"></div>`
    
    arrElem.push(div);
  }

  return arrElem.join('');

}

const boxDestroy = function (element) {
  boxes.innerHTML = element;
}
