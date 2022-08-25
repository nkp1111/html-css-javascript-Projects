const btns = document.querySelectorAll('.ripple')

btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const x = e.clientX // click coordinates x,y
    const y = e.clientY

    const rectTop = e.currentTarget.offsetTop  // rec top-left corner position from offsetParent
    const rectLeft = e.currentTarget.offsetLeft

    const posX = x - rectLeft
    const posY = y - rectTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = posY + 'px'
    circle.style.left = posX + 'px'

    // this.appendChild(circle)
    e.currentTarget.appendChild(circle)

    setTimeout(() => circle.remove(), 500)

  })
})