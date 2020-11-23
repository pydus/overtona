const createNodeMock = () => ({
  connect: jest.fn(),
  disconnect: jest.fn()
})

const context = {
  createGain: () => ({
    ...createNodeMock(),
    gain: { value: 0 }
  }),

  createOscillator: () => ({
    ...createNodeMock(),
    start: jest.fn(),
    stop: jest.fn(),
    frequency: { value: 0 }
  })
}

export default context
