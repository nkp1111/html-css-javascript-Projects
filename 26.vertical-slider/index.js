const container = document.querySelector('.container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0
console.log('up');
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = container.clientHeight
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex >= slidesLength) {
      activeSlideIndex = 0
    }
  }

  if (direction == 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }

  rightSlide.style.transform = `translateY(${-sliderHeight * activeSlideIndex}px)`

  leftSlide.style.transform = `translateY(${sliderHeight * activeSlideIndex}px)`
}

