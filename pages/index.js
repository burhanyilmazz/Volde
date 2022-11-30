/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import Image from 'next/image'
import classNames from 'classnames';

import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Layout } from '../layout'
import styles from '../assets/styles/Home.module.scss'
import { CardBlog } from '../components';

export default function Home() {

  return (
    <>
      <Layout>
        <section>
          <h1>Home</h1>

          <section className={styles['blog']}>
            <div className='container-fluid'>
              <h2>Blog</h2>
              <div className={styles['blog__buttons']}>
                
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={'auto'}
              spaceBetween={40}
              navigation
              loop
              className={classNames(styles['slider__carousel'], 'slider__carousel')}
            >
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
              <SwiperSlide><CardBlog /></SwiperSlide>
            </Swiper>
          </section>
          
        </section>
      </Layout>
    </>
  )
}
