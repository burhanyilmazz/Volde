import Image from "next/image";

import { Layout } from "../../layout";
import styles from "../../assets/styles/Sector.module.scss";
import { Information } from "../../components";
import { LeftNav, Breadcrumb } from "../../components/";

import { navlist } from '../../utils/Nav';

export default function Sector() {
  const navDataParent = navlist.find(item => item.type === 'sectors')
  const navDataChild = navDataParent.children[0];
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Sektörler',
      href: '/'
    },
    {
      title: 'Kimya',
      href: '/'
    },
    {
      title: "Karıştırıcı ve Reaktör",
      href: '/'
    }
  ]

  return (
    <>
      <Layout>
        <LeftNav data={navDataChild} />
        <Breadcrumb data={breadcrumbList} />
        <section className={"block"}>
          <div className={"block__content"}>
            <h2>Karıştırıcı ve Reaktör</h2>
            <div className={"block__text"}>
              Endüstrinin birçok alanında yaygın şekilde kullanılan ve sıvı-sıvı
              veya toz-sıvı gibi hammaddelerin karıştırılmasını sağlayan
              karıştırıcı ve reaktörleri, prosesin ihtiyacına göre farklı tip ve
              modellerde dizayn ve imal ediyoruz. Aynı zamanda tekil olarak
              teminini sağladığımız ürünlere ek olarak sıvı tanklarının da
              proses ihtiyacına göre imalatını gerçekleştiriyoruz.
              <ul>
                <li>Ceketli ve serpantin ısıtmalı tanklar</li>
                <li>İzolasyon ve tartım sistemli tanklar</li>
                <li>Dinlendirme tankları</li>
              </ul>
            </div>
          </div>
          <div className={"block__image"}>
            <Image
              src={"/images/img/sektor.jpg"}
              width={"940"}
              height={"1080"}
              alt={"Sürdürülebilirlik"}
            />
          </div>
        </section>
        <section className={styles["product"]}>
          <div className={styles["product__img"]}>
            <Image
              src={"/images/img/product.jpg"}
              width={"1580"}
              height={"680"}
              alt={"Sürdürülebilirlik"}
            />
          </div>
          <h2>Karıştırıcı ve Reaktör</h2>
          <div className={"block__text"}>
            Deterjan sektörünün üretim aşamasında, özellikle hammadde stoklamada
            işletmelere yer ve iş gücü kazandıran, aynı zamanda operasyon
            kolaylığı ve pratiklik sağlayan silolar tasarlıyor, müşterilerimizin
            ihtiyacına göre özel silo sistemleri oluşturuyoruz. Özellikle Soda,
            Sülfat, Tuz gibi tüketim miktarları yüksek hammaddeler için pratik
            stoklama sistemlerini devreye sokarak, müşterilerimizin günlük
            üretim kapasitelerini sağlamalarına yardımcı oluyoruz. Deterjan
            sektörünün üretim aşamasında, özellikle hammadde stoklamada
            işletmelere yer ve iş gücü kazandıran, aynı zamanda operasyon
            kolaylığı ve pratiklik sağlayan silolar tasarlıyor, müşterilerimizin
            ihtiyacına göre özel silo sistemleri oluşturuyoruz. Özellikle Soda,
            Sülfat, Tuz gibi tüketim miktarları yüksek hammaddeler için pratik
            stoklama sistemlerini devreye sokarak, müşterilerimizin günlük
            üretim kapasitelerini sağlamalarına yardımcı oluyoruz.
          </div>
          <div className={styles["product__content"]}>
            <div className={styles["product__image"]}>
              <Image
                src={"/images/img/karistirici.jpg"}
                width={"770"}
                height={"500"}
                alt={"Sürdürülebilirlik"}
              />
              <Image
                src={"/images/img/reflektor.jpg"}
                width={"770"}
                height={"500"}
                alt={"Sürdürülebilirlik"}
              />
            </div>
          </div>
        </section>
        <Information />
      </Layout>
    </>
  );
}
