const toggle= document.querySelector(".header-menu-bars");
const headerMenu=document.querySelector(".header-toggle")
toggle.addEventListener("click",function(e){
    headerMenu.classList.toggle("is-toggle");
    // headerMenu.classList.toggle("is-toggle");
})
document.addEventListener("click",function(event){
    console.log(event.target)
    if(!event.target.matches(".header-toogle")){
        headerMenu.classList.remove(".is-toggle")
    }
})
