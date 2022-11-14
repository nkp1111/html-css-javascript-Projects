const password = document.getElementById("password")
const background = document.getElementById("background")

password.addEventListener('input', (e) => {
  let text = e.target.value
  let len = text.length
  background.style.filter = `blur(${10 - len}px)`
})