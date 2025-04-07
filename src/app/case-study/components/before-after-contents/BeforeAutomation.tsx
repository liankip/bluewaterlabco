import Image from 'next/image'

export default function BeforeAutomation() {
  return (
    <div className='max-w-[80%] mx-auto space-y-0 md:space-y-6 xs:p-2 xs:-mb-24'>
      <div className='relative w-full h-[200px] xs:-mt-12 xs:-mb-24'>
        <Image
          src='/assets/img/case-study/information/do-before-analysis.png'
          alt='dyssolved-oxygen-before-analysis'
          className='object-contain'
          fill
        />
      </div>
      <div className='relative w-full h-[235px] xs:-mt-24'>
        <Image
          src='/assets/img/case-study/information/pm-before-analysis.png'
          alt='energy-consumption-before-analysis'
          className='object-contain'
          fill
        />
      </div>
    </div>
  )
}
