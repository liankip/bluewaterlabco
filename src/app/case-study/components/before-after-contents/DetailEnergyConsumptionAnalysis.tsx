import Image from 'next/image'

export default function DetailEnergyConsumptionAnalysis() {
  return (
    <div className='max-w-[80%] mx-auto space-y-6 xs:-mt-28 xs:-mb-28'>
      <div className='relative w-full h-[400px]'>
        <Image
          src='/assets/img/case-study/information/pm-detail-analysis.png'
          alt='energy-consumption-detail-analysis'
          className='object-contain'
          fill
        />
      </div>
    </div>
  )
}
