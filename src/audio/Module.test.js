import Module from './Module'

// Mock of Web Audio API context

const createContextMock = () => ({
  createGain: () => createNodeMock()
})

// Mock of AudioNode in Web Audio API

const createNodeMock = () => ({
  sources: [],
  destinations: [],

  connect(destination) {
    this.destinations.push(destination)
    destination.sources.push(this)
  },

  disconnect(destination) {
    const index = this.destinations.indexOf(destination)
    const indexOfThis = destination.sources.indexOf(this)
    this.destinations.splice(index, 1)
    destination.sources.splice(indexOfThis, 1)
  },

  get numberOfOutputs() {
    return this.destinations.length
  },

  get numberOfInputs() {
    return this.sources.length
  }
})

it('connects to audio node', () => {
  const context = createContextMock()
  const destination = createNodeMock()
  const module = new Module(context)
  module.connect(destination)
  expect(module.source.numberOfOutputs).toBe(1)
  expect(destination.numberOfInputs).toBe(1)
})

it('disconnects from audio node', () => {
  const context = createContextMock()
  const destination = createNodeMock()
  const module = new Module(context)
  module.connect(destination)
  module.disconnect(destination)
  expect(module.source.numberOfOutputs).toBe(0)
  expect(destination.numberOfInputs).toBe(0)
})
