const hamburger = document.querySelector(".hamburger");
const actionItems = document.querySelector(".action-items");
const registerBtn = document.querySelector(".rgs");
const loginBtn = document.querySelector(".lgn");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const closeRgs = document.querySelector(".close-rgs");
const closeLgn = document.querySelector(".close-lgn");

// Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  actionItems.classList.toggle("active");
});

// clicking on registration and loggin buttons show forms

registerBtn.addEventListener("click", () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});


// Disappear forms when the close button is pressed
closeRgs.addEventListener("click", () => {
  registerForm.style.display = "none";
});

closeLgn.addEventListener("click", () => {
  loginForm.style.display = "none";
});