const hamburger = document.querySelector(".hamburger");
const actionItems = document.querySelector(".action-items");

  // Hamburger
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   actionItems.classList.toggle("active");
});







 