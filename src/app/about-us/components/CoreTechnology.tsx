import React from 'react'

export default function AboutUsCoreTechnology() {
  return (
    <div className='mb-12 flex flex-col items-center p-8 md:mb-44 md:flex-row md:items-start md:p-2'>
      <div className='hidden w-[5%] md:block'></div>

      <div className='font-raleway self-center w-full md:space-y-2 text-center md:w-[40%] md:text-left'>
        <p className='text-3xl font-bold md:text-5xl'>Core</p>
        <p className='text-3xl font-bold text-brand-blue md:text-5xl'>
          Technology
        </p>
      </div>

      <div className='mt-6 md:mt-4 w-full space-y-6 text-lg md:mt-0 md:w-[50%]'>
        <p className='text-xs md:text-lg'>
          We utilize both conventional and emerging technology into data-driven
          solutions. Our system is universal and intuitive for local operators
          in both rural and urban industrial setting
        </p>
        <p className='text-xs md:text-lg'>
          Bluewave deep dives into existing operations and tactfully integrates
          technologies into single platform that monitors, predicts and
          optimizes wastewater facilities. A platform for everyone to operate
          and to be monitored anywhere. Seamless and practical.
        </p>
      </div>

      <div className='hidden w-[5%] md:block'></div>
    </div>
  )
}
