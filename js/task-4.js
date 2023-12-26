const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    objInput = {};
   event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
       return alert('All form fields must be filled in');
    }
      
    objInput = {
        email: 
    };

    console.log(objInput);
  form.reset();
}

