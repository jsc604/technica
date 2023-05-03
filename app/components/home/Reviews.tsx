'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { formatDate } from '@/helpers/formatDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface ReviewsCarouselProps {
  reviewData: any;
}

type review = {
  author_name: string,
  rating: number,
  text: string,
  time: number,
  relative_time_description: string,
  profile_photo_url: string
}

interface StarRatingProps {
  rating: number;
}

const Reviews: React.FC<ReviewsCarouselProps> = ({ reviewData }) => {

  const reviews = reviewData.result.reviews;
  const rating = reviewData.result.rating;
  const totalRaters = reviewData.result.user_ratings_total;
  console.log('reviewData', reviewData);

  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className='fa-solid fa-star'
          style={{ color: i <= rating ? 'gold' : 'white' }}
        />
      );
    }

    return <div className='text-center'>{stars}</div>;
  };

  return (
    <div className='my-20'>
      <h2 className='text-4xl sm:text-5xl mx-auto text-center font-semibold mb-4 w-11/12'>Why Our Customers Love Us</h2>
      <h2 className='text-2xl sm:text-3xl mx-auto text-center font-semibold'>
        {rating} <FontAwesomeIcon icon={faStar} color='gold'/> from {totalRaters} Google Reviews
      </h2>
      <div className="w-full sm:w-4/5 mx-auto">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          effect="cube"
          className="w-full h-full rounded-3xl"
        >
          {reviews && reviews.map((review: review, index: React.Key) => (
            <SwiperSlide key={index} className='flex flex-col items-center justify-center h-full'>
              <div key={index} className='p-12 flex flex-col justify-between items-center'>
                <Image src={review.profile_photo_url} height={75} width={75} alt="google profile photo" />
                <div className='text-center text-lg'>{review.author_name}</div>
                <StarRating rating={review.rating} />
                <div className='flex-grow'>{review.text}</div>
                <div className='flex justify-center items-center mt-6'>
                  <FontAwesomeIcon icon={faCalendarAlt} className='items-center' />&nbsp;
                  {formatDate(review.time)} -&nbsp;<span className='italic'>{review.relative_time_description}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
