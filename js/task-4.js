const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
     event.preventDefault();
    const form = event.target;
    let email = form.elements.email.value;
    let password = form.elements.password.value;

    if (email === "" || password === "") {
       return alert('All form fields must be filled in');
    }
           
    console.log(`Email: ${email.trim()}, Password: ${password.trim()}`);
  form.reset();
}


