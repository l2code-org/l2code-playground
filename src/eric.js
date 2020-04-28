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
/*
function EventListener () {
  let listeners = []

  return {
    addEventListener: (event, fn) => {
      listeners = [...listeners, { event, fn }]
    },

    triggerEvent: (event, value) => {
      listeners.filter((listener) => listener.event === event)
      ;([1, 2, 3]).filter((x) => x % 2 === 0)
    },
  }
}

EventListener().addEventListener('change', () => {

})
*/
