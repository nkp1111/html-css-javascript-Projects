const questions = document.querySelectorAll('.question')
const query = document.querySelectorAll('.query')
const btn = document.querySelectorAll('i')

questions.forEach( (question, idx) => {
  question.addEventListener('click', () => {
    query[idx].classList.toggle('active')
    
  })
})

/*
   for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    query[i].classList.toggle('active')
  })
}
*/


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    let a = Math.floor(i/2)
    query[a].classList.toggle('active')

  })

}




