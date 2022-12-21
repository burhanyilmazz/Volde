import {useRouter} from 'next/router'
import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog.module.scss";
import { CardBlog, Button2, Breadcrumb } from "../../components";
import slug from 'slug'

export default function Blog({navlist, blogs}) {
  const router = useRouter()

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Blog'
    }
  ]

  const blogDetailUrl = '/blog-detay';

  const handleOnChange = (event) => {
    router.push({ pathname : event.target.value })
  }

  return (
    <>
      <Layout navlist={navlist}>
        <Breadcrumb data={breadcrumbList} />
        <section className={styles["blog"]}>
          <h2>Blog</h2>
          <div className={styles["blog__buttons"]}>
          { blogs.map((item, index) => <Button2 key={index} locale href={`/blog/${slug(item.title)}-${item.id}`} text={item.title} /> )}
          </div>
          <div className={styles["blog__select"]}>
            <select defaultValue={'default'} onChange={handleOnChange}>
              <option disabled value={'default'}>Kategori Seçiniz</option>
              { blogs.map((item, index) => <option key={index} value={`/blog/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
            </select>
          </div>
          <div className={styles["blog__content"]}>
            { blogs.map(item => item?.blogs.map((blog, i) => <CardBlog key={i} data={blog} path={`${blogDetailUrl}/${slug(blog.title)}-${blog.id}-${item.id}`} />))}
          </div>
          {/* <Button2 locale href={"/blog"} text={"Daha fazla"} /> */}
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
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      blogs
    },
    revalidate: 10,
  }
}