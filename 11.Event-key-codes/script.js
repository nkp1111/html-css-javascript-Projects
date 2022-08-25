const main = document.querySelector('.main-container')

document.addEventListener('keydown', (event) => {
  console.log(event)
  main.innerHTML = `<div class="key">
                     ${event.key === " " ? 'space': event.key }
                      <small>event.key</small>
                    </div>

                    <div class="key">
                      ${event.keyCode}
                      <small>event.keyCode</small> 
                    </div>

                    <div class="key">
                      ${event.code}
                      <small>event.code</small>  
                    </div>
                    `

})

