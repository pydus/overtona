import { render, screen } from '@testing-library/react'
import { project } from '../audio'
import ModuleSpace from '.'

jest.mock('../audio/context')

it('renders', () => {
  render(<ModuleSpace project={project} />)
  expect(screen.getByTestId('module-space')).toBeInTheDocument()
})
