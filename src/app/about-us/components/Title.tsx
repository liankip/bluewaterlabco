import Image from 'next/image'

export default function AboutUsTitle() {
  return (
    <div className='relative space-y-4 pb-12 pt-16 text-center md:pb-56 md:pt-64'>
      <Image
        src='/assets/background/about-us/title/top-bottom-lights.png'
        alt='lights'
        width={0}
        height={0}
        className='object-stretch absolute left-0 top-0 h-full w-auto'
      />
      <Image
        src='/assets/background/about-us/about/rounded-white-border.svg'
        alt='radial-border'
        width={0}
        height={0}
        className='object-stretch absolute left-0 top-0 z-10 h-auto w-full'
      />
      <Image
        src='/assets/background/about-us/about/rounded-white-border-larger.svg'
        alt='radial-border'
        width={0}
        height={0}
        className='object-stretch absolute left-0 top-0 z-10 h-auto w-full'
      />

      <p className='text-sm md:text-2xl'>About Us</p>

      <h1 className='font-raleway relative z-30 text-2xl font-semibold md:text-6xl'>
        Data-driven Industrial
        <span className='block mt-2'>Wastewater Management</span>
      </h1>
    </div>
  )
}
