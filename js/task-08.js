const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);
function formSubmit(event) {
  event.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const formData = {
    email,
    password,
  };
  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
    return;
  }
  console.log(formData);

  form.reset();
}
