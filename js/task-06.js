const validInput = document.getElementById('validation-input');

validInput.addEventListener("blur", (event) => {
    
    if (event.currentTarget.value.length == validInput.dataset.length) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
    } else {
        validInput.classList.add("invalid");
        validInput.classList.remove("valid");
    }
});
