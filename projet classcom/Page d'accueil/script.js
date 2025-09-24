// const body = document.body

const btnMenu = document.querySelector(".btn-menu")
const MobileNav = document.querySelector(".mobile-nav")


btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('active')
    MobileNav.classList.toggle('active')
})

// noivelle fonctionnalité : section-cards
const cards = document.querySelectorAll(".service-cards > .card")

function cardActive(){
    cards.forEach((items) =>{
    items.classList.remove("active")
    this.classList.add("active")
    })
}

cards.forEach((items) =>{
    items.addEventListener('click', cardActive)
})

//Bouton retour
function goBack() {
    if(history.length > 1){
        history.back(); // revient a la page précédente
    } else{
        window.location.href ="index.html"; // si il n'y a pas d'historique l'utilisateur est redirigéré vers l'accueil
    }
}