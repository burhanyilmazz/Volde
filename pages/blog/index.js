import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog.module.scss";
import { CardBlog, Button2, Breadcrumb } from "../../components";

export default function Blog() {
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
        <Breadcrumb data={breadcrumbList} />
        <section className={styles["blog"]}>
          <h2>Blog</h2>
          <div className={styles["blog__buttons"]}>
            <Button2 locale href={"/blog"} text={"Genel"} />
            <Button2 locale href={"/blog"} text={"Fuar"} />
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
