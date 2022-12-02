import Image from 'next/image'
import classNames from 'classnames';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'react-tabs/style/react-tabs.css';

import { Layout } from '../layout'
import styles from '../assets/styles/Home.module.scss'
import { Button, Button2, CardBlog, Card, Carousel } from '../components';

export default function Home() {

  return (
    <>
      <Layout>
        <section className={styles['carousel']}>
          <Carousel />
        </section>
        <section className={styles['block']}>
          <div  className={styles['block__content']}>
            <h2>her zaman<br /><span>daha fazlası<br />mümkün!</span></h2>
            <div className={styles['block__text']}>Plastik, kimya, maden, deterjan, gıda gibi çeşitli endüstriyel alanlarda toz, granül ve likit hammade üretimi yapan müşterilerimiz için hassas tartım, mikro dozajlama, uygun taşıma olmalı. ve güvenli stoklama sistemlerimiz ile yüksek teknolojili tam otomasyonlar geliştiriyoruz.</div>
            <Button text={'Devamı...'} locale href={'#'} className={styles['block__button']} />
          </div>
          <div className={styles['block__image']}>
            <Image src={'/images/home/hero.jpg'} width={'940'} height={'1080'} alt={'Sürdürülebilirlik'} />
          </div>
        </section>

        <section className={styles['sector']}>
          <div className='container-fluid'>
            <h2><span>7</span> farklı sektörde <span>100</span>`den fazla çözüm sunuyoruz.</h2>
            <h3><Image src={'/images/icons/filter.svg'} alt='Sektörle / Çözümler' width={'65'} height={'65'} /> Sektörle / Çözümler</h3>

            <div className={styles['sector__tabs']}>
              <Tabs className={styles['tabs']} selectedTabClassName={styles['tab--selected']}>
                <TabList>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/chemical.svg'} alt='Kimya' width={'39'} height={'69'} /></div>
                      <span>Kimya</span>
                    </div>
                  </Tab>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/detergent.svg'} alt='Deterjan' width={'51'} height={'70'} /></div>
                      <span>Deterjan</span>
                    </div>
                  </Tab>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/plastic.svg'} alt='Plastik' width={'26'} height={'70'} /></div>
                      <span>Plastik</span>
                    </div>
                  </Tab>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/cable.svg'} alt='Kablo' width={'67'} height={'70'} /></div>
                      <span>Kablo</span>
                    </div>
                  </Tab>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/coal.svg'} alt='Maden & Mineral' width={'52'} height={'70'} /></div>
                      <span>Maden & Mineral</span>
                    </div>
                  </Tab>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/rubber.svg'} alt='Lastik & Kauçuk' width={'70'} height={'70'} /></div>
                      <span>Lastik & Kauçuk</span>
                    </div>
                  </Tab>
                  <Tab className={styles['tab']}>
                    <div className={styles['tab__item']}>
                      <div><Image src={'/images/icons/food.svg'} alt='Gıda & Yem' width={'67'} height={'66'} /></div>
                      <span>Gıda & Yem</span>
                    </div>
                  </Tab>
                </TabList>

                <TabPanel className={styles['tab__content']}>
                  <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
                <TabPanel className={styles['tab__content']}>
                  <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
                <TabPanel className={styles['tab__content']}>
                <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
                <TabPanel className={styles['tab__content']}>
                <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
                <TabPanel className={styles['tab__content']}>
                <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
                <TabPanel className={styles['tab__content']}>
                  <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
                <TabPanel className={styles['tab__content']}>
                <div className={styles['card-list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>

        <section className={styles['video']}>
          <video width="1920" height="1080" autoPlay muted loop>
            <source src="/video/volde-video.mp4" type="video/mp4" />
          </video>
        </section>

        <section className={classNames(styles['block'], styles['block--reverse'])}>
          <div  className={styles['block__content']}>
            <h2>TECRÜBE<br />TEKNOLOJİ<br />TASARIM</h2>
            <div className={styles['block__text']}>Lorem Ipsum is simply dummy typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</div>
            <Button text={'Devamı...'} locale href={'#'} className={styles['block__button']} />
          </div>
          <div className={styles['block__image']}>
            <Image src={'/images/home/tecrube.jpg'} width={'940'} height={'1080'} alt={'Sürdürülebilirlik'} />
          </div>
        </section>

        <section className={styles['block']}>
          <div  className={styles['block__content']}>
            <h2>Sürdürülebilirlik</h2>
            <div className={styles['block__text']}>Lorem Ipsum is simply dummy typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</div>
            <Button text={'Devamı...'} locale href={'#'} className={styles['block__button']} />
          </div>
          <div className={styles['block__image']}>
            <Image src={'/images/home/surdurulebilirlik.jpg'} width={'940'} height={'1080'} alt={'Sürdürülebilirlik'} />
          </div>
        </section>

        <section className={styles['blog']}>
          <div className='container-fluid'>
            <h2>Blog</h2>
            <div className={styles['blog__buttons']}>
              <Button2 locale href={'/blog'} text={'Tümünü Gör'} />

              <div className={styles['group-buttons']}>
                <Button2 button icon={'arrow'} className={styles['prev']} />
                <Button2 button icon={'arrow'} className={styles['next']}/>
              </div>
            </div>
          </div>
          <div className={styles['blog__slider']}>
            <Swiper
              modules={[Navigation, A11y]}
              slidesPerView={'auto'}
              spaceBetween={0}
              navigation={{
                nextEl: `.${styles['next']}`,
                prevEl: `.${styles['prev']}`
              }}
              className={'blog__carousel'}
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
          </div>
        </section>
          
      </Layout>
    </>
  )
}
