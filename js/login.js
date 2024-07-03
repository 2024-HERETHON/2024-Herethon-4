let form = document.querySelector("#loginForm");
let emailInput = document.querySelector("#userEmail");
let passwordInput = document.querySelector("#userPassword");
const submitBtn = document.querySelector(".submit-btn");

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;

let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

function validateEmail() {
  let email = emailInput.value;
  if (!emailRegEx.test(email)) {
    emailError.classList.add("show");
    emailInput.style.color = "#ff4a4a";
    emailInput.style.border = "0.5px solid #ff4a4a";
  } else {
    emailError.classList.remove("show");
    emailInput.style.color = "";
    emailInput.style.border = "";
  }
  changeBtnColor();
}

function validatePassword() {
  let password = passwordInput.value;
  if (!passwordRegEx.test(password)) {
    passwordError.classList.add("show");
    passwordInput.style.color = "#ff4a4a";
    passwordInput.style.border = "0.5px solid #ff4a4a";
  } else {
    passwordError.classList.remove("show");
    passwordInput.style.color = "";
    passwordInput.style.border = "";
  }
  changeBtnColor();
}

function changeBtnColor() {
  let email = emailInput.value;
  let password = passwordInput.value;
  if (emailRegEx.test(email) && passwordRegEx.test(password)) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "#f9e882";
    submitBtn.style.transition = "ease-in-out 300ms";
    submitBtn.style.color = "#2f2f32";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "";
    submitBtn.style.color = "";
  }
}

function checkValid(event) {
  event.preventDefault();

  let email = emailInput.value;
  let password = passwordInput.value;

  let isValid = true;

  if (!emailRegEx.test(email)) {
    emailError.classList.add("show");
    emailInput.style.color = "#ff4a4a";
    emailInput.style.border = "0.5px solid #ff4a4a";
    isValid = false;
  } else {
    emailError.classList.remove("show");
    emailInput.style.color = "";
    emailInput.style.border = "";
  }

  if (!passwordRegEx.test(password)) {
    passwordError.classList.add("show");
    passwordInput.style.color = "#ff4a4a";
    passwordInput.style.border = "0.5px solid #ff4a4a";
    isValid = false;
  } else {
    passwordError.classList.remove("show");
    passwordInput.style.color = "";
    passwordInput.style.border = "";
  }

  if (isValid) {
    console.log("Form submitted");
  }
}

emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
form.addEventListener("submit", checkValid);
