const times = document.querySelector('#times')
const likeMe = document.querySelector('.likeMe')

// likeMe.addEventListener('dblclick', (e) => {

// })

let clickTime = 0
let likeTimes = 0
likeMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  // const pos = e.target.getBoundingClientRect()
  // console.log(pos)
  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  let heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.style.top = yInside + 'px'
  heart.style.left = xInside + 'px'

  likeMe.appendChild(heart)

  likeTimes += 1

  times.innerText = likeTimes
  setTimeout(() => {
    heart.remove()
  }, 1000)

}