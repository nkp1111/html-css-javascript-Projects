const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

function dragStart(e) {
  this.className += ' hold'
  setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd(e) {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragEnter(e) {
  e.preventDefault()
}

function dragLeave(e) {
  this.className = 'empty'
}

function dragDrop(e) {
  this.className = 'empty'
  this.append(fill)
}

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (let empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}
