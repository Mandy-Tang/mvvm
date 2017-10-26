function observe (data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object
    .entries(data)
    .forEach(([key, value]) => {
      defineReactive(data, key, value)
    })
}

function defineReactive (data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: () => value,
    set: (newValue) => {
      console.log(`this is a change: ${value} -> ${newValue}`)
      value = newValue
    }
  })
}

export default observe
