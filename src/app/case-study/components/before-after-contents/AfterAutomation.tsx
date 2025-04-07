import Image from 'next/image'

export default function AfterAutomation() {
  return (
    <div className='max-w-[80%] mx-auto space-y-0 md:space-y-6 xs:p-2 xs:-mb-24'>
      <div className='relative w-full h-[200px] xs:-mt-12 xs:-mb-24'>
        <Image
          src='/assets/img/case-study/information/do-after-analysis.png'
          alt='dyssolved-oxygen-after-analysis'
          className='object-contain'
          fill
        />
      </div>
      <div className='relative w-full h-[235px]'>
        <Image
          src='/assets/img/case-study/information/pm-after-analysis.png'
          alt='energy-consumption-after-analysis'
          className='object-contain'
          fill
        />
      </div>
    </div>
  )
}
