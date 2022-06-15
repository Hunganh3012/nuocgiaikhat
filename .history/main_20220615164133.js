const toggle= document.querySelector(".header-menu-bars");
const headerMenu=document.querySelector(".header-toggle");
const isToggle=document.querySelector(".is-toggle")
toggle.addEventListener("click",function(e){
    headerMenu.classList.toggle("is-toggle");
    // headerMenu.classList.toggle("is-toggle");
})
document.addEventListener("click",function(event){

    if(!event.target.matches(".header-toogle")){
        headerMenu.classList.remove(isToggle);
    }
})
