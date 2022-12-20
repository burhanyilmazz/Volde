import { Layout } from "../../layout";
import styles from "../../assets/styles/List.module.scss";
import { Card, LeftNav, Breadcrumb } from "../../components";

export default function List({navlist}) {
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
        <LeftNav data={navlist?.find(item => item.type === 'sectors')} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={styles["list"]}>
          <div className={styles["list__content"]}>
            <h2>Maden & Mineral</h2>
            <div className={styles["list__text"]}>
              <p>Deterjan sektörünün üretim aşamasında, özellikle hammadde stoklamada işletmelere yer ve iş gücü kazandıran, aynı zamanda operasyon kolaylığı ve pratiklik sağlayan silolar tasarlıyor, müşterilerimizin ihtiyacına göre özel silo sistemleri oluşturuyoruz.</p>
              <p>Özellikle Soda, Sülfat, Tuz gibi tüketim miktarları yüksek hammaddeler için pratik stoklama sistemlerini devreye sokarak, müşterilerimizin günlük üretim kapasitelerini sağlamalarına yardımcı oluyoruz.</p>
            </div>

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