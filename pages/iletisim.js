import {useEffect, useRef} from 'react'
import Image from "next/image";
import classNames from "classnames";

import { Loader } from '@googlemaps/js-api-loader';

import { Layout } from "../layout";
import styles from "../assets/styles/Communication.module.scss";
import { ContactForm, Icon } from "../components";

import { mapOptions } from '../utils/Map';

export default function Communication({navlist}) {
  const googlemap = useRef(null);
  const contact = [
    {
      id: 1,
      coordinate: { lat: 41.0124123, lng: 29.1643235 }
    },
  ]

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyALsmBLvMeKOlK2M5SHs2_jgYeJM-6UdBU",
      sensor: false,
      language: 'tr'
    });
    let map;

    loader.load().then(() => {
      const google = window.google;
      const bounds = new google.maps.LatLngBounds();
      const icon = "/images/icons/pin.svg";

      map = new google.maps.Map(googlemap.current, mapOptions);

      contact.map((item, index) => {
        const marker = new google.maps.Marker({
          position: { lat: item.coordinate.lat, lng: item.coordinate.lng },
          map,
          icon
        });

        bounds.extend(marker.position);

        marker.addListener("click", () => {
          window.open(`https://www.google.com/maps/dir//${item.coordinate.lat},${item.coordinate.lng}`, '_blank');
        });
      })

      //map.fitBounds(bounds);

      map.setCenter(bounds.getCenter());
      map.setZoom(13);
    });
  });

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles["communication"]}>
          <div className={styles["communication__content"]}>
            <div className={styles["communication__title"]}>
              İletişim<span></span>
            </div>
            <h2>Genel Müdürlük</h2>
            <div className={styles["communication__information"]}>
              <ul>
                <li>
                  <Icon icon={'location'} />
                  <span>Esenşehir Mah. İlkyaz Sk. Kartal Plaza No:24-28 Kat:2 Ümraniye - İstanbul  / Türkiye </span>
                </li>
                <li>
                  <Icon icon={'phone'} />
                  <span><a href="tel:02165271734">+90 216 527 17 34</a></span>
                </li>
                <li>
                  <Icon icon={'email-1'} />
                  <span><a href="mailto:info@voldeglobal.com">info@voldeglobal.com</a></span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["communication__image"]}>
            <Image
              src={"/images/img/iletisim.png"}
              width={"940"}
              height={"1080"}
              alt={"İletişim"}
            />
          </div>
        </section>
        <section className={classNames(styles["communication"], styles["white"])}>
          <div className={styles["communication__form"]}>
            <ContactForm 
              title="İletişim Formu" 
              text={'Görüş ve önerileriniz için aşağıdaki iletişim formumuz aracılığı ile bizimle iletişime geçebilirsiniz.'} 
            />
          </div>
          <div className={styles["communication__maps"]}>
            <div id="map" ref={googlemap} />
          </div>
        </section>
      </Layout>
    </>
  );
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


  return {
    props: {
      navlist
    },
    revalidate: 10,
  }
}