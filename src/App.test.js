import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./audio/context')

test('renders', () => {
  render(<App />)
  expect(screen.getByTestId('app')).toBeInTheDocument()
})
