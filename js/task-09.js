function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundBody = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  backgroundBody.style.backgroundColor = randomColor;
  spanColor.style = randomColor;
});
