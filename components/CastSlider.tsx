'use client'

import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Cast } from '@/types/Cast'
import Image from 'next/image'
import { baseURL } from '@/utils/baseUrl'
import 'swiper/css'
import { Placeholder } from '@/components/Placeholder'

interface CastSliderProps {
  cast: Cast[]
}

export const CastSlider: React.FC<CastSliderProps> = ({ cast }) => {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    register()

    const params = {
      slidesPerView: 6,
      spaceBetween: 20,
    }

    if (!swiperRef.current) return

    Object.assign(swiperRef.current, params)
    swiperRef.current.initialize()
  }, [])
  return (
    <div className="mt-10 h-[346px] cursor-grab">
      <swiper-container init={false} ref={swiperRef}>
        {cast.map((cast) => (
          <swiper-slide key={`${cast.cast_id}_${cast.name}`}>
            {cast?.profile_path !== null ? (
              <Image
                src={`${baseURL}/${cast?.profile_path}`}
                alt={cast?.name || 'person picture'}
                width={240}
                height={560}
                style={{ objectFit: 'cover' }}
                className="h-[300px] cursor-pointer"
              />
            ) : (
              <Placeholder />
            )}
            <p className="mt-2">{cast.name}</p>
            <p className="text-sm leading-tight text-neutral-400">
              {cast.character}
            </p>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}
