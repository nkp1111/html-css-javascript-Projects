const boxes = document.getElementById("boxes")
const btn = document.getElementById("btn")

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {

    const box = document.createElement("div")
    box.classList.add("box")
    box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`
    boxes.appendChild(box)
  }
}

btn.addEventListener('click', () => {
  boxes.classList.toggle("big")
})