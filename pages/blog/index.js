import {useRouter} from 'next/router'
import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog.module.scss";
import { CardBlog, Button2, Breadcrumb } from "../../components";
import slug from 'slug'
import { useState } from 'react';

export default function Blog({navlist, blogs, blogspagination}) {
  const router = useRouter()
  const [blogList, setBlogList] = useState(blogspagination?.blogs)
  const [page, setPage] = useState(1)
  const [moreButton, setMoreButton] = useState(blogList?.length > 8)

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

  const handleClick = async () => {
    setMoreButton(false)
    const blogOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language: 'tr', cat_id: 0, page: page + 1 })
    }

    await fetch(`${process.env.API_URL}/blogspagination`, blogOptions)
      .then(r => r.json())
      .then(data => {
        setPage(page + 1)
        const blogs = blogList;
        blogs.push(...data.Result.blogs)

        setMoreButton(true)
        setBlogList([...blogs])
      })
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
            { blogList.map((blog, i) => <CardBlog key={i} data={blog} path={`${blogDetailUrl}/${slug(blog.title)}-${blog.id}-${blog.cat_id}`} />)}
          </div>
          {moreButton && <Button2 button text={"Daha fazla"} onClick={handleClick} /> }
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

  const blogOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr', cat_id: 0, page: 1 })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);
  const blogspagination = await fetch(`${process.env.API_URL}/blogspagination`, blogOptions).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      blogs,
      blogspagination
    },
    revalidate: 10,
  }
}