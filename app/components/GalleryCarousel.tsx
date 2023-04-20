'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const GalleryCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
    'https://images.unsplash.com/photo-1529429617124-95b109e86bb8',
    'https://images.unsplash.com/photo-1561948955-570b270e7c36',
    'https://images.unsplash.com/photo-1600369671608-7aad7dac5236'
  ];

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      effect="cube"
      className="w-full h-full "
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GalleryCarousel;
