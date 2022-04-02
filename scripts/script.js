function aparecerSumir(local, materia = '') {
    document.querySelector(local + materia).classList.toggle('active')
    
}

const btnmenu = document.querySelector('div.menu')
const menuInt = document.querySelector('div.menuInt')

btnmenu.addEventListener('click', () => {
    menuInt.classList.toggle('active')
})

const aNav = document.querySelectorAll('nav.small a')

aNav.addEventListener('click', () => {
    menuInt.classList.remove('active')
})