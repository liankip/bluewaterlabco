import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { cn } from '@/lib/utils'

export default function ProductEquipments() {
  return (
    <div className='mb-16 md:mb-24 mt-12 md:mt-16 w-full'>
      <div className='font-raleway space-y-0.5 text-center text-4xl font-semibold'>
        <h1 className='text-base md:text-5xl'>
          We make equipment and machineries for
        </h1>
        <h1 className='text-base text-brand-darkblue md:text-5xl'>
          wastewater treatment plants
        </h1>
      </div>

      <div className='mb-4 mt-16 flex w-full flex-col border-y-[1px] border-[#999999] md:flex-row xs:space-y-4'>
        <Link
          href='/product/ahl-surface-aerator'
          className={cn(
            'group relative h-96 flex-1 space-y-2 border-r-[1px] border-[#999999] px-[5%] pt-10 pb-36 md:py-10',
            'md:hover:cursor-pointer md:hover:bg-[radial-gradient(79.69%_48.42%_at_50%_51.58%,_#0E4F94_0%,_#000000_100%)] md:hover:text-white xs:bg-[radial-gradient(79.69%_48.42%_at_50%_51.58%,_#0E4F94_0%,_#000000_100%)]'
          )}
        >
          <div className='flex justify-between gap-8'>
            <p className='font-raleway text-xl md:text-3xl md:hover:text-white xs:text-white'>
              AHL Surface Aerator
            </p>
            <MdOutlineArrowOutward className='-mt-1 text-[3rem] text-white' />
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-xs text-white md:text-base'>
              High Performance Surface Aerators are suitable for
              <br />
              effluent ponds of communal industrial wastewater
              <br />
              facilities or organic-loaded aerobic effluent pond.
              <br />
              AHL improves Dissolved Oxygen effectively with
              <br />
              5-6 KgO2/ KWh efficiency
            </p>

            <Image
              src='/assets/img/product/equipments/ahl-surface-aerator.svg'
              alt='ahl-surface-aerator'
              width={0}
              height={0}
              className='absolute bottom-4 right-4 z-10 h-[45%] w-auto object-contain md:hidden md:h-[65%] md:group-hover:block'
            />
          </div>
        </Link>

        <Link
          href='/product/daf'
          className={cn(
            'group relative h-96 flex-1 space-y-2 px-[5%] pt-10 pb-36 md:py-10 v',
            'hover:text-white md:hover:cursor-pointer md:hover:bg-[radial-gradient(79.69%_48.42%_at_50%_51.58%,_#0E4F94_0%,_#000000_100%)] xs:bg-[radial-gradient(79.69%_48.42%_at_50%_51.58%,_#0E4F94_0%,_#000000_100%)]'
          )}
        >
          <div className='flex justify-between gap-8'>
            <p className='font-raleway text-xl md:text-3xl md:hover:text-white xs:text-white'>
              Dissolved Air Flotation
            </p>
            <MdOutlineArrowOutward className='-mt-1 text-[3rem] text-white' />
          </div>

          <p className='text-xs text-white md:text-base'>
            Our Dissolved Air Floatation (DAF) is manufactured
            <br />
            locally for our customer’s unique requirement. It is
            <br />
            high performance and robust in rough environment.
          </p>

          <Image
            src='/assets/img/product/equipments/daf.svg'
            alt='daf'
            width={0}
            height={0}
            className='absolute bottom-4 right-4 z-10 md:hidden h-[45%] w-auto object-contain group-hover:block md:h-[57.5%]'
          />
        </Link>
      </div>

      <p className='text-xs text-center px-[5%] md:text-xl'>*for coverage of Indonesia only</p>
    </div>
  )
}
