const toggle= document.querySelector(".header-menu-bars");
// console.log(toggle)
const headerMenu=document.querySelector(".header-toggle")
toggle.addEventListener("click",function(e){
    // console.log(headerMenu);
    headerMenu.classList.toggle("is-toggle");
    headerMenu.classList.toggle(expandClass)
})
