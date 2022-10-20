const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const sizeDisplay = document.getElementById('size-display')
const colorChange = document.getElementById('color')
const clear = document.getElementById('clear')

let size = 20
let color = 'black'
let x
let y
let mousePressed = false

clear.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

colorChange.addEventListener('change', (e) => {
  color = e.target.value
})

increment.addEventListener('click', (e) => {
  if (size >= 45) {
    size = 50
  } else {
    size += 5
  }
  sizeDisplay.innerText = size
})

decrement.addEventListener('click', (e) => {
  if (size <= 5) {
    size = 5
  } else {
    size -= 5
  }
  sizeDisplay.innerText = size
})


const drawCircle = (x, y) => {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = size * 2
  ctx.strokeStyle = color
  ctx.stroke()
}

canvas.addEventListener('mousedown', (e) => {
  mousePressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  mousePressed = false
  x = undefined
  y = undefined
  console.log(mousePressed, x, y);
})

canvas.addEventListener('mousemove', (e) => {
  if (mousePressed) {
    x2 = e.offsetX
    y2 = e.offsetY
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)
    x = x2
    y = y2
  }
})

sizeDisplay.innerText = size
