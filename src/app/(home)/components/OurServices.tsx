import Image from 'next/image'
import { cn } from '@/lib/utils'

const SERVICES: string[] = [
  'Engineering Services',
  'Operate and Maintain',
  'Water and Wastewater Treatment Plant ~ Build, Operate, and Transfer',
  'Rental of Main Equipment ~ for coverage of Indonesia only',
  'EPC ~ for coverage of Indonesia only',
]

export default function HomeOurServices() {
  return (
    <div className='relative z-10 xs:mt-20 mt-32 flex xs:flex-col items-center justify-center px-4 flex-row md:px-0'>
      <div className='xs:w-full xs:text-center w-[45%] text-left'>
        <h2
          className={cn(
            'font-raleway mb-4 pb-2 pt-2 text-3xl font-bold leading-3 md:text-5xl md:leading-[70px]',
            'bg-gradient-to-r from-white via-[#ADD5FF] to-[#ADD5FF] bg-clip-text text-transparent'
          )}
        >
          Our Services
        </h2>

        {SERVICES.map((service) => (
          <div key={`service-list-${service}`} className='group relative'>
            <div className='w-full border-b-[1px] border-white py-5 hover:border-none hover:font-bold'>
              <p className='xs:text-sm pr-48 text-xl'>{service}</p>
            </div>
            <div
              className={cn(
                'h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent',
                'absolute bottom-0 left-0 hidden group-hover:block'
              )}
            ></div>
          </div>
        ))}
      </div>

      <div className='xs:hidden min-h-[200px] xs:w-full content-center rounded-md block w-[5%]'></div>
      <div className='xs:hidden min-h-[200px] xs:w-full content-center rounded-md block w-[30%]'>
        <div className='mx-auto h-[80%] w-[80%] content-center rounded-3xl bg-white/[0.32] p-4 shadow-[0px_0px_35px_5px_rgba(81,169,255,0.5)]'>
          <Image
            src='/assets/img/home/our-services/frame-image.svg'
            alt='code'
            width={0}
            height={0}
            className='mx-auto h-full w-full object-contain'
          />
        </div>
      </div>
    </div>
  )
}
