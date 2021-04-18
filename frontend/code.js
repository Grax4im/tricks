const openMenu = document.getElementById('openMenu')
const dropdown = document.getElementById('navDemo')
const menuIcon = document.querySelector('#openMenu i')
const menuText = document.querySelector('#openMenu span')

openMenu.addEventListener('click', () => {
    dropdown.classList.toggle('w3-hide');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-close');
    if(menuText.innerText == 'MENU') {
        menuText.innerText = 'FECHAR'
    }
    else {
        menuText.innerText = 'MENU'
    }
})
