const toggle= document.querySelector(".header-menu-bars");
// console.log(toggle)
const headerMenu=document.querySelector(".header-toggle")
toggle.addEventListener("click",function(e){
    // console.log(headerMenu);
    headerMenu.classList.add("is-toggle");
})
document.addEventListener('click',function(event){
    if(!headerMenu.contains(event.target) && !event.target.matches(".header-toggle")){
        headerMenu.classList.remove("is-toggle")
    }
})