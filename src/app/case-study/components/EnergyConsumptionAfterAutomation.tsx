import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function CaseStudyEnergyConsumptionAfterAutomation() {
  return (
    <div className='xs:mb-10 md:mb-36 px-[5%]'>
      <h2
        className={cn(
          'font-raleway font-bold text-base md:text-5xl text-center',
          'bg-gradient-to-r from-black from-25% via-[#247ff1] to-[#247ff1] bg-clip-text text-transparent pb-2',
        )}
      >
        Energy Consumption After Automation
      </h2>

      <h3 className='font-semibold text-xs md:text-xl text-center mb-8 md:mt-6 md:mb-20'>
        Result of Automation
      </h3>

      <Image
        src='/assets/img/case-study/energy-consumption-after-automation/before-after-graph.svg'
        alt='before-after-automation-graph'
        width={0}
        height={0}
        className='w-auto h-auto object-contain md:hidden mb-8'
      />

      <div className='flex flex-col-reverse md:flex-row items-center md:space-x-6'>
        <div className='w-full md:w-[52.5%] space-y-8 md:text-left'>
          <div className='space-y-4'>
            <p className='font-bold text-xs md:text-lg'>Daily Total Power Consumption Comparison by Active Units</p>

            <ul className='list-disc list-outside ml-6 space-y-4 xs:text-xs'>
              <li>
                Week 1 (Jan 11, 2024 - Jan 16, 2025): <span className='font-semibold'>22,540.56 KWh (Before Energy Saving)
                  <br />= 22,540.56 x Rp 1600 /KWh
                  <br />= Rp 36,064,896 in 5 days running</span>
              </li>
              <li>
                Week 2 (Jan 18, 2024 - Jan 23, 2025): <span className='font-semibold'>17,272.95 KWh
                  <br />= 17,272.95 x Rp 1600/KWh
                  <br />= Rp 27,636,720 in 5 days running</span>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <p className='font-bold xs:text-xs md:text-lg'>Energy Efficiency 5 days running:</p>

            <ul className='list-disc list-outside ml-6 xs:text-xs'>
              <li>Efficiency Energy Saved = <span className='font-semibold'>(Before - After) = 5,267.61 kWh</span></li>
              <li>Efficiency Energy (%) = <span className='font-semibold'>(Efficiency Saved / Week 1) x 100 = 23.37%</span></li>
              <li><span className='font-semibold'>Saving = Rp 8,428,176 in 5 days</span></li>
            </ul>
          </div>
        </div>

        <div className='w-[2.5%]'></div>

        <Image
          src='/assets/img/case-study/energy-consumption-after-automation/before-after-graph.svg'
          alt='before-after-automation-graph'
          width={0}
          height={0}
          className='w-[45%] h-auto object-contain xs:hidden'
        />
      </div>
    </div>
  )
}
