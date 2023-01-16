const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if(email.value === "" || password.value === "") {
       return alert("Все поля должны быть заполнены");
    } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
    }
});
