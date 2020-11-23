import { render, fireEvent, screen } from '@testing-library/react'
import ToneMaker from '.'
import Tone from '../audio/Tone'
import context from '../audio/context'

jest.mock('../audio/context')

let tone

beforeEach(() => tone = new Tone(context))

it('renders faders', () => {
  render(<ToneMaker numberOfFaders={12} tone={tone} />)
  expect(screen.getAllByRole('slider')).toHaveLength(12)
})

it('controls fundamental frequency gain', () => {
  render(<ToneMaker numberOfFaders={12} tone={tone} />)
  fireEvent.change(screen.getAllByRole('slider')[0], {
    target: { value: 0.9 }
  })
  expect(tone.getOvertone(0)).toBe(0.9)
})

it('controls overtone gain', () => {
  render(<ToneMaker numberOfFaders={16} tone={tone} />)
  fireEvent.change(screen.getAllByRole('slider')[7], {
    target: { value: 0.5 }
  })
  expect(tone.getOvertone(7)).toBe(0.5)
})
