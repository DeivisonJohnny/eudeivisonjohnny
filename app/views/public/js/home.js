const menuBtn = document.querySelector('#menuBtn')
const closeMenu = document.querySelector('#menuClose')
const menu = document.querySelector('.menu')

function showMenu() {
    if (menu.classList.length > 1) {
        menu.classList.remove('menuShow')
    } else {
        menu.classList.add('menuShow')
    }
}

menuBtn.addEventListener('click', showMenu)
closeMenu.addEventListener('click', showMenu)


// ANIMAÇÃO ELEMENTOS 

const secMain = document.querySelector('#secMain')

function showElemMain(entries) {

    const divPhoto = document.querySelector('.imgHidden')
    const textAnima = document.querySelectorAll('.animaHidden')

    if (entries[0].isIntersecting == true) {
        divPhoto.classList.add('showAnima')
        textAnima[0].classList.add('showAnima')
        textAnima[1].classList.add('showAnima')
        textAnima[2].classList.add('showAnima')
    }

}


const observador = new IntersectionObserver(showElemMain)

observador.observe(secMain)