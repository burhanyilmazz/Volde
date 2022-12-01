import Image from "next/image";
import classNames from "classnames";

import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog.module.scss";
import { CardBlog, Button2 } from "../../components";

export default function Blog() {
  return (
    <>
      <Layout>
        <section className={styles["blog"]}>
          <h2>Blog</h2>
          <div className={styles["blog__buttons"]}>
            <Button2 locale href={"/blog"} text={"Tümünü Gör"} />

            <div className={styles["group-buttons"]}>
              <Button2 button icon={"arrow"} className={styles["prev"]} />
              <Button2 button icon={"arrow"} className={styles["next"]} />
            </div>
          </div>
          <div className={styles["blog__content"]}>
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
          <Button2 locale href={"/blog"} text={"Daha fazla"} />
        </section>
      </Layout>
    </>
  );
}
