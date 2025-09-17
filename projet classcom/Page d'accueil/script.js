// const body = document.body

const btnMenu = document.querySelector(".btn-menu")
const MobileNav = document.querySelector(".mobile-nav")


btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('active')
    MobileNav.classList.toggle('active')
})