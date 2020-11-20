import Module from './Module'

class Tone extends Module {
  constructor(context, frequency = 440) {
    super(context)

    this.frequency = frequency
    this.context = context

    // array of gain values: first element for the fundamental
    // frequency, remaining values for overtones in ascending order
    this.tones = [1]

    this.oscillators = []
  }

  setUp() {
    this.oscillators = []

    this.tones.forEach((gainValue, index) => {
      const gain = this.context.createGain()
      const oscillator = this.context.createOscillator()
      const overtoneFrequency = this.frequency * (index + 1)

      oscillator.frequency.value = overtoneFrequency
      oscillator.type = 'sine'

      gain.gain.value = gainValue

      oscillator.connect(gain)
      gain.connect(this.source)

      this.oscillators.push(oscillator)
    })
  }

  start() {
    this.setUp()
    this.oscillators.forEach(oscillator => oscillator.start())
  }

  stop() {
    this.oscillators.forEach(oscillator => oscillator.stop())
  }

  setOvertone(n, gain) {
    this.tones[n] = gain
  }
}

export default Tone
