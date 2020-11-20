import Tone from './Tone'

function createDefaultProject(context) {
  const project = {
    masterGain: context.createGain(),
    tone: new Tone(context),

    initialize() {
      project.masterGain.gain.value = 0.35
      project.tone.connect(project.masterGain)
      project.masterGain.connect(context.destination)
      project.tone.start()
    }
  }

  project.initialize()

  return project
}

const Context = window.AudioContext || window.webkitAudioContext
const context = Context ? new Context() : null

export const project = context ? createDefaultProject(context) : null
