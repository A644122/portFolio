const MenuIcon = document.querySelector("#menu-icon");
const ul = document.querySelector("nav ul");
// const nav = document.querySelector("nav");
const NavLink = document.querySelectorAll('.nav-link');


MenuIcon.addEventListener('click',()=>{
    console.log("first")
    ul.classList.toggle('show');

})

NavLink.forEach((link)=>{
    console.log(link)
    link.addEventListener('click',()=>{
        ul.classList.remove('show');
    })
});

