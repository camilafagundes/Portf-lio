/* Abre fecha menu lateral dem modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("mobile-nav-active");
});

/* Fecha o menu quando clicar em algum item e muda o ícone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach (item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})