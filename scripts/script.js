function aparecerSumir(local, materia = '') {
    document.querySelector(local + materia).classList.toggle('active')
    
}

const btnmenu = document.querySelector('div.menu')
const menuInt = document.querySelector('div.menuInt')
const links = document.querySelector('div.links')

btnmenu.addEventListener('click', () => {
    menuInt.classList.toggle('active')
    links.classList.toggle('active')

})

const aNav = document.querySelectorAll('nav.small a')

aNav.addEventListener('click', () => {
    menuInt.classList.remove('active')
    links.classList.toggle('active')

})
