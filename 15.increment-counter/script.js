const counters = document.querySelectorAll('.counter')
 

counters.forEach(counter => {
  counter.innerText = '0'

  function updateCounter() {
    let target = counter.dataset.target
    // const target1 = counter.getAttribute('data-target')

    const increment = target / 300
    const c = +counter.innerText  //unary operator converting string to number

    /*********************** 
     Method 1
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    }
    }
    ************************/
    
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
    }
    
  }
  
  // Method 1:  updateCounter()
  setInterval(updateCounter, 1)

})