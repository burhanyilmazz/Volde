import Link from 'next/link'

import { Layout } from "../layout";
import styles from "../assets/styles/Search.module.scss";
import { Search, Icon } from "../components";

export default function SearchPage({navlist}) {

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles["search"]}>
          <h2>Arama Sonuçları</h2>
          <Search />
          <h3>Toplam 28 adet sonuç bulunmuştur.</h3>
          
          <div className={styles["item"]}>
            <div className={styles["content"]}>
              <h3>Karıştırıcı ve Reaktör</h3>
              <div className={styles["text"]}>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
              </div>
            </div>
            <Link href='#'>Sayfaya Git <Icon icon='arrow' /></Link>
          </div>

          <div className={styles["item"]}>
            <div className={styles["content"]}>
              <h3>Karıştırıcı ve Reaktör</h3>
              <div className={styles["text"]}>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
              </div>
            </div>
            <Link href='#'>Sayfaya Git <Icon icon='arrow' /></Link>
          </div>

          <div className={styles["item"]}>
            <div className={styles["content"]}>
              <h3>Karıştırıcı ve Reaktör</h3>
              <div className={styles["text"]}>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
              </div>
            </div>
            <Link href='#'>Sayfaya Git <Icon icon='arrow' /></Link>
          </div>

          <div className={styles["item"]}>
            <div className={styles["content"]}>
              <h3>Karıştırıcı ve Reaktör</h3>
              <div className={styles["text"]}>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
              </div>
            </div>
            <Link href='#'>Sayfaya Git <Icon icon='arrow' /></Link>
          </div>

          <div className={styles["item"]}>
            <div className={styles["content"]}>
              <h3>Karıştırıcı ve Reaktör</h3>
              <div className={styles["text"]}>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
              </div>
            </div>
            <Link href='#'>Sayfaya Git <Icon icon='arrow' /></Link>
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