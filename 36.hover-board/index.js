const container = document.querySelector('.container')
const random = document.getElementById('random')

const colorEl = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const squares = 500

for (let i = 0; i < 500; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', (e) => setColor(square))
  square.addEventListener('mouseout', (e) => removeColor(square))

  container.appendChild(square)
}

function setColor(ele) {
  let color = getRandomColor()
  ele.style.background = color
}

function removeColor(ele) {
  ele.style.background = '#1d1d1d'
}

function getRandomColor() {
  let randomColor = '#'
  for (let i = 0; i < 6; i++) {
    randomColor += colorEl[Math.floor(Math.random() * colorEl.length)]
  }
  return randomColor
}
