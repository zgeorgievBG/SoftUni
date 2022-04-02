function validate() {
  let emailInput = document.getElementById("email");
  let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

  emailInput.addEventListener("change", onChange);

  function onChange(ev) {
    let isValid = pattern.test(emailInput.value);
    if (!isValid) {
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
    }
  }
}
