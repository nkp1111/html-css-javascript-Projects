const container = document.querySelector(".container")
const row = 10

for (let i = 0; i < row * 3; i++) {
  const image = document.createElement("img")
  let size = getRandomSize()
  image.src = `https://picsum.photos${size}?random=${i}`
  container.appendChild(image)
}


function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300
}

function getRandomSize() {
  let width = getRandomNumber()
  let height = getRandomNumber()
  return `/${width}/${height}`
}