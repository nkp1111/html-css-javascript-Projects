const sounds = ['lullaby', 'applause', 'animals', 'birds', 'alarms', 'sample'];

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  btn.addEventListener('click', () => {

    document.getElementById(sound).play()    
  })

  document.getElementById('button').appendChild(btn)
 
})


const stopSongs = () => {
  sounds.forEach(sound => {

    let soundTOPause = document.getElementById(sound);
    soundTOPause.pause();

  })
}