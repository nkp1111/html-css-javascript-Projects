/** https://icanhazdadjoke.com/  */

const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');


generateJoke()
jokeBtn.addEventListener('click', generateJoke)

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com/', config)
      .then((res) => res.json())
      .then((data) => joke.innerText = data.joke)
}