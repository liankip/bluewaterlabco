import './styles/index.css'

import Introduction from './components/Introduction'
import Title from './components/Title'
import BeforeAfterList from './components/BeforeAfterList'
import Graphs from './components/Graphs'
import EnergyConsumptionAfterAutomation from './components/EnergyConsumptionAfterAutomation'
import Summary from './components/Summary'

export default function CaseStudyContent() {
  return (
    <div className='w-full min-h-screen'>
      <Title />
      <Introduction />
      <BeforeAfterList />
      <Graphs />
      <EnergyConsumptionAfterAutomation />
      <Summary />
    </div>
  )
}
