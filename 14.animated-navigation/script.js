const nav = document.querySelector('.main')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  nav.classList.toggle('active')
})