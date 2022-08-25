const labels = document.querySelectorAll(".form-control label")

labels.forEach(letter => {
  letter.innerHTML = letter.innerText
          .split("")
          .map((key, idx)=> `<span style=transition-delay:${idx * 50}ms>${key}</span>`)
          .join("")
})
