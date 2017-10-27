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
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: () => value,
    set: (newValue) => {
      console.log(`this is a change: ${value} -> ${newValue}`)
      value = newValue
      dep.notify()
    }
  })
}

function Dep () {
  this.subs = []
}
Dep.prototype = {
  addSub (sub) {
    this.subs.push(sub)
  },
  notify () {
    this.subs.map((sub) => {
      sub.update()
    })
  }
}

export default observe
