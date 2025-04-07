import Image from 'next/image'

export default function AboutUsDescription() {
  return (
    <div className='mb-16 mt-12 md:mt-20'>
      <p className='mx-auto mb-14 w-[70%] text-center text-xs md:text-lg'>
        Every manufacturing activities requires reliable source of water for
        production. At the same time, water is increasingly scarce. Without
        reliable water and wastewater technology, the problem increasingly
        deteriorates. Developing countries have implemented strict and punishing
        measures for responsible operations of factories. Manufacturing is in
        dilemma.
      </p>

      <div className='flex flex-col items-center justify-between gap-10 px-[5%] md:flex-row md:gap-52'>
        <div className='space-y-6 md:text-left'>
          <h2 className='font-bold text-sm md:text-lg'>
            Bluewave is committed to harness the power of technology into
            conventional operation.
          </h2>

          <p className='text-xs md:text-lg'>
            The extensive experiences in rural and urban industrial setting in
            developing countries gives insight to develop the right technology.
          </p>

          <ul className='ml-4 list-outside list-disc text-xs md:text-lg'>
            <li>Bluewave offers 100% success rate of wastewater management.</li>
            <li>
              It is end-to-end from cost-effective and highly practical
              engineering interventions to smart BI monitoring and AI-powered
              control wastewater facilities.
            </li>
          </ul>
        </div>

        <Image
          src='/assets/img/about-us/description/frame-image.svg'
          alt='wwtp'
          width={0}
          height={0}
          className='h-[220px] md:h-auto w-full md:w-[360px] object-cover md:object-contain'
        />
      </div>
    </div>
  )
}
