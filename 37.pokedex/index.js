const pokedex = document.querySelector('.pokedex')
const pokemonCount = 150
const url = 'https://pokeapi.co/api/v2/pokemon/'
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D4D5D4',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: '#EAEDA1',
  flying: '#F5F5F5',
  fighting: '#E6F0D4',
  normal: '#F5F5F5'
}

const createPokemonCard = (pokemon) => {
  const pokeCard = document.createElement('div')
  pokeCard.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')
  const pokemonTypes = pokemon.types.map(d => d.type.name)
  const color = colors[pokemonTypes[0]]
  console.log(color);
  pokeCard.style.backgroundColor = `${color}` || colors['normal']

  pokeCard.innerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
        
    </div>
    <div class="info">
        <span class="number">
          #${id}
        </span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${pokemonTypes[0]}</span> </small>
    </div>
  `

  pokedex.appendChild(pokeCard)
}

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    const res = await fetch(url + i)
    const data = await res.json()
    createPokemonCard(data)
  }
}
fetchPokemon()


