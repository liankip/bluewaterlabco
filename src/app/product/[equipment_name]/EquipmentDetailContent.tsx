import Detail from './components/Detail'
import Title from './components/Title'

export default function EquipmentDetailContent({ equipment_name }: { equipment_name: string }) {
  return (
    <div className='w-full min-h-screen overflow-x-clip'>
      <Title equipment_name={equipment_name} />
      <Detail equipment_name={equipment_name} />
    </div>
  )
}
