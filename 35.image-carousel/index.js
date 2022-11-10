const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgContainer = document.querySelector('.image-container')
const images = imgContainer.querySelectorAll('img')

let currentImage = 0
let interval = setInterval(run, 2000)

function run() {
  currentImage += 1
  changeImage()
}

function changeImage() {

  if (currentImage === images.length) {
    currentImage = 0
  } else if (currentImage < 0) {
    currentImage = images.length - 1
  }

  imgContainer.style.transform = `translateX(${currentImage * -500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
  currentImage -= 1
  changeImage()
  resetInterval()
})

rightBtn.addEventListener('click', () => {
  currentImage += 1
  changeImage()
  resetInterval()
})


