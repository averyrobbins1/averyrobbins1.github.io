// toggle the menu (hamburger menu)

const ham = document.querySelector('.ham')
const nav = document.querySelector('.nav')

ham.addEventListener('click', () => {nav.classList.toggle('responsive')}, false)