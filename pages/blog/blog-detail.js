import { useState } from "react";
import Image from "next/image";

import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog-detail.module.scss";
import { CardBlog, GalleryImage, ShareMedia, Modal, Breadcrumb } from "../../components";

export default function BlogDetail() {
  const [modalImage, setModalImage] = useState();

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

  const gallery = [
    {
      thumb: "/images/img/galeri.jpg",
      bigImage: "/images/img/block.jpg"
    },
    {
      thumb: "/images/img/galeri.jpg",
      bigImage: "/images/img/block.jpg"
    },
    {
      thumb: "/images/img/galeri.jpg",
      bigImage: "/images/img/block.jpg"
    },
    {
      thumb: "/images/img/galeri.jpg",
      bigImage: "/images/img/block.jpg"
    },
    {
      thumb: "/images/img/galeri.jpg",
      bigImage: "/images/img/block.jpg"
    },
  ]

  return (
    <>
      <Layout>
        <Breadcrumb data={breadcrumbList} />
        <section className={styles["blog-detail"]}>
          <div className={styles["blog-detail__block"]}>
            <div className={styles["blog-detail__title"]}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <h3>10 Ağustos 2022<br /> <span>Teknoloji</span></h3>
            </div>

            <div className={styles["blog-detail__image"]}>
              <Image
                src={"/images/img/block.jpg"}
                width={"906"}
                height={"486"}
                alt={"Sürdürülebilirlik"}
              />
            </div>
            
            <div className={styles["blog-detail__text"]}>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32. </p>

              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </p>

              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

            <div className={styles["blog-detail__gallery"]}>
              {
                gallery.map((item, index) => <GalleryImage key={index} image={item.thumb} onClick={() => setModalImage(item.bigImage)} />)
              }
            </div>

            <div className={styles["blog-detail__share"]}>
              <ShareMedia />
            </div>
          </div>
          <div className={styles["blog-detail__right-nav"]}>
            <h4>Kategoriler</h4>
            <div className={styles["right-nav__categories"]}>
              <ul>
                <li>
                  <a href="#">
                    <span>Teknoloji</span>
                    <div>(4)</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Etkinlikler</span>
                    <div>(5)</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Üretim</span>
                    <div>(1)</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Fuarlar</span>
                    <div>(6)</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Genel</span>
                    <div>(3)</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles["right-nav__popular"]}>
              <h4>Popüler Haberler</h4>
              <div><CardBlog /></div>
              <div><CardBlog /></div>
            </div>
          </div>
          { modalImage && <Modal onClose={() => setModalImage('')}>
            <Image
              src={modalImage}
              width={"700"}
              height={"486"}
              alt={""}
            />
          </Modal>}
        </section>
      </Layout>
    </>
  );
}
