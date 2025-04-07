import React from 'react'
import Image from 'next/image'

export default function CaseStudySummary() {
  return (
    <div className='relative mb-10 md:mb-24 px-[5%] py-8'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[90%] xs:h-[100%] md:h-[67.5%] bg-brand-darkblue rounded-xl md:rounded-3xl'></div>

      <div className='relative text-center text-white space-y-3 mb-10 z-30'>
        <p className='font-raleway font-bold text-base md:text-5xl'>Summary</p>

        <p className='text-xs md:text-lg'>
          Key insight from the impact of dynamic configuration in automation,
          <br />
          Daily Total Power Consumption Comparison by:
        </p>
      </div>

      <div className='relative w-[90%] mx-auto flex md:justify-center xs:flex-col gap-8 z-30'>
        <div className='relative flex-1 md:min-h-96 p-5 md:p-8 space-y-4 md:space-y-6 bg-brand-lightgray rounded-xl md:rounded-3xl bg-case-study-summary-active-units'>
          <p className='relative z-30 font-bold xs:text-sm mdtext-xl'>Active Units</p>
          <p className='relative z-30 xs:text-xs md:text-lg md:leading-tight'>
            Week 1 (Before automation):
            <span className='block font-semibold'>22,540.56 kWh</span>
          </p>
          <p className='relative z-30 xs:text-xs md:text-lg md:leading-tight'>
            Week 2 (After automation):
            <span className='block font-semibold'>17,272.95 kWh</span>
          </p>

          <Image
            src='/assets/img/case-study/summary/active-units-icon.png'
            alt='active-units'
            width={500}
            height={500}
            className='block md:hidden absolute bottom-0 right-0 w-auto h-full object-contain z-10'
          />
        </div>

        <div className='relative flex-1 md:min-h-96 p-5 md:p-8 space-y-4 md:space-y-6 bg-brand-lightgray rounded-xl md:rounded-3xl bg-case-study-summary-energy-efficiency'>
          <p className='relative z-30 font-bold xs:text-sm mdtext-xl'>Energy Efficiency</p>
          <p className='relative z-30 xs:text-xs md:text-lg md:leading-tight'>
            Efficiency Energy Saved:
            <span className='block font-semibold'>5,267.61 kWh</span>
          </p>
          <p className='relative z-30 xs:text-xs md:text-lg md:leading-tight'>
            Efficiency Percentage:
            <span className='block font-semibold'>23.37%</span>
          </p>

          <Image
            src='/assets/img/case-study/summary/energy-efficiency-icon.png'
            alt='energy-efficiency'
            width={500}
            height={500}
            className='block md:hidden absolute bottom-0 right-0 w-auto h-full object-contain z-10'
          />
        </div>

        <div className='relative flex-1 md:min-h-96 p-5 md:p-8 space-y-4 md:space-y-6 bg-brand-lightgray rounded-xl md:rounded-3xl bg-case-study-summary-monetary-savings'>
          <p className='relative z-30 font-bold xs:text-sm mdtext-xl'>Equivalent Monetary Savings</p>
          <p className='relative z-30 w-[90%] xs:text-xs md:text-lg md:leading-tight'>
            <span className='font-semibold'>Rp 8,428,176</span> savings in 5 days running (Before vs After)
          </p>
          <p className='relative z-30 xs:text-xs md:text-lg md:leading-tight'>
            Energy Savings Automation
            <br />while maintaining equivalent <span className='contents md:hidden'>performance</span>
            <span className='hidden md:contents'><br />performance</span>
          </p>

          <Image
            src='/assets/img/case-study/summary/monetary-savings-icon.png'
            alt='monetary-savings'
            width={500}
            height={500}
            className='block md:hidden absolute bottom-0 right-0 w-auto h-full object-contain z-10'
          />
        </div>
      </div>
    </div>
  )
}
