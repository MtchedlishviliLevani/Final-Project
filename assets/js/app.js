const hamburger = document.querySelector(".hamburger");
const actionItems = document.querySelector(".action-items");
const registerBtn = document.querySelector(".rgs");
const loginBtn = document.querySelector(".lgn");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const closeRgs = document.querySelector(".close-rgs");
const closeLgn = document.querySelector(".close-lgn");
const links = document.querySelectorAll(".link");
const modal = document.querySelector(".registration-login-forms");


// Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  actionItems.classList.toggle("active");
});

links.forEach(n =>n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    actionItems.classList.remove("active");
  })
);


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



// hidden login and registration box when i click anywhere


loginBtn.addEventListener("click", () =>{
  modal.classList.add("activedd");
})

registerBtn.addEventListener("click", () =>{
  modal.classList.add("activedd");
})


window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("activedd")
  }
};