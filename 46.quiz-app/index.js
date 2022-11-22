let questionNum = 0
let score = 0
let quizData = ''
let correctAnswer = ''
const questions = document.getElementById("questions")
const optionA = document.querySelector("#a_text")
const optionB = document.querySelector("#b_text")
const optionC = document.querySelector("#c_text")
const optionD = document.querySelector("#d_text")
const answers = document.querySelectorAll(".answer")
const submitBtn = document.getElementById("submit")
const quiz = document.querySelector(".quiz-container")

const questionAnswerMap = {
  a: optionA,
  b: optionB,
  c: optionC,
  d: optionD
}

fetch("quiz-brain.json")
  .then(data => data.json())
  .then(res => {
    quizData = res.results
    quizBrain(res.results)
  })


const quizBrain = (data) => {

  console.log(score)
  if (data) {
    const questionData = data[questionNum]
    const question = questionData.question
    correctAnswer = questionData.correct_answer
    let options = [correctAnswer, ...questionData.incorrect_answers]

    shuffleArray(options)
    questions.innerHTML = question
    optionA.innerHTML = options[0]
    optionB.innerHTML = options[1]
    optionC.innerHTML = options[2]
    optionD.innerHTML = options[3]
  }

}

function deselectAnswers() {
  answers.forEach(answer => {
    answer.checked = false
  })
}

function getSelected() {
  let answer = ''
  answers.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener("click", (e) => {
  const answer = getSelected()
  if (answer) {
    if (questionAnswerMap[answer].innerText === correctAnswer) {
      score++
    }

    questionNum++

    if (questionNum < quizData.length) {
      deselectAnswers()
      quizBrain(quizData)
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/ ${quizData.length} questions correctly.</h2>

      <button onclick="location.reload()"> Reload</button>
      `
    }
  }
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


quizBrain()