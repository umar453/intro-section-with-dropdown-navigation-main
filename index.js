
// function its is called when user clicks on dropdown div.
function myfunction() {
  document.getElementById("feature_dropdown").classList.toggle("show");
  const toggle = document.querySelector('.items');
  const updown = toggle.getAttribute('data-click');
  if (updown === "false") {
    toggle.setAttribute('data-click', "true");
  } else if (updown === "true") {
    toggle.setAttribute('data-click', "false");
  }

}
// function its is called when user clicks on dropdown div.
function myfunction_c() {
  document.getElementById("comp_dropdown").classList.toggle("on");
  const toggle = document.querySelector('.kampany');
  const updown = toggle.getAttribute('data-comp');
  if (updown === "false") {
    toggle.setAttribute('data-comp', "true");
  } else if (updown === "true") {
    toggle.setAttribute('data-comp', "false");
  }
}
// declaring varaibles for mobile version
const primaryNav = document.querySelector(".nav-items");
const navToggle = document.getElementById("hamburger");
// function that is callled when user clicks on hamburger icon 
navToggle.addEventListener("click", () => {
  const visiblitly = primaryNav.getAttribute('data-visible');
  if (visiblitly === "false") {
    primaryNav.setAttribute('data-visible', "true");
    navToggle.setAttribute('aria-expanded', "true");

  } else if (visiblitly === "true") {
    primaryNav.setAttribute('data-visible', "false");
    navToggle.setAttribute('aria-expanded', "false");
  }

})