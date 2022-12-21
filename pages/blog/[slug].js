import {useRouter} from 'next/router'
import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog.module.scss";
import { CardBlog, Button2, Breadcrumb } from "../../components";
import slug from 'slug'

export default function Blog({navlist, blogs, category}) {
  const router = useRouter()

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: category.title
    }
  ]

  const blogDetailUrl = '/blog-detay';

  const handleOnChange = (event) => {
    router.push({ pathname : event.target.value })
  }
  const id = router.query.slug.split('-').slice(-1)[0];

  return (
    <>
      <Layout navlist={navlist}>
        <Breadcrumb data={breadcrumbList} />
        <section className={styles["blog"]}>
          <h2>Blog</h2>
          <div className={styles["blog__buttons"]}>
          { blogs.map((item, index) => <Button2 key={index} locale href={`/blog/${slug(item.title)}-${item.id}`} text={item.title} active={id == item.id ? true : false} /> )}
          </div>
          <div className={styles["blog__select"]}>
            <select defaultValue={'default'} onChange={handleOnChange}>
              <option disabled value={'default'}>Kategori Seçiniz</option>
              { blogs.map((item, index) => <option key={index} value={`/blog/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
            </select>
          </div>
          <div className={styles["blog__content"]}>
            { category?.blogs?.map((item, index) => <CardBlog key={index} data={item} path={`${blogDetailUrl}/${slug(item.title)}-${item.id}-${category.id}`} />)}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);

  blogs.map(item => {
    paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } })
  })

  return {
    paths,
    fallback: "blocking"
  }
}

export async function getStaticProps(ctx) {
  const id = ctx.params.slug.split('-').slice(-1)[0]

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);
  const category = blogs.find(item => item?.id == id);

  return {
    props: {
      navlist,
      blogs,
      category,
    },
    revalidate: 10,
  }
}