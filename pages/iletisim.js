import {useEffect, useRef} from 'react'
import Image from "next/image";
import classNames from "classnames";

import { Loader } from '@googlemaps/js-api-loader';

import { Layout } from "../layout";
import styles from "../assets/styles/Communication.module.scss";
import { ContactForm, Icon } from "../components";

import { mapOptions } from '../utils/Map';


export default function Communication() {
  const googlemap = useRef(null);
  const contact = [
    {
      id: 1,
      title: "Showroom / Bakırkoy Main Branch",
      address: "Kartaltepe Mh. Aksu Cd. No:5 Bakırköy / İstanbul",
      phone: "+90 (212) 542 40 61",
      fax: "+90 (212) 542 40 62",
      email: "info@keskinyapimarket.com.tr",
      image: "/images/content/contact/contact-1.jpg",
      coordinate: { lat: 40.9842221, lng: 28.882086 }
    },
    {
      id: 2,
      title: "Construction Market / Çemberlitaş Branch",
      address: "Binbirdirek Mh. Peykane Sok No:16/A Çemberlitaş – Fatih / İstanbul",
      phone: "+90 (212) 542 40 61",
      fax: "+90 (212) 542 40 62",
      email: "info@keskinyapimarket.com.tr",
      image: "/images/content/contact/contact-2.jpg",
      coordinate: { lat: 41.0120348, lng: 28.9676527 }
    },
    {
      id: 3,
      title: "Construction Materials / Arnavutköy Branch",
      address: "Deliklikaya Kayabaşı Cd. No:29  Arnavutköy / İstanbul",
      phone: "+90 (212) 542 40 61",
      fax: "+90 (212) 542 40 62",
      email: "info@keskinyapimarket.com.tr",
      image: "/images/content/contact/contact-3.jpg",
      coordinate: { lat: 41.1135206, lng: 28.6523425 }
    },
    {
      id: 4,
      title: "Construction Materials / Zeytinburnu Branch",
      address: "Seyitnizam Mh. Demirciler Sitesi. 8 Cd. No:68 Zeytinburnu / İstanbul",
      phone: "+90 (212) 542 40 61",
      fax: "+90 (212) 542 40 62",
      email: "info@keskinyapimarket.com.tr",
      image: "/images/content/contact/contact-4.jpg",
      coordinate: { lat: 41.0057562, lng: 28.8953089 }
    },
    /*  {
       id: 5,
       title: "Showroom / Bakırköy Merkez Şube",
       address: "Kartaltepe Mah. Aksu Cad. No:5/1 Bakırköy/İstanbul",
       phone: "+90 (212) 542 40 61",
       fax: "+90 (212) 542 40 62",
       email: "info@keskinyapimarket.com.tr",
       image: "/images/content/contact/contact-5.jpg",
       coordinate: {lat: 33.0243554, lng: 23.6873023}
     },
     {
       id: 6,
       title: "Showroom / Bakırköy Merkez Şube",
       address: "Kartaltepe Mah. Aksu Cad. No:5/1 Bakırköy/İstanbul",
       phone: "+90 (212) 542 40 61",
       fax: "+90 (212) 542 40 62",
       email: "info@keskinyapimarket.com.tr",
       image: "/images/content/contact/contact-6.jpg",
       coordinate: {lat: 34.0343554, lng: 26.6873023}
     } */
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
      const icon = "/images/content/contact/pin.png";

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
      map.setZoom(10);
    });
  });

  return (
    <>
      <Layout>
        <section className={styles["communication"]}>
          <div className={styles["communication__content"]}>
            <div className={styles["communication__title"]}>
              İletişim<span></span>
            </div>
            <h2>Merkez Ofis</h2>
            <div className={styles["communication__information"]}>
              <ul>
                <li>
                  <Icon icon={'location'} />
                  <span>Esenşehir Mh. Natoyolu Cd. İlkyaz Sk. Kartal Plaza No:24-28 34776 Ümraniye / İSTANBUL</span>
                </li>
                <li>
                  <Icon icon={'phone'} />
                  <span><a href="tel:+90 216 527 17 34">+90 216 527 17 34</a></span>
                </li>
                <li>
                  <Icon icon={'email-1'} />
                  <span><a href="mailto: info@voldeglobal.com">info@voldeglobal.com</a></span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["communication__image"]}>
            <Image
              src={"/images/img/iletisim.png"}
              width={"940"}
              height={"1080"}
              alt={"Sürdürülebilirlik"}
            />
          </div>
        </section>
        <section className={classNames(styles["communication"], styles["white"])}>
          <ContactForm communication title field="İletişim Formu" />
          <div className={styles["communication__maps"]}>
            <div id="map" ref={googlemap} />
          </div>
        </section>
      </Layout>
    </>
  );
}
