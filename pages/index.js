import { useEffect } from 'react';
import Image from 'next/image'
import classNames from 'classnames';
import Headroom from 'headroom.js';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'react-tabs/style/react-tabs.css';

import { Layout } from '../layout'
import styles from '../assets/styles/Home.module.scss'
import { Button, Button2, CardBlog, Card, Carousel, ScrollIcon } from '../components';
import Link from 'next/link'

export default function Home({navlist, sliders, mainpage}) {

  useEffect(() => {
    const myElement = document.querySelector('header');
    const options = {
      prefix: 'sticky',
      tolerance: {
        down : 10,
        up : 10
      },
      offset : 5,
      classes : {
        initial : 'header',
        pinned : 'header--pinned',
        unpinned : 'header--unpinned',
        top : 'header--top',
        notTop : 'header--not-top',
        bottom : 'header--bottom',
        notBottom : 'header--not-bottom',
      }
    }
    const headroom  = new Headroom(myElement, options);
    headroom.init();
  }, [])

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles['carousel']}>
          <Carousel data={sliders} />
          <ScrollIcon className={styles['scroll']} />
          <div className={styles['right-bar']}>
            <div className={styles['language']}><Link href="/en">EN</Link></div>
          </div>
        </section>

        <section className={styles['block']}>
          <div  className={styles['block__content']}>
            <h2 dangerouslySetInnerHTML={{__html: mainpage.section1_title}} />
            <div className={styles['block__text']} dangerouslySetInnerHTML={{__html: mainpage.section1_content}} />
            <Button text={'Devamı...'} locale href={mainpage.section1_url} className={styles['block__button']} />
          </div>
          <div className={styles['block__image']}>
            <Image src={mainpage.section1_image} width={'940'} height={'1080'} alt={mainpage.section1_title} />
          </div>
        </section>

        <section className={styles['sector']}>
          <div className='container-fluid'>
            <h2><span>7</span> farklı sektörde <span>100</span>`den fazla çözüm sunuyoruz.</h2>
            <h3><Image src={'/images/icons/filter.svg'} alt='Sektörle / Çözümler' width={'65'} height={'65'} /> Sektörler / Çözümler</h3>

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

          <div className={styles['sector__accordion']}>
            <Accordion allowZeroExpanded preExpanded={["1"]}>
              <AccordionItem uuid="1" className={styles['accordion']}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className={styles['accordion__item']}>
                          <div><Image src={'/images/icons/chemical.svg'} alt='Kimya' width={'39'} height={'69'} /></div>
                          <span>Kimya</span>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles['accordion__panel']}>
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
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="2" className={styles['accordion']}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className={styles['accordion__item']}>
                          <div><Image src={'/images/icons/detergent.svg'} alt='Deterjan' width={'51'} height={'70'} /></div>
                          <span>Deterjan</span>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles['accordion__panel']}>
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
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="3" className={styles['accordion']}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className={styles['accordion__item']}>
                          <div><Image src={'/images/icons/plastic.svg'} alt='Plastik' width={'26'} height={'70'} /></div>
                          <span>Plastik</span>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles['accordion__panel']}>
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
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="4" className={styles['accordion']}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className={styles['accordion__item']}>
                          <div><Image src={'/images/icons/cable.svg'} alt='Kablo' width={'67'} height={'70'} /></div>
                          <span>Kablo</span>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles['accordion__panel']}>
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
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="5" className={styles['accordion']}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className={styles['accordion__item']}>
                          <div><Image src={'/images/icons/coal.svg'} alt='Maden & Mineral' width={'52'} height={'70'} /></div>
                          <span>Maden & Mineral</span>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles['accordion__panel']}>
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
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="6" className={styles['accordion']}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className={styles['accordion__item']}>
                          <div><Image src={'/images/icons/rubber.svg'} alt='Lastik & Kauçuk' width={'70'} height={'70'} /></div>
                          <span>Lastik & Kauçuk</span>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles['accordion__panel']}>
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
                  </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="7" className={styles['accordion']}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={styles['accordion__item']}>
                      <div><Image src={'/images/icons/food.svg'} alt='Gıda & Yem' width={'67'} height={'66'} /></div>
                      <span>Gıda & Yem</span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles['accordion__panel']}>
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
                </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
          </div>
        </section>

        <section className={styles['video']}>
          <video width="1920" height="1080" autoPlay muted loop>
            <source src={mainpage.section2_video || '/video/volde-video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={classNames(styles['block'], styles['block--reverse'])}>
          <div  className={styles['block__content']}>
            <h2 dangerouslySetInnerHTML={{__html: mainpage.section3_title}} />
            <div className={styles['block__text']} dangerouslySetInnerHTML={{__html: mainpage.section3_content}} />            
            <Button text={'Devamı...'} locale href={mainpage.section3_url} className={styles['block__button']} />
          </div>
          <div className={styles['block__image']}>
            <Image src={mainpage.section3_image} width={'940'} height={'1080'} alt={mainpage.section3_title} />
          </div>
        </section>

        <section className={styles['block']}>
          <div  className={styles['block__content']}>
          <h2 dangerouslySetInnerHTML={{__html: mainpage.section4_title}} />
            <div className={styles['block__text']} dangerouslySetInnerHTML={{__html: mainpage.section4_content}} /> 
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
              modules={[Navigation, Pagination]}
              slidesPerView={'auto'}
              spaceBetween={0}
              navigation={{
                nextEl: `.${styles['next']}`,
                prevEl: `.${styles['prev']}`
              }}
              pagination
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

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const sliders = await fetch(`${process.env.API_URL}/sliders`, options).then(r => r.json()).then(data => data.Result);
  const mainpage = await fetch(`${process.env.API_URL}/mainpage`, options).then(r => r.json()).then(data => data.Result);


  return {
    props: {
      navlist,
      sliders,
      mainpage
    },
    revalidate: 10,
  }
}