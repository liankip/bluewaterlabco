'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Image from 'next/image'

const carousel = [
  '/assets/img/home/carousel/1.svg',
  '/assets/img/home/carousel/2.svg',
  '/assets/img/home/carousel/3.svg',
  '/assets/img/home/carousel/4.svg',
  '/assets/img/home/carousel/5.svg',
]

export default function HomeCarousel() {
  return (
    <div className='relative z-10 mx-auto w-[90%] max-w-5xl space-y-10 lg:w-[90%]'>
      <section className='py-10'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          centeredSlides={true}
          loop={true}
          spaceBetween={0}
          freeMode={true}
          direction={'horizontal'}
          coverflowEffect={{
            rotate: 0,
            stretch: 500,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {carousel.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-64 w-full xg:h-62 md:h-62 xs:h-32'>
                <Image
                  src={image}
                  alt={'carousel-' + index}
                  fill
                  className='overflow-hidden object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className='slider-control'>
        <div className='swiper-pagination'></div>
      </div>

      <Image
        src='/assets/background/carousel/bg-ellipse.svg'
        alt='radiant-background'
        width={1500}
        height={100}
        className='absolute bottom-[10%] left-1/2 top-1/2 z-0 h-auto w-full -translate-x-1/2 -translate-y-1/2 object-contain'
      />
    </div>
  )
}
