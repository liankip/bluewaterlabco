import EquipmentDetailContent from './EquipmentDetailContent'

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ equipment_name: string }>,
}) {
  const equipmentName = (await params).equipment_name

  return (
    <EquipmentDetailContent equipment_name={equipmentName} />
  )
}
