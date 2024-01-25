'use client'

import { useEffect, useRef } from 'react'

import { CarouselItem } from '@/components/Carousel/CarouselItem'
import { SectionTitle } from '@/components/SectionTitle'

import { register } from 'swiper/element/bundle'
import { Container } from '@/components/Container'

interface CarouselListRowProps {
  list: any[]
  title: string
  isHomepage?: boolean
}

export const CarouselListRow: React.FC<CarouselListRowProps> = ({
  list,
  title,
  isHomepage = false,
}) => {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    register()

    const params = {
      slidesPerView: 6,
      spaceBetween: 20,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            height: 100%;
            top: 22px;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            color: #fff;
            z-index: 50;
          }
          
          .swiper-button-next {
            right: 0;
          }

          .swiper-button-prev {
            left: 0;
          }

          .swiper-button-prev {
            height: 100%;
            top: 22px;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            color: #fff;
          }

          .swiper-button-next svg,
          .swiper-button-prev svg {
            height: 24px;
          }
        `,
      ],
    }

    if (!swiperRef.current) return

    Object.assign(swiperRef.current, params)
    swiperRef.current.initialize()
  }, [])

  return (
    <div className="mt-8">
      {isHomepage ? (
        <div className="px-24">
          <SectionTitle title={title} />
        </div>
      ) : (
        <SectionTitle title={title} />
      )}
      <div className="slider relative overflow-hidden">
        <swiper-container init={false} navigation={true} ref={swiperRef}>
          {list.map((movie, index) => (
            <swiper-slide key={`${movie.title}_${index}`}>
              <CarouselItem movie={movie} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  )
}
