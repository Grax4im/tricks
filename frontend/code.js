const openMenu = document.getElementById('openMenu')
const dropdown = document.getElementById('navDemo')

openMenu.addEventListener('click', () => {
    console.log(dropdown)
    dropdown.classList.toggle('w3-hide');
})