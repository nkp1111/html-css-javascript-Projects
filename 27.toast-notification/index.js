const btn = document.getElementById('btn')
const toasts = document.querySelector('#toasts')

const messages = [
  'message one',
  'message two',
  'message three',
  'message four',
  'message five',
]

const colors = [
  'green', 'red', 'blue'
]

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const getRandomColors = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

btn.addEventListener('click', () => {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.innerText = getRandomMessage()
  notif.style.color = getRandomColors()

  toasts.append(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)

})