'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import type { CamperImage } from '@/types/camper';
import css from './CamperGallery.module.css';

type CamperGalleryProps = {
  gallery: CamperImage[];
};

const CamperGallery = ({ gallery }: CamperGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const sortedGallery = [...gallery].sort((a, b) => a.order - b.order);

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={css.mainSwiper}
      >
        {sortedGallery.map(image => (
          <SwiperSlide key={image.id}>
            <div className={css.mainImageWrapper}>
              <Image
                src={image.original}
                alt="Camper"
                fill
                sizes="638px"
                className={css.mainImage}
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={4}
        spaceBetween={8}
        watchSlidesProgress
        className={css.thumbsSwiper}
      >
        {sortedGallery.map(image => (
          <SwiperSlide key={image.id}>
            <div className={css.thumbWrapper}>
              <Image
                src={image.thumb}
                alt="Camper thumbnail"
                fill
                sizes="150px"
                className={css.thumbImage}
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
