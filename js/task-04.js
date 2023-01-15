let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

minusBtn.addEventListener("click", () => {
    counterValue = counterValue - 1;
    const valueElem = document.querySelector('#value');
    valueElem.textContent = counterValue;
});

plusBtn.addEventListener("click", () => {
    counterValue += 1;
    const valueElem = document.querySelector('#value');
    valueElem.textContent = counterValue;
});
