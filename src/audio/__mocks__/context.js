const createNodeMock = () => ({
  connect: jest.fn(),
  disconnect: jest.fn()
})

const context = {
  createGain: jest.fn(
    () => ({
      ...createNodeMock(),
      gain: { value: 0 }
    })
  ),

  createOscillator: jest.fn(
    () => ({
      ...createNodeMock(),
      start: jest.fn(),
      stop: jest.fn(),
      frequency: { value: 0 }
    })
  )
}

export default context
