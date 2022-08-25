// This script provides motion to still clock

// months to get month
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const btn = document.querySelector('.toggle-btn')

const needles = document.querySelectorAll('.needle')  // selected all needle of clock

const time = document.querySelector('.time')
const date = document.querySelector('.date')

btn.addEventListener('click', () => {
  // to change mode between dark and light
  const html = document.querySelector('html')
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    btn.innerText = 'Dark Mode'
  } else {
    btn.innerText = 'Light Mode'
  }
})

function format(val) {
  return val < 10 ? '0' + val: val
}

function timeChange() {
  const dateTime = new Date()            // date-time to get current values of date, month etc
  const hoursNow = dateTime.getHours()
  const minutesNow = dateTime.getMinutes()
  const secondsNow = dateTime.getSeconds()
  const dateNow = dateTime.getDate()
  const state = 'AM'

  /* getMonths() gives a number on 0 based indexing representing the month */
  const monthNum = dateTime.getMonth()
  const monthNow = months[monthNum]          

  const yearNow = dateTime.getFullYear()

  const secondNeedle = 360 / 60 * secondsNow       // degree in circle according to time
  const minuteNeedle = 360 / 60 * minutesNow
  const hourNeedle = 360 / 12 * hoursNow

  needles.forEach(needle => {
    if (needle.classList.contains('second')) {
      needle.style.transform = `rotate(${secondNeedle + 180}deg)`
    } else if (needle.classList.contains('minute')) {
      needle.style.transform = `rotate(${minuteNeedle + 180 }deg)`
    } else if (needle.classList.contains('hour')) {
      
      needle.style.transform = `rotate(${hourNeedle + 180}deg)`
    }
  })



  time.innerText = `${format(hoursNow % 12)}:${format(minutesNow)}`
  date.innerHTML = `${monthNow}, ${yearNow}<span class="circle">${format(dateNow)}</span>`
  dateWrite.innerText = ``
}

setInterval( timeChange, 1000)

