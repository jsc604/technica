'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// // Carousel images
import corvette from '../../../assets/images/corvette.jpeg';
import cayenneIntRear from '../../../assets/images/cayenne-int-rear.jpeg';
import cayenneTrunk from '../../../assets/images/cayenne-trunk.jpeg';
import teslaY from '../../../assets/images/tesla-y-side.jpeg';
import benzFront from '../../../assets/images/benz-front.jpeg';
import benzWheel from '../../../assets/images/benz-wheel.jpeg';
import biturbo from '../../../assets/images/biturbo.jpeg';
import lexusFront from '../../../assets/images/lexus-front.jpeg';
import lexus from '../../../assets/images/lexus.jpeg';
import skylineSide from '../../../assets/images/skyline-side.jpeg';
import ram from '../../../assets/images/ram badge 2.jpeg';
import bentleyBack from '../../../assets/images/bentley back.jpg';
import skylineFront from '../../../assets/images/skyline front.jpeg';
import camaro from '../../../assets/images/camaro.jpeg';
import camaro2 from '../../../assets/images/camaro 2.jpeg';
import q5 from '../../../assets/images/audi q5.jpg';
import bentley from '../../../assets/images/bentley3.png';

const images = [bentley, bentleyBack, corvette, cayenneIntRear, cayenneTrunk, teslaY, benzFront, benzWheel, biturbo, lexusFront, lexus, q5, skylineFront, skylineSide, camaro, camaro2, ram];

const GalleryCarousel = () => {

  return (
    <div className="h-72 md:h-96 ml:h-100 lg:h-104 xl:h-112">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        effect="cube"
        className="w-full h-full rounded-3xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              className='object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
