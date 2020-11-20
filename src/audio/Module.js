class Module {
  constructor(context) {
    this.source = context.createGain()
    this.destinations = []
  }

  connect(destination) {
    this.destinations.push(destination)
    this.source.connect(destination)
  }

  disconnect(destination) {
    const index = this.destinations.indexOf(destination)

    if (index !== -1) {
      this.source.disconnect(destination)
      this.destinations.splice(index, 1)
      return true
    }

    return false
  }
}

export default Module
