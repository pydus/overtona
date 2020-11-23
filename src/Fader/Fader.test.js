import { render, fireEvent, screen } from '@testing-library/react'
import Fader from '.'

it('calls onChange', () => {
  const handleChange = jest.fn()
  render(<Fader onChange={handleChange} value={0.5} />)
  fireEvent.change(screen.getByRole('slider'), {
    target: { value: 0.6 }
  })
  expect(handleChange).toHaveBeenCalledTimes(1)
})
