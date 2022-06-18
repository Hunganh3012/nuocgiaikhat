// -------------------------HEADER MENU BARS------------------------
const toggle= document.querySelector(".header-menu-bars");
const headerMenu=document.querySelector(".header-toggle");
const isToggle=document.querySelector(".is-toggle")
toggle.addEventListener("click",function(e){
    headerMenu.classList.toggle("is-toggle");
    // headerMenu.classList.toggle("is-toggle");
})
// document.addEventListener("click",function(event){
//     if(!headerMenu.contains(event.target) && !event.target.matches(".header-toogle")){
//         headerMenu.classList.remove(isToggle);
//     }
// })

// ---------------------------SCROLL ANIMATION------------------------
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
//   ---------------------------SLIDER BEER-----------