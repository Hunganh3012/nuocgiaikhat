const toggle= document.querySelector(".header-menu-bars");
console.log(toggle)
const headerMenu=document.querySelector(".header-toggle")
toggle.addEventListener("click",function(e){
    
    headerMenu.classList.add('is-toggle');
})