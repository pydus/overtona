import './Fader.css'
import { useState } from 'react'

function Fader(props) {
  const [value, setValue] = useState(props.value || 0)

  const handleChange = event => {
    const newValue = Number(event.target.value)
    setValue(newValue)
    props.onChange(newValue)
  }

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={value}
      onChange={handleChange}>
    </input>
  )
}

export default Fader
