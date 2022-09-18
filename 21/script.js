const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')


const dragStart = (e) => {
  console.log(e);
}

empties.forEach(empty => {
  empty.addEventListener('dragstart', dragStart)
})
