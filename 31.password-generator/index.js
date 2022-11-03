const result = document.querySelector('.result')
const clipboard = document.querySelector('#clipboard')
const lengthEl = document.querySelector('#length')
const lowercaseEl = document.querySelector('#lowercase')
const uppercaseEl = document.querySelector('#uppercase')
const symbolEl = document.querySelector('#symbol')
const numberEl = document.querySelector('#number')
const submitBtn = document.querySelector('#submit-btn')

const getRandomLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + ''
}

const getRandomSymbol = () => {
  let symbols = '!@#$%^&*()-+*'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const map = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

submitBtn.addEventListener('click', (e) => {
  const length = +lengthEl.value
  const hasUpper = uppercaseEl.checked
  const hasLower = lowercaseEl.checked
  const hasNumber = numberEl.checked
  const hasSymbol = symbolEl.checked

  result.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
})

function generatePassword(length, upper, lower, number, symbol) {
  let generatedPassword = ''
  const typeCount = upper + lower + number + symbol
  const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(d => Object.values(d)[0])

  if (typeCount > 0) {
    for (let i = 0; i < length; i += typeCount) {
      typeArr.map(t => {
        const funcName = Object.keys(t)[0]
        generatedPassword += map[funcName]()
      })
    }
  }
  return generatedPassword.slice(0, length)
}

clipboard.addEventListener('click', (e) => {
  const textarea = document.createElement('textarea')
  const password = result.innerText
  if (!password) { return }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to the clipboard.')
})
