/*  It will empty out the small cups
    fill the big the same amount that is being emptied.
    It will show how much filled the big cup is in percent
    It will show the amount remain to fill in liters
*/

//selcted all the variable needed
const smallCups = document.querySelectorAll('.small-cup') 
const remain = document.querySelector('.remain')
const liters = document.querySelector('.liters')
const percent = document.querySelector('.percentage')
const bigCup = document.querySelector('.big-cup')

// Event will start when the small cup is clicked
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlight(idx))
})

function highlight(idx) {
  // It will check if the small clicked is full or not
  // if it is full then it will be emptied and vice-versa
  // It will fill all the cups before the click one by adding full class
  // It will fires off another function
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full') ) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  bigCupUpdate()
}

function bigCupUpdate() {
  // It will update the  percent full and liters remaining text
  const fullCups = document.querySelectorAll('.full').length  
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percent.style.visibility = 'hidden'
    percent.style.height = 0
  } else {
    percent.style.visibility = 'visible'
    const bigCupHeight = bigCup.getBoundingClientRect().height 
    percent.style.height = `${fullCups / totalCups * bigCupHeight}px`
    percent.innerText = `${fullCups / totalCups * 100}%`
  }
  
  if (fullCups === totalCups) {
    remain.style.height = 0
    remain.style.visibility = 'hidden'
  } else {
    remain.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}