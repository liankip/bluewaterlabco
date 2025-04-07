import Image from 'next/image'
import { cn } from '@/lib/utils'

const RESULTS = [
  {
    src: '/assets/img/about-us/result/team.svg',
    description:
      'Our customers operate in full compliance to government regulations. It is also socially and environmentally responsible.',
  },
  {
    src: '/assets/img/about-us/result/chart.svg',
    description: 'Resource recovery offers less than 5 years ROI ',
  },
  {
    src: '/assets/img/about-us/result/factories.svg',
    description:
      'Factories focus on core operation, no more legal and social disputes. Saving is at hand. ',
  },
]

export default function AboutUsResult() {
  return (
    <div className='mb-12 md:mb-44'>
      <h2
        className={cn(
          'font-raleway mx-auto mb-6 w-fit pb-2 text-center text-2xl font-semibold md:mb-14 md:text-5xl',
          'bg-gradient-to-r from-white via-[#ADD5FF] to-[#ADD5FF] bg-clip-text text-transparent' // text masking
        )}
      >
        Result
      </h2>

      <div className='flex flex-wrap gap-4 md:gap-3 xl:gap-4 px-[7.5%] md:justify-between'>
        {RESULTS.map((result) => (
          <div
            key={`result-card-${result.src}`}
            className='result-card w-full md:w-[32%] xl:w-[30%] 2xl:w-[28%] md:min-h-[300px] px-8 py-8 md:py-10'
          >
            <Image
              src={result.src}
              alt='result-icon'
              width={0}
              height={0}
              className='h-auto w-[55px] md:w-[88px] object-contain mx-auto md:mx-0'
            />

            <p className='mt-6 md:mt-12 text-xs md:text-sm'>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
