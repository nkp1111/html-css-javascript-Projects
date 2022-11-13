const li = document.querySelectorAll('li')
const imgs = document.querySelectorAll('img')

li.forEach((l, i) => {

  l.addEventListener('click', (e) => {
    removeActive()
    removeShow()
    imgs[i].classList.add('show')
    l.classList.add('active')
  })


})

function removeActive() {
  li.forEach(l => l.classList.remove('active'))
}

function removeShow() {
  imgs.forEach(img => img.classList.remove('show'))
}