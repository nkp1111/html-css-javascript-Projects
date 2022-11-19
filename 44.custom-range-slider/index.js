const range = document.getElementById('range')

range.addEventListener('input', (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')

  const labelWidth = getComputedStyle(label).getPropertyValue('width')

  const rangeNum = +rangeWidth.slice(0, rangeWidth.length - 2)
  const labelNum = +labelWidth.slice(0, labelWidth.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const left = value * (rangeNum / max) - labelNum / 2
  label.style.left = left + 'px'

  label.innerHTML = value
})