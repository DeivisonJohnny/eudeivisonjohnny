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

function activeObserve(func, elem){
    const observador = new IntersectionObserver(func)
    
    observador.observe(elem)
}

activeObserve(showElemMain, secMain)


// ANIMAÇÃO ELEMENTOS 2 SESSÃO

const sectwo = document.querySelector('#secTwo')

function showElemTwo(entries) {

    console.log(entries[0])

    if(entries[0].isIntersecting) {
        const title1 = document.querySelectorAll('.title1')
        const title2 = document.querySelectorAll('.title2')
        title1.forEach((title, ind) => {
            title.classList.add('showTitle')
            title2[ind].classList.add('showTitle')
        });

        const lineForm = document.querySelectorAll('.lineForm')

        lineForm.forEach((line, ind) => {
            line.classList.add('showLineForm')
            
        });

        const liSkill = document.querySelectorAll('.liSkill')

        liSkill.forEach((li) => {
            li.classList.add('showliSkill')
        })

    }

}

activeObserve(showElemTwo, sectwo)