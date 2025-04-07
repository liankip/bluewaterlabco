const OBJECTIVES = [
  {
    title: 'Assess Pre-Automation Energy Consumption',
    description:
      'Evaluate energy usage patterns before implementing automation dynamic configuration.',
  },
  {
    title: 'Compare Post-Automation Efficiency',
    description:
      'Analyze the improvements in energy efficiency after automation dynamic configuration.',
  },
]

export default function CaseStudyIntroduction() {
  return (
    <div className='w-full px-[5%] xs:py-10 md:py-14'>
      <div
        className={`
          relative mx-auto w-[90%] xs:w-[100%] rounded-[15px] border-[2px] border-brand-blue
          text-center space-y-6 px-3 pb-8 sm:px-16 sm:pb-12 sm:pt-14 md:pt-10
        `}
      >
        <p
          className={`
            absolute -top-3 md:-top-5 left-1/2 !w-max -translate-x-1/2 bg-white
            font-raleway px-6 sm:px-10 text-base font-semibold sm:text-5xl`}
        >
          PT. Kawasan Industri Medan
        </p>
        <p className='text-xs sm:text-lg'>
          Improved Dissolved Oxygen to 3 ppm ~ 5 ppm of communal wastewater
          facilities in 2 weeks with reduced power consumption by 50%. The
          implementation of Bluewave PowerSave further drives efficiency by 23%.
        </p>
        <p className='text-xs sm:text-lg'>
          Chemical consumption drops by half. Overhead drops to less than 30%.
          Annual saving of SGD $ 65.000,- turns utility department of the
          state-owned company into a highly efficient and productive exemplary
          showcase in Indonesia industrial estates.
        </p>
      </div>

      <div className='flex flex-col gap-6 mt-10 sm:mt-16 sm:flex-row sm:gap-0 md:mb-20 md:mt-36'>
        <div
          className={`
            bg-case-study-objective flex min-h-[100px] md:min-h-[224px] w-full sm:w-[35%]
            flex-col justify-center md:space-y-2 pl-[35%] md:pl-[11%] pr-[1%]
            rounded-[15px] md:rounded-3xl border-[1px] border-brand-yellow
          `}
        >
          <p className='text-xl font-semibold md:text-4xl'>Objective</p>
          <p className='text-xs md:text-lg'>What This Study Aims to Achieve</p>
        </div>
        <div className='hidden md:block w-[2.5%]'></div>
        <div className='content-center space-y-6 md:w-[62.5%]'>
          {OBJECTIVES.map((objective, idx) => (
            <div key={`case-study-objective-${idx}`} className='flex gap-2'>
              <div className='relative mt-1 h-4 w-6 rounded-full bg-brand-yellow md:h-6 md:w-6'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg xs:text-xs'>
                  {idx + 1}
                </p>
              </div>

              <div>
                <p className='text-xs font-semibold md:text-lg'>
                  {objective.title}
                </p>
                <p className='text-xs md:text-lg'>{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-6 md:mb-20 mt-6 sm:mt-16 sm:flex-row sm:gap-0 md:mt-36'>
        <div className='bg-case-study-methodology flex min-h-[100px] w-full flex-col justify-center space-y-1 md:space-y-2 rounded-[15px] border-[1px] border-brand-blue pl-[3%] pr-[2%] sm:w-[35%] md:min-h-[224px] md:rounded-3xl'>
          <p className='text-xl font-semibold md:text-4xl'>Methodology</p>
          <p className='text-xs md:text-lg'>How the Data Was Collected</p>
        </div>

        <div className='flex w-[92.5%] xs:ml-6 flex-col gap-8 md:w-[65%] md:flex-row xs:gap-6'>
          <div className='hidden md:block w-full sm:w-[2%]'></div>

          <div className='flex-1 space-y-6 max-w-[92.5%] md:max-w-[100%]'>
            <div className='-space-y-1 md:space-y-0'>
              <p className='text-xs font-semibold md:text-lg'>
                Before Dynamic Configuration
              </p>
              <ul className='list-outside list-disc -space-y-1 md:space-y-0 marker:text-sm md:marker:text-xl marker:text-brand-blue'>
                <li className='text-xs leading-tight md:text-lg'>
                  Data collected from Jan 11, 2025 to Jan 16, 2025
                </li>
                <li className='text-xs leading-tight md:text-lg'>
                  Included data from PM & DO meters
                </li>
              </ul>
            </div>

            <div className='block md:hidden -space-y-1 md:space-y-0'>
              <p className='text-xs font-semibold md:text-lg'>
                After Dynamic Configuration
              </p>
              <div>
                <ul className='list-outside list-disc -space-y-1 md:space-y-0 marker:text-sm md:marker:text-xl marker:text-brand-blue'>
                  <li className='text-xs leading-tight md:text-lg'>
                    Data collected from Jan 18, 2025 to Feb 23, 2025
                  </li>
                  <li className='text-xs leading-tight md:text-lg'>
                    Included data from PM & DO meters
                  </li>
                </ul>
              </div>
            </div>

            <div className='-space-y-1 md:space-y-0'>
              <p className='text-xs font-semibold md:text-lg'>
                Analysis Methodology
              </p>
              <ul className='list-outside list-disc -space-y-1 md:space-y-0 marker:text-sm md:marker:text-xl marker:text-brand-blue'>
                <li className='text-xs leading-tight md:text-lg'>
                  Measurement of Power & DO
                </li>
                <li className='text-xs leading-tight md:text-lg'>
                  Benchmarking energy consumption
                </li>
                <li className='text-xs leading-tight md:text-lg'>
                  Statistical comparison between data before and after dynamic
                  configuration
                </li>
              </ul>
            </div>
          </div>

          <div className='hidden md:block flex-1'>
            <p className='font-semibold md:text-lg'>
              After Dynamic Configuration
            </p>
            <div>
              <ul className='list-outside list-disc marker:text-xl marker:text-brand-blue'>
                <li className='leading-tight md:text-lg'>
                  Data collected from Jan 18, 2025 to Feb 23, 2025
                </li>
                <li className='leading-tight md:text-lg'>
                  Included data from PM & DO meters
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
