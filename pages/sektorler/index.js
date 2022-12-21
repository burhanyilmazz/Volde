import Image from "next/image";
import { Layout } from "../../layout";
import styles from "../../assets/styles/Sector.module.scss";
import { CarouselSector, Information, LeftNav, Breadcrumb, Card } from "../../components";

export default function Sector({navlist}) {
  const navDataParent = navlist?.find(item => item.type === 'sectors')
  const navDataChild = navDataParent?.children[0];
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
      <Layout navlist={navlist}>
        <LeftNav data={navDataChild} />
        <Breadcrumb data={breadcrumbList} unmobile />
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
            <CarouselSector />
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
            </div>
            <div className={styles["product__image"]}>
              <Image
                src={"/images/img/reflektor.jpg"}
                width={"770"}
                height={"500"}
                alt={"Sürdürülebilirlik"}
              />
            </div>
          </div>

          <Information />
        </section>

        <section className={styles['systems']}>
          <h2>İlgili Sistemler</h2>
          <div className={styles['card-list']}>
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
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