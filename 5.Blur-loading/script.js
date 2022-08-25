const text = document.querySelector(".text")
const bg = document.querySelector(".bg")


let load = 0;

let interval = setInterval(blurring, 9)

function blurring() {
  load++

  if (interval > 99) {
    clearInterval(interval)
  }
  
  text.innerText = `${load}%`
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  text.style.opacity = scale(load, 0, 100, 1, 0)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}