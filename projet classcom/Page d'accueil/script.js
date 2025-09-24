const body = document.body
const btnMenu = document.querySelector(".btn-menu")
const MobileNav = document.querySelector(".mobile-nav")
const aboutTitle = document.querySelector(".about-title")

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('active')
    MobileNav.classList.toggle('active')
})

aboutTitle.style.opacity = 0
// window.addEventListener('scroll', ()=>{
    
//     if(window.innerHeight + window.screenY >= document.body.offsetHeight){
//         console.log("SCROLL BODY");
//     }else{
//         aboutTitle.style.opacity = 1
//         console.log("BODY SCROLL");
        
//     }


//     // if(window.scrollY > 650){
//     //     aboutTitle.style.opacity = 1
//     //     console.log("SCROLL");
    
//     // }

// })
window.addEventListener('scroll', ()=>{
    if(aboutTitle.scrollIntoView){
        aboutTitle.style.opacity = 1
        aboutTitle.style.transition = "all " + .5+ "s "+ .3 + "s" +" ease-in"
    }else if(!aboutTitle.scrollIntoView){
        aboutTitle.style.opacity = 0
    }
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