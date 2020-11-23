import './App.css'
import ModuleSpace from './ModuleSpace'
import { project } from './audio'

function App(props) {
  return (
    <div className="App" data-testid="app">
      <ModuleSpace project={project} />
    </div>
  )
}

export default App
