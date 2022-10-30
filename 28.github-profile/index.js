const apiUrl = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const getUser = async (username) => {
  try {
    const { data } = await axios.get(apiUrl + username)
    createUserCard(data)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username')
    }
  }
}

const getRepos = async (username) => {
  try {
    const { data } = await axios(apiUrl + username + '/repos?sort=created')
    addReposToCard(data)
  } catch (err) {
    createErrorCard('problem fetching repos')
    console.log(err);
  }
}

const createUserCard = (user) => {
  cardHtml = `<div id="card">
      <div>
        <img src="${user.avatar_url}" alt="avatar" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>Followers ${user.followers}</li>
          <li>Following ${user.following}</li>
          <li>Number of repos ${user.public_repos}</li>
        </ul>

        <div id="repos">
      
        </div>
      </div>
    </div>`

  main.innerHTML = cardHtml
}

const createErrorCard = (msg) => {
  main.innerHTML = `
  <div id="card">
    <h1>
    ${msg}
    </h1>
  </div>`
}

const addReposToCard = (repos) => {
  console.log(repos);
  const reposContainer = document.getElementById('repos')
  repos && repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name
    reposContainer.append(repoEl)
  })

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  getUser(search.value)
  getRepos(search.value)
})


