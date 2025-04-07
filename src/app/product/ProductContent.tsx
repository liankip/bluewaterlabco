import './styles/index.css'

import Title from './components/Title'
import Equipments from './components/Equipments'

export default function ProductContent() {
  return (
    <div className='w-full min-h-screen'>
      <Title />
      <Equipments />
    </div>
  )
}
