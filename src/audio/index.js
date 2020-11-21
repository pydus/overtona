import Tone from './Tone'
import context from './context'

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

export const project = createDefaultProject(context)
