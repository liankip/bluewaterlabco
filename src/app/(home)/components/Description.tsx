import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function HomeDescription() {
  return (
    <div className='relative z-30 mt-12 md:mt-24 mb-16 text-center'>
      <h1 className='font-raleway font-semibold md:text-3xl text-xs leading-3 md:leading-[70px]'>
        Smarter Industrial Wastewater Management
      </h1>

      <h2
        className={cn(
          'font-raleway font-bold text-xl md:text-5xl mt-4 mb-2 md:mb-8 pb-2',
          'bg-gradient-to-r from-white via-[#ADD5FF] to-[#ADD5FF] bg-clip-text text-transparent', // text masking
        )}
      >
        for cost-saving, responsible and sustainable factory
      </h2>

      <p className='mx-auto mb-12 w-[83%] xs:text-xs text-lg'>
        Bluewater Lab is established in 2020 with focus on industrial wastewater
        challenges of small-medium size manufacturing in Sumatra. Manufacturing
        in Sumatra is characterized by commodity-based industry. Such industry
        directly impacts indigenous people and natures. Operate responsibly is a
        must. However, it requires the right technology.
      </p>

      <Link href='/about-us'>
        <Button variant='outline' className='w-49 h-9 xs:w-36 lg:h-12'>
          {`About Us >`}
        </Button>
      </Link>
    </div>
  )
}
