const nums = document.querySelectorAll('span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.getElementById('replay')

runAnimation()

function runAnimation() {
  nums.forEach((num, ind) => {
    const nextToLast = num.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && ind !== nextToLast) {
        e.target.classList.remove('in')
        e.target.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach(num => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

replay.addEventListener('click', (e) => {
  resetDOM()
  runAnimation()
})