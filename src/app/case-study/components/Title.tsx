import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function CaseStudyTitle() {
  return (
    <div className='relative content-center bg-black text-white md:pb-52 md:pt-80'>
      <Image
        src='/assets/background/case-study/title/bg-radial.png'
        alt='radial'
        width={0}
        height={0}
        className='hidden md:block absolute left-0 top-0 z-10 h-auto w-1/2 object-contain'
      />

      <div className='relative z-30 space-y-3 pl-[5%] text-left md:mb-[5%] md:mt-0 md:w-[40%]'>
        <div className='flex xs:h-[250px]'>
          <Image
            src='/assets/background/case-study/title/bg-engineer.png'
            alt='projects'
            className='h-full w-full object-cover md:hidden'
            fill
          />
          <div className='absolute top-0 left-0 w-full xs:h-[250px] bg-gradient-to-r from-black from-20% via-transparent to-transparent'></div>
        </div>

        <div className='absolute top-1/2 left-0 -translate-y-1/2 md:relative z-30 md:space-y-3 pl-[5%] mb-[5%]'>
          <h1
            className={cn(
              'font-raleway relative z-30 w-fit pb-2 text-xl font-semibold leading-tight md:text-6xl',
              'bg-gradient-to-r from-white from-20% via-[#999999] to-[#999999] bg-clip-text text-transparent'
            )}
          >
            Case Study
          </h1>

          <h2 className='text-xs md:text-xl xs:w-[60%]'>
            Improvement in Dissolved Oxygen and Efficiency in Power Consumption
          </h2>
        </div>
      </div>

      <div className='xs:hidden relative bottom-0 right-0 z-30 mt-8 w-full self-center md:absolute md:mt-0 md:w-[60%]'>
        <div className='relative h-[400px] w-full md:h-[750px] xs:h-[300px]'>
          <Image
            src='/assets/background/case-study/title/bg-engineer.png'
            alt='projects'
            className='h-full w-full object-cover'
            fill
          />
        </div>
      </div>
    </div>
  )
}
