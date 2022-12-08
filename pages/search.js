import Link from 'next/link'

import { Layout } from "../layout";
import styles from "../assets/styles/Search.module.scss";
import { Search, Icon } from "../components";

export default function SearchPage() {

  return (
    <>
      <Layout>
        <section className={styles["search"]}>
          <div className={styles["search__content"]}>
            <h2>Arama Sonuçları</h2>
          </div>
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
