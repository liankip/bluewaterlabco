import Image from 'next/image'

export default function ContactUsTitle() {
  return (
    <div className='relative flex h-[296px] w-full flex-col items-center justify-center bg-black text-center text-white md:h-[496px]'>
      <h1 className='font-raleway relative z-30 mt-24 text-xl md:text-5xl font-semibold'>Contact Us</h1>

      <Image
        src='/assets/background/contact-us/title/bg-curtain.png'
        alt='curtain-bg'
        width={0}
        height={0}
        className='absolute left-0 top-0 z-10 w-full object-cover md:h-full'
      />

      <div className='absolute -bottom-[10%] left-0 z-20 w-full md:-bottom-[13.5%] xs:-bottom-[12%]'>
        <div className='relative h-[269px] w-full md:h-[430px]'>
          <Image
            src='/assets/background/contact-us/title/bg-glowing-light.png'
            alt='glowing-light-bg'
            className='h-full w-full object-cover'
            fill
          />
        </div>
      </div>
    </div>
  )
}
