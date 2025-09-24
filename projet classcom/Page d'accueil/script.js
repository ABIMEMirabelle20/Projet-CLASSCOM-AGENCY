const body = document.body
const btnMenu = document.querySelector(".btn-menu")
const MobileNav = document.querySelector(".mobile-nav")
const aboutTitle = document.querySelector(".about-title")

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('active')
    MobileNav.classList.toggle('active')
})

//Bouton retour
function goBack() {
    if(history.length > 1){
        history.back(); // revient a la page précédente
    } else{
        window.location.href ="index.html"; // si il n'y a pas d'historique l'utilisateur est redirigéré vers l'accueil
    }
}