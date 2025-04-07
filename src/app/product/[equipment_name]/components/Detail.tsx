import { PRODUCT } from '../data/constants'

export default function Detail({ equipment_name }: { equipment_name: string }) {
  return (
    <div className='relative z-30 space-y-9 md:space-y-12 bg-white px-[5%] pb-20 md:pb-32 pt-7 md:pt-20'>
      <div className='flex xs:flex-col xs:items-center xs:text-center'>
        <p className='font-raleway xs:pb-4 w-[45%] text-xl font-semibold md:text-4xl xs:text-center'>
          Description
        </p>

        <p className='md:w-[55%] md:text-justify text-xs md:text-base'>
          {PRODUCT[equipment_name].description}
        </p>
      </div>

      <div className='flex xs:flex-col xs:items-center xs:text-center'>
        <p className='font-raleway xs:pb-4 w-[45%] text-xl font-semibold md:text-4xl xs:text-center'>
          Advantage
        </p>

        <ul className='md:w-[55%] space-y-6 pl-5 text-justify text-xs md:text-base'>
          {PRODUCT[equipment_name].advantages}
        </ul>
      </div>
    </div>
  )
}
