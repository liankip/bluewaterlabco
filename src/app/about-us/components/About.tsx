import Image from 'next/image'

export default function AboutUsAbout() {
  return (
    <div className='relative z-30 mb-24 md:mb-44 flex flex-col px-4 sm:px-8 lg:flex-row'>
      <div className='lg:w-[5%]'></div>

      <div className='z-30 space-y-4 md:space-y-8 lg:w-[90%]'>
        <div className='flex md:min-h-[330px] 2xl:min-h-[375px] w-full flex-col lg:flex-row'>
          <div
            className={`
              relative w-full lg:w-[65%] pt-6 pb-10 pl-10 pr-6 md:px-6 md:py-8 lg:py-16 lg:pl-24 lg:pr-12 space-y-3 md:space-y-6 content-center
              rounded-bl-[30px] rounded-tr-[30px] border border-white/[0.3] lg:rounded-bl-[50px] lg:rounded-tr-[50px]
            `}
          >
            <h2 className='text-xl font-semibold lg:text-4xl'>
              About Bluewater Lab
            </h2>
            <p className='text-xs md:text-sm lg:text-lg'>
              Bluewater Lab is established in 2020 with focus on industrial
              wastewater challenges of small-medium size manufacturing in
              Sumatra. Manufacturing in Sumatra is characterized by
              commodity-based industry. Such industry directly impacts
              indigenous people and natures. Operate responsibly is a must.
              However, it requires the right technology.
            </p>
            <Image
              src='/assets/img/about-us/about/home-icon-mobile.png'
              alt='home'
              width={500}
              height={500}
              className='block md:hidden absolute bottom-0 right-0 h-44 w-auto object-contain'
              loading='eager'
            />
          </div>
          <div className='md:w-[2.5%] xs:hidden'></div>
          <div className='about-home-icon hidden h-40 w-full rounded-br-[30px] rounded-tl-[30px] border border-white/[0.3] md:block lg:h-auto lg:w-[32.5%] lg:rounded-br-[50px] lg:rounded-tl-[50px]'></div>
        </div>

        <div className='about-insight-icon md:!bg-none flex w-full flex-col md:min-h-[330px] 2xl:min-h-[375px] lg:flex-row'>
          <div className='about-insight-icon hidden h-40 w-full rounded-br-[30px] rounded-tl-[30px] border border-white/[0.3] md:block lg:h-auto lg:w-[32.5%] lg:rounded-br-[50px] lg:rounded-tl-[50px]'></div>
          <div className='md:w-[2.5%] xs:hidden'></div>
          <div
            className={`
              w-full lg:w-[65%] pl-10 pr-6 py-6 md:px-6 md:py-8 lg:px-24 lg:py-16 content-center
              rounded-bl-[30px] rounded-tr-[30px] border border-white/[0.3] lg:rounded-bl-[50px] lg:rounded-tr-[50px]
            `}
          >
            <p className='text-xs md:text-sm lg:text-lg'>
              In Bluewater Lab we have expertises that understand production
              site precisely. We understand the people and we are committed to
              develop sustainable and lasting solutions not only for the company
              but also for the community.
            </p>
          </div>
        </div>

        <div className='about-medal-icon flex w-full flex-col md:min-h-[330px] 2xl:min-h-[375px] lg:flex-row'>
          <div
            className={`
              w-full lg:w-[65%] pl-10 pr-6 py-6 md:px-6 md:py-8 lg:py-16 lg:pl-24 lg:pr-12 content-center
              rounded-bl-[30px] rounded-tr-[30px] border border-white/[0.3] lg:rounded-bl-[50px] lg:rounded-tr-[50px]
            `}
          >
            <p className='text-xs md:text-sm lg:text-lg'>
              In 2025 we have deployed our solutions to more than 40 factories
              in Indonesia and treated 4.2 billion liters of industrial
              wastewater across industries. Bluewater Lab has local capabilities
              for EPC, System Integration, Test Labs and O&M services across
              Indonesia with offices and labs in Jakarta, Medan and Surabaya.
            </p>
          </div>
          <div className='md:w-[2.5%] xs:hidden'></div>
          <div className='about-medal-bg relative hidden min-h-[250px] w-full rounded-br-[30px] rounded-tl-[30px] border border-white/[0.3] px-6 py-6 md:block lg:min-h-[350px] lg:w-[32.5%] lg:rounded-br-[50px] lg:rounded-tl-[50px] lg:px-8 lg:py-8'>
            <p className='mb-2 text-xs md:text-sm lg:text-lg'>Treated</p>
            <p className='-mb-1 text-3xl font-semibold lg:text-5xl'>
              4.2 billion
            </p>
            <p className='text-sm text-brand-yellow lg:text-lg'>
              liters of industrial wastewater
            </p>

            <Image
              src='/assets/img/about-us/about/medal-icon.png'
              alt='medal'
              width={500}
              height={500}
              className='absolute -bottom-16 -right-10 h-[275px] w-auto object-contain'
              loading='eager'
            />
          </div>
        </div>
      </div>

      <div className='lg:w-[5%]'></div>

      <Image
        src='/assets/background/about-us/about/bg-radial-gradient.png'
        alt='radial-gradient'
        width={0}
        height={0}
        className='absolute left-0 top-0 z-10 h-full w-auto object-contain'
      />
    </div>
  )
}
