import Image from 'next/image'

export default function CaseStudyGraphs() {
  return (
    <div className='mb-10 md:mb-32 w-full space-y-12 px-[5%]'>
      <div className='relative flex flex-col items-center md:flex-row md:space-x-6'>
        <Image
          src='/assets/background/case-study/graphs/blue-radial.png'
          alt='radial-bg'
          width={0}
          height={0}
          className='absolute -left-[5.5%] top-20 md:top-1/2 z-10 h-[200%] w-auto -translate-y-1/2 object-contain opacity-[0.5] md:opacity-[1]'
        />

        <Image
          src='/assets/img/case-study/graphs/average-do-trends.svg'
          alt='average-dyssolved-oxygen-trends'
          width={0}
          height={0}
          className='relative z-30 h-auto w-auto object-contain md:w-[45%] xs:mb-4'
        />

        <div className='w-[7.5%]'></div>

        <div className='space-y-4 md:w-[47.5%]'>
          <Image
            src='/assets/img/case-study/graphs/graph-icon-blue.svg'
            alt='icon'
            width={20}
            height={20}
          />
          <p className='!mb-6 w-[90%] text-sm md:text-3xl font-semibold'>
            The graph shows daily average DO trends over two weeks:
          </p>
          <p className='text-xs md:text-lg'>
            Solid lines represent data from Week 1, while dashed lines indicate
            Week 2.
          </p>
          <p className='text-xs md:text-lg'>
            This visualization helps <b>compare dissolved oxygen variations</b>{' '}
            over time for water quality analysis{' '}
          </p>
          <p className='text-xs md:text-lg'>Result: Equivalent DO Readings</p>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row items-center md:space-x-6'>
        <Image
          src='/assets/background/case-study/graphs/green-radial.png'
          alt='radial-bg'
          width={0}
          height={0}
          className='absolute top-1/4 md:top-1/2 -right-[5.5%] -translate-y-1/2 w-auto h-[200%] object-contain z-10 opacity-[0.5] md:opacity-[1]'
        />
        
        <Image
          src='/assets/img/case-study/graphs/average-power-consumption-trends.svg'
          alt='average-dyssolved-oxygen-trends'
          width={0}
          height={0}
          className='relative md:w-[45%] h-auto w-auto object-contain z-30 md:hidden xs:mb-4'
        />

        <div className='w-full md:w-[47.5%] space-y-4 md:text-left'>
          <Image
            src='/assets/img/case-study/graphs/graph-icon-green.svg'
            alt='icon'
            width={20}
            height={20}
          />
          <p className='!mb-6 w-full md:w-[90%] text-sm md:text-3xl font-semibold'>
            The graph shows daily power consumption trends before and after automation:
          </p>
          <div>
            <p className='text-xs md:text-lg'><b>Before Automation</b> (Jan 11–16, 2025):</p>
            <p className='text-xs md:text-lg'>Steady consumption, peaking on Jan 14 (<b>~165 kW</b>).</p>
          </div>
          <div>
            <p className='text-xs md:text-lg'><b>After Automation</b> (Jan 18–23, 2025):</p>
            <p className='text-xs md:text-lg'>Significant reduction, lowest on Jan 21 (<b>~120 kW</b>).</p>
          </div>
          <p className='text-xs md:text-lg'>Insight: Automation improved energy efficiency while maintaining same DO performance</p>
        </div>

        <div className='w-[7.5%]'></div>

        <Image
          src='/assets/img/case-study/graphs/average-power-consumption-trends.svg'
          alt='average-dyssolved-oxygen-trends'
          width={0}
          height={0}
          className='relative w-[45%] h-auto object-contain z-30 xs:hidden'
        />
      </div>
    </div>
  )
}
