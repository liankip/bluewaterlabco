import { cn } from '@/lib/utils'
import Image from 'next/image'

const logoSources: string[] = [
  '/assets/img/home/technology-partners/teco.svg',
  '/assets/img/home/technology-partners/rockwell-automation.svg',
]

export default function HomeTechnologyPartners() {
  return (
    <div className='mb-20 lg:mb-36 text-center'>
      <h2
        className={cn(
          'font-raleway mx-auto mb-6 md:mb-16 w-fit pb-2 text-center text-2xl font-bold md:text-5xl',
          'bg-gradient-to-r from-white via-[#ADD5FF] to-[#ADD5FF] bg-clip-text text-transparent' // text masking
        )}
      >
        Technology Partners
      </h2>

      <div className='flex items-center justify-center gap-8'>
        {logoSources.map((logo) => (
          <Image
            key={`work-partner-${logo}`}
            src={logo}
            alt={logo
              .replace('/assets/img/home/work-partners/', '')
              .replace('.svg', '')}
            width={120}
            height={40}
            className='h-8 w-auto object-contain lg:h-16'
          />
        ))}
      </div>
    </div>
  )
}
