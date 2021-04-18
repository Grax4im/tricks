const openMenu = document.getElementById('openMenu')
const dropdown = document.getElementById('navDemo')
const menuIcon = document.querySelector('#openMenu i')
const menuText = document.querySelector('#openMenu span')
const buttonOpenMenu = document.querySelector('#abrirMenu')

function handlerOpen () {
    dropdown.classList.toggle('w3-hide');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-close');
    if(menuText.innerText == 'MENU') {
        menuText.innerText = 'FECHAR'
    }
    else {
        menuText.innerText = 'MENU'
    }
}

openMenu.addEventListener('click', () => handlerOpen())
abrirMenu.addEventListener('click', () => handlerOpen())

