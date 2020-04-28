window.addEventListener('load', () => {
  const buttons = document.getElementsByClassName('btn')
  const input = document.getElementById('text')

  function isNumber (value) {
    return !Number.isNaN(Number(value))
  }

  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const value = event.target.value
      console.log(value)
      if (isNumber(value)) {
        input.value = value
      }


    })
  })
})
