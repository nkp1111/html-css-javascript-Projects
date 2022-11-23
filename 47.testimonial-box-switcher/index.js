const testomonialsContainer = document.querySelector(".testimonials-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username1 = document.querySelector(".username")
const role = document.querySelector(".role")
let ind = 0

let testimonials = ''


fetch('https://randomuser.me/api?results=10')
  .then(data => data.json())
  .then(res => {
    testimonials = res.results
    updateTestonomials(res.results)
  })

function updateTestonomials(testimonials) {

  if (testimonials) {
    console.log(testimonials[ind]);
    const {
      name: { first, last },
      login: { username },
      picture: { medium },
      text = `Lorem ipsum dolor sit amet consectetur adipisicing  elit.Explicabo iusto assumenda sequi.Esse exercitationem
      accusamus soluta necessitatibus dolore sequi dolor corporis aperiam, inventore cupiditate atque delectus quasi
      quia officia incidunt autem quis facere ipsam.Fugit commodi, aliquid aut molestias aliquam!Eum saepe quaerat
      rerum ducimus eaque quasi
      tenetur ratione expedita molestiae, aliquam inventore ? Pariatur rem repellendus nesciunt quia ?`
    } = testimonials[ind]

    testimonial.innerHTML = text
    userImage.src = medium
    username1.innerHTML = `${first} ${last}`
    role.innerHTML = username

    ind++

    if (ind > testimonials.length) {
      ind = 0
    }
  }

}

setInterval(() => updateTestonomials(testimonials), 10000)