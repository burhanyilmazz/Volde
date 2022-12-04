/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import Image from 'next/image'

import "swiper/css";
import 'swiper/css/pagination';

import styles from './Carousel.module.scss';
import classNames from 'classnames';

export const Carousel = (props) => {
  const { data, className } = props;
  
  return (
    <div className={styles['carousel']}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            const slides = document.querySelectorAll('.carousel .swiper-slide');

            return '<span class="' + className + '"><img src=' + slides[index].dataset.thumb + '></span>';
          },
        }}
        className={classNames('carousel', className)}
      >
        <SwiperSlide className={styles['carousel__slide']} data-thumb='/images/carousel/slide-1/thumb.png'>
          <div className={styles['slide-content']}>
            <div className={styles['slide-content__title']}>more is possible</div>
            <div className={styles['slide-content__text']}><Image src={'/images/carousel/slide-1/text.png'} width={995} height={345} alt={'hassas dozajlama'} /></div>
            <div className={styles['slide-content__hand']}><Image src={'/images/carousel/slide-1/hand.png'} width={1920} height={751} alt={'hassas dozajlama'} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['carousel__slide']} data-thumb='/images/carousel/slide-2/thumb.png'>
          <div className={styles['slide-content']}>
            <div className={styles['slide-content__title']}>more is possible</div>
            <div className={styles['slide-content__text']}><Image src={'/images/carousel/slide-2/text.png'} width={707} height={358} alt={'güvenli taşıma'} /></div>
            <div className={styles['slide-content__hand']}><Image src={'/images/carousel/slide-2/hand.png'} width={1920} height={771} alt={'güvenli taşıma'} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['carousel__slide']} data-thumb='/images/carousel/slide-3/thumb.png'>
          <div className={styles['slide-content']}>
            <div className={styles['slide-content__title']}>more is possible</div>
            <div className={styles['slide-content__text']}><Image src={'/images/carousel/slide-3/text.png'} width={889} height={317} alt={'pratik stoklama'} /></div>
            <div className={styles['slide-content__hand']}><Image src={'/images/carousel/slide-3/hand.png'} width={1920} height={811} alt={'pratik stoklama'} /></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

Carousel.propTypes = {
	data: PropTypes.array,
  className: PropTypes.string
};