import Image from "next/image";
import classNames from "classnames";

import { Layout } from "../../layout";
import styles from "../../assets/styles/About.module.scss";
import { CardBlog } from "../../components";

export default function Service() {
  return (
    <>
      <Layout>
        <section className={"block"}>
          <div className={"block__content"}>
            <div className={"block__title"}>
              Tasarım Merkezi<span></span>
            </div>
            <h2>Geleceğinizi Tasarlıyoruz</h2>
            <div className={"block__text"}>
              Tasarım merkezimizde, firmanızın hedefleri doğrultusunda satın
              alacağınız sistemi en ince ayrıntısına kadar inceliyor,
              tesisinizin ve isteklerinizin uygunluğuna göre detaylı bir
              yerleşim planı oluşturup, sistemin 3D modellemesini
              gerçekleştiriyoruz.
            </div>
          </div>
          <div className={"block__image"}>
            <Image
              src={"/images/img/hizmet.png"}
              width={"940"}
              height={"1080"}
              alt={"Sürdürülebilirlik"}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
