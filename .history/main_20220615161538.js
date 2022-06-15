const toggle= document.querySelector(".header-menu-bars");

const headerMenu=document.querySelector(".header-toggle")
togglee.addEventListener("click",function(e){
    console.log(headerMenu);
    headerMenu.classList.add("is-toggle");
})