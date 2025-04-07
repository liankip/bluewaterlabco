import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HomeImpact() {
  return (
    <div className='relative flex w-full flex-col items-center'>
      <div
        className={cn(
          'relative z-30 w-[90%] max-w-5xl rounded-2xl p-2 md:p-8',
          'border border-white/[.40] bg-black/5 shadow-[0px_0px_35px_5px_rgba(81,169,255,0.35)]'
        )}
      >
        <div className='flex flex-col items-center rounded-2xl bg-[#151D30] px-2 md:px-6 py-2 md:py-5 md:flex-row'>
          <div className='w-full space-y-2 md:space-y-6 text-center md:w-1/2 md:text-left'>
            <h2 className='font-raleway text-base font-bold md:text-2xl'>
              Our Impact on Water
            </h2>
            <div className='flex xs:flex-row xs:gap-6 gap-2 md:gap-0 lg:flex-col'>
              <div className='flex items-center gap-2 md:gap-6'>
                <div className='relative h-14 w-14 md:h-28 md:w-28'>
                  <Image
                    src='/assets/img/home/impact/projects-icon.svg'
                    alt='projects'
                    className='object-contain'
                    fill
                  />
                </div>
                <div>
                  <p className='text-xs font-bold md:text-2xl'>37+</p>
                  <p className='font-raleway text-xs md:text-2xl'>Projects</p>
                </div>
              </div>
              <div className='flex items-center gap-2 md:gap-6 md:mt-4'>
                <div className='relative h-14 w-14 md:h-28 md:w-28'>
                  <Image
                    src='/assets/img/home/impact/conserved-water-icon.svg'
                    alt='conserved-water'
                    className='object-contain'
                    fill
                  />
                </div>
                <div>
                  <p className='text-nowrap text-xs font-bold md:text-2xl'>
                    4,82,185.08 m³
                  </p>
                  <p className='font-raleway text-xs md:text-2xl'>Conserved Water</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-4 hidden h-full w-[2px] bg-white/30 md:block'></div>

          <div className='w-full space-y-2 md:space-y-6 text-center md:w-1/2 md:text-left'>
            <h2 className='font-raleway text-base font-bold xs:mt-4 md:text-2xl'>
              Equivalent to clean water access for:
            </h2>
            <div className='flex xs:flex-row gap-2 md:gap-0 lg:flex-col'>
              <div className='flex items-center gap-2 md:gap-6'>
                <div className='relative h-14 w-14 md:h-28 md:w-28'>
                  <Image
                    src='/assets/img/home/impact/households-icon.svg'
                    alt='households'
                    className='object-contain'
                    fill
                  />
                </div>
                <div>
                  <p className='text-xs font-bold md:text-2xl'>4,082,185</p>
                  <p className='font-raleway text-xs md:text-2xl'>Households</p>
                </div>
              </div>
              <div className='flex items-center gap-2 md:gap-6 md:mt-4'>
                <div className='relative h-14 w-14 md:h-28 md:w-28'>
                  <Image
                    src='/assets/img/home/impact/people-icon.svg'
                    alt='people'
                    className='object-contain'
                    fill
                  />
                </div>
                <div>
                  <p className='text-xs font-bold md:text-2xl'>20,411,042</p>
                  <p className='font-raleway text-xs md:text-2xl'>People</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src='/assets/background/home/impact/bg-impact.svg'
        alt='radiant-background'
        width={1500}
        height={500}
        className='absolute bottom-[50%] left-0 z-10 h-auto w-full object-contain'
      />
    </div>
  )
}