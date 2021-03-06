import ToneMaker from '../ToneMaker'

function ModuleSpace(props) {
  return (
    <div className="ModuleSpace" data-testid="module-space">
      <ToneMaker
        numberOfFaders={16}
        tone={props.project.tone} />
    </div>
  )
}

export default ModuleSpace
