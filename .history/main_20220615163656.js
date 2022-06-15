const toggle= document.querySelector(".header-menu-bars");
const headerMenu=document.querySelector(".header-toggle")
toggle.addEventListener("click",function(e){
    headerMenu.classList.toggle("is-toggle");
    // headerMenu.classList.toggle("is-toggle");
})
document.addEventListener("click",function(event){
    if(!event.target.matches(headerMenu)){
        headerMenu.classList.remove(".is.toggle")
    }
})
