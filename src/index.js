import observe from './Observer'

let timeTicker = {
  count: 0
}

observe(timeTicker)

setInterval(() => {
  timeTicker.count++
}, 1000)
