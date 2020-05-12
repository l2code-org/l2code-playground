window.addEventListener('load', () => {

  const input = document.querySelector('#input-time > input')
  input.addEventListener(
    'change',
    (event) => {
      console.log(event)
    },
  )

  var countdown = input;

  function addMinute() {
    countdown = countdown + 60;
  }
})
