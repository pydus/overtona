import './ToneMaker.css'
import Fader from '../Fader'

function ToneMaker(props) {
  const setOvertone = (n, gain) => {
    props.tone.setOvertone(n, gain)
    props.tone.restart()
  }

  const faders =
    Array(props.numberOfFaders)
      .fill(null)
      .map((_, index) =>
        <Fader
          key={index}
          value={props.tone.getOvertone(index)}
          onChange={gain => setOvertone(index, gain)} />)

  return (
    <div className="ToneMaker">
      <div className="faders">
        {faders}
      </div>
    </div>
  )
}

export default ToneMaker
