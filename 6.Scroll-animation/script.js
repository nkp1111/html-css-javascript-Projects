const boxes = document.querySelectorAll(".box");


window.addEventListener("scroll", checkBox);

checkBox();

function checkBox() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add("active")
    } else {
      box.classList.remove("active")
    }
  })
}
