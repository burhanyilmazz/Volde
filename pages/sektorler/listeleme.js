import Image from "next/image";
import classNames from "classnames";

import { Layout } from "../../layout";
import styles from "../../assets/styles/List.module.scss";
import { CardBlog } from "../../components";

export default function List() {
  return (
    <>
      <Layout>
        <section className={styles["list"]}>
          <div className={styles["list__content"]}>
            <h2>Maden & Mineral</h2>
            <div className={styles["list__text"]}>
            <p>Deterjan sektörünün üretim aşamasında, özellikle hammadde stoklamada işletmelere yer ve iş gücü kazandıran, aynı zamanda operasyon kolaylığı ve pratiklik sağlayan silolar tasarlıyor, müşterilerimizin ihtiyacına göre özel silo sistemleri oluşturuyoruz.</p>
            <p>Özellikle Soda, Sülfat, Tuz gibi tüketim miktarları yüksek hammaddeler için pratik stoklama sistemlerini devreye sokarak, müşterilerimizin günlük üretim kapasitelerini sağlamalarına yardımcı oluyoruz.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
