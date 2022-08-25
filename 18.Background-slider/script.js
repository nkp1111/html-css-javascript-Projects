const body = document.body
const sliders = document.querySelectorAll('.slider')
const btns = document.querySelectorAll('.arrow')

let current = 0


function changeImg() {
  sliders.forEach(slider => {
    slider.classList.remove('active')
  })

  sliders[current].classList.add('active')
  body.style.backgroundImage = sliders[current].style.backgroundImage
}

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('left')) {
      current--
    
      if (current < 0) {
        current = sliders.length - 1
      }
  
      changeImg()
  
    } else if (e.currentTarget.classList.contains('right')) {
      current++
      console.log(current)
      if (current > sliders.length - 1) {
        current = 0
      }
  
      changeImg()
    }
  })
})


changeImg()