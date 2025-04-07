import { cn } from '@/lib/utils'

export default function ProductTitle() {
  return (
    <div className='bg-product-title-our-products flex h-[300px] w-full items-center text-white md:h-[665px]'>
      <div className='relative z-30 px-[5%]'>
        <h1
          className={cn(
            'font-raleway relative z-30 w-fit pb-2 text-3xl font-semibold leading-tight md:text-6xl'
          )}
        >
          Our Products
        </h1>

        <h2 className='text-sm md:text-xl'>
          Ecosystem of technology and solutions
        </h2>
      </div>
    </div>
  )
}
