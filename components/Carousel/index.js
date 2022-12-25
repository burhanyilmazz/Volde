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

            return '<span class="' + className + '"><img src="' + slides[index].dataset.thumb + '" alt="slide-thumb" fetchpriority="high" loading="lazy"></span>';
          },
        }}
        className={classNames('carousel', className)}
      >
        { data.map((item, index) => <SwiperSlide key={index} className={styles['carousel__slide']} data-thumb={item.third_image}>
          <div className={styles['slide-content']}>
            <div className={styles['slide-content__title']}>{item.title}</div>
            <div className={styles['slide-content__text']}><Image src={item.first_image} width={995} height={345} alt={item.title} priority={index === 0 ? true : false} /></div>
            <div className={styles['slide-content__hand']}>
              <picture>
                <source media="(max-width: 1024px)" srcSet={item.second_image_mobile} />
                <Image src={item.second_image} width={1920} height={751} alt={item.title} priority={index === 0 ? true : false} fetchpriority="high" />
              </picture>
            </div>
          </div>
        </SwiperSlide> )}
      </Swiper>
    </div>
  )
}

Carousel.propTypes = {
	data: PropTypes.array,
  className: PropTypes.string
};