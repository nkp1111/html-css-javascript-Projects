
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6ad3bab51546f3ca658da94037952a15&page=1' // to load page

const IMG_URL = 'https://image.tmdb.org/t/p/w1280'  // w1280 is img width
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=6ad3bab51546f3ca658da94037952a15&query="' // for earch bar


getMovies(API_URL)


async function getMovies(url) {
  const res = await fetch(url) // to fetch API data
  const data = await res.json() // data in json format

  showMovies(data.results)
}

const form = document.querySelector('form')
const search = document.querySelector('.search')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }

})

const main = document.getElementById('main')

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie-container')

    movieEl.innerHTML = `
          <img class="movie-img" src="${IMG_URL + poster_path}" alt="${title}">
          <div class="info">${title}
            <span class="rating ${getRatingColor(vote_average)}">${vote_average}</span>
          </div>
          <div class="description">
            ${overview}
          </div>
          `

    main.appendChild(movieEl)
  })

}

function getRatingColor(rating) {
  if (rating >= 8) {
    return 'green'
  } else if (rating >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}


