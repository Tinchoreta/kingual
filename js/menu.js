const mostrarMenu = document. querySelector('#menu')
const contenidoMenu = document.querySelector('#options')

mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});
