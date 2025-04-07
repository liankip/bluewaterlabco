import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HomeOurPlatform() {
  return (
    <div className='mt-32'>
      <h2
        className={cn(
          'font-raleway mx-auto mb-4 w-fit pb-2 text-center text-3xl font-bold md:mb-14 md:text-5xl',
          'bg-gradient-to-r from-white via-[#ADD5FF] to-[#ADD5FF] bg-clip-text text-transparent' // text masking
        )}
      >
        Our Platform
      </h2>

      <div className='border-x-none flex xs:flex-col border-y-[0.5px] border-white/50 flex-row'>
        <div className='w-full border-b-[0.5px] border-white/50 lg:w-[5%] lg:border-b-0 lg:border-r-[0.5px]'></div>
        <div className='bg-power-save-card flex w-full flex-col justify-between gap-32 p-8 lg:w-[30%] lg:gap-56'>
          <div className='flex flex-col space-y-3 xs:items-center xs:text-center'>
            <Image
              src='/assets/logo/bluewave-logo.svg'
              alt='bluewave-power-save'
              width={0}
              height={0}
              className='h-auto w-24 rounded-md bg-white object-contain px-4 py-3 lg:w-36 xs:w-44'
            />

            <p className='text-lg font-bold lg:text-xl'>Power Save</p>
          </div>

          <p className='text-xs lg:text-lg'>
            Performance-driven dynamic configuration. PowerSave reduces energy
            consumption by up to 23%, efficiency in consumption of consumables
            and reduction in maintenance cost. Turn your facility from
            cost-center into profit-center.
          </p>
        </div>
        <div className='bg-shift-3-card lg:bg-shift-3-card:hover flex w-full flex-col justify-between gap-32 border-y-[0.5px] border-white/50 p-8 lg:w-[30%] lg:gap-56 lg:border-x-[0.5px] lg:border-y-0'>
          <div className='flex flex-col space-y-3 xs:items-center xs:text-center'>
            <Image
              src='/assets/logo/bluewave-logo.svg'
              alt='bluewave-shift-3'
              width={0}
              height={0}
              className='h-auto w-24 rounded-md bg-white object-contain px-4 py-3 lg:w-36 xs:w-44'
            />

            <p className='text-lg font-bold lg:text-xl'>SHIFT 3</p>
          </div>

          <p className='text-xs lg:text-lg'>
            Automation in wastewater treatment is made possible. No more
            collapsed system. SHIFT 3 operates 24 hours. Data is streamed
            real-time for analytics. Any outcomes are predicted and anticipated
            early with our Machine Learning capabilities . SHIFT 3 prevent
            environmental wastewater crises for your factory.
          </p>
        </div>
        <div className='bg-master-system-card flex w-full flex-col justify-between gap-32 p-8 lg:w-[30%] lg:gap-56'>
          <div className='flex flex-col space-y-3 xs:items-center xs:text-center'>
            <Image
              src='/assets/logo/bluewave-logo.svg'
              alt='bluewave-master-system'
              width={0}
              height={0}
              className='h-auto w-24 rounded-md bg-white object-contain px-4 py-3 lg:w-36 xs:w-44'
            />

            <p className='text-lg font-bold lg:text-xl'>Master System</p>
          </div>

          <p className='text-xs lg:text-lg'>
            Digitalization with a purpose. Deep dive into your production and
            wastewater facilities to improve efficiencies. Makes better decision
            with quick and easy universal platform to your legacy factory.
          </p>
        </div>
        <div className='w-full border-t-[0.5px] border-white/50 lg:w-[5%] lg:border-l-[0.5px] lg:border-t-0'></div>
      </div>
    </div>
  )
}
