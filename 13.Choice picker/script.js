// Variables
const textarea = document.querySelector('textarea')
const choice = document. querySelector('.choice-container')

// focus on textarea after loading
textarea.focus()

// Creating a tag at keyup
textarea.addEventListener('keyup', (e) => {
  getTag(e.target.value)  // key are taken into the function
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ""
    }, 10)
    pickATag()
  }
})

// function1 take value and create a tag from it
function getTag(item) {
  const tags = item.split(",")  // split to make an array
  tags.filter(tag => tag.trim() !== "").map(tag => tag.trim()) // invalid blank value between 2 comma's and removes whitespace
  
  choice.innerText = ''  // empty text inside so each tag only contains text separated by comma
  /* Since we have already created an array of the text inside `textarea` 
    We cleared it so that it will start new array-element separated by comma*/

  tags.forEach((tag) => {                           // Created a tag put it inside
    const tagEl = document.createElement('span')
    tagEl.innerText = tag
    tagEl.classList.add('tag')
    choice.appendChild(tagEl)
  })
}

function pickATag() {
  // Number of times the winner will pass
  const numTimes = 30
  const interval = setInterval(() => {
    const winner = selectRandom()
    highlight(winner)
    setTimeout(() => {
      unHighlight(winner)
    }, 100)
  },100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const winner = selectRandom()
      highlight(winner)
    }, 100)
  }, numTimes * 100)
}

function selectRandom() {
  const tagEls = document.getElementsByClassName('tag')
  const randomIdx = Math.floor(Math.random() * tagEls.length)
  return tagEls[randomIdx]
}

function highlight(tag) {
  tag.classList.add('active')
}

function unHighlight(tag) {
  tag.classList.remove('active')
}
