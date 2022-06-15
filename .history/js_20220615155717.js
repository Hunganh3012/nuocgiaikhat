const toggle= document.querySelector(".header-menu-bars")
const headerMenu=document.querySelector(".headertoggle")
toggle.addEventListener("click",function(e){
    headerMenu.classList.add("is-toggle")
})