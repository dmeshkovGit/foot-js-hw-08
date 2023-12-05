
const loginForm = document.querySelector(".login-form")
const formInputs = document.querySelectorAll(".login-form input")
const submitButton = document.querySelector(".login-form button")

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value
    const passworld = form.elements.password.value
if (email === "" || passworld === "") {
    alert('All form fields must be filled in')
} else {
    const userData = {
        email: `${email.trim()}`,
        passworld: `${passworld.trim()}`
    }
    console.log(userData);
    form.reset(); 
}
})












