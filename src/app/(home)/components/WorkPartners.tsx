'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const logoSourcesUp: string[] = [
  '/assets/img/home/work-partners/aquahelix.svg',
  '/assets/img/home/work-partners/sne.svg',
  '/assets/img/home/work-partners/mayora.svg',
  '/assets/img/home/work-partners/indomilk.svg',
  '/assets/img/home/work-partners/toba-pulp-lestari.svg',
  '/assets/img/home/work-partners/kim.svg',
]

const logoSourcesDown: string[] = [
  '/assets/img/home/work-partners/kim.svg',
  '/assets/img/home/work-partners/asian-agri.svg',
  '/assets/img/home/work-partners/wilmar.svg',
  '/assets/img/home/work-partners/unilever.svg',
  '/assets/img/home/work-partners/sinarmas.svg',
  '/assets/img/home/work-partners/april.svg',
]

export default function HomeWorkPartners() {
  return (
    <div className='my-10 px-6 lg:my-32 lg:px-12'>
      <h2
        className={cn(
          'font-raleway mx-auto w-fit pb-2 text-center text-2xl font-bold md:text-5xl',
          'bg-gradient-to-r from-white via-[#ADD5FF] to-[#ADD5FF] bg-clip-text text-transparent' // text masking
        )}
      >
        Who We Work With
      </h2>

      <p className='mb-4 text-center text-xs text-gray-300 lg:mb-16 lg:mt-5 lg:text-lg'>
        Sustainable Factories and Estates that have worked with Bluewave
        wastewater technology
      </p>

      <div className='relative'>
        <div className='left-0 top-0 h-full w-20 bg-gradient-to-r from-black via-[#00000090] to-transparent lg:absolute'></div>
        <div className='right-0 top-0 h-full w-20 bg-gradient-to-l from-black via-[#00000090] to-transparent lg:absolute'></div>

        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          modules={[Autoplay]}
          direction='horizontal'
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className='w-full'
        >
          {logoSourcesUp.map((src, index) => (
            <SwiperSlide
              key={index}
              className='flex items-center justify-center'
            >
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className='h-20 w-40 object-contain sm:h-16 sm:w-32 lg:h-20 lg:w-40'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          speed={3000}
          modules={[Autoplay]}
          direction='horizontal'
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className='w-full'
        >
          {logoSourcesDown.map((src, index) => (
            <SwiperSlide
              key={index}
              className='flex items-center justify-center'
            >
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className='h-20 w-40 object-contain sm:h-16 sm:w-32 lg:h-20 lg:w-40'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
