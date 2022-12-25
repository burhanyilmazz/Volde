import {useRouter} from 'next/router'
import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog.module.scss";
import { CardBlog, Button2, Breadcrumb } from "../../components";
import slug from 'slug'
import { useState, useEffect } from 'react';

export default function Blog({navlist, blogs, category, blogspagination}) {
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
      title: 'Blog',
      href: '/blog'
    },
    {
      title: category.title
    }
  ]

  useEffect(() => {
    setPage(1)
    setBlogList(blogspagination?.blogs)
    setMoreButton(blogList?.length > 8)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])
  

  const blogDetailUrl = '/blog-detay';
  const id = router.query.slug.split('-').slice(-1)[0];
  
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
      body: JSON.stringify({ language: 'tr', cat_id: id, page: page + 1 })
    }

    await fetch(`${process.env.API_URL}/blogspagination`, blogOptions)
      .then(r => r.json())
      .then(data => {
        setPage(page + 1)
        const blogs = blogList;
        if (data.Result.blogs) {
          blogs.push(...data.Result.blogs)

          setMoreButton(true)
          setBlogList([...blogs])
        }
      })
  }

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
            { blogList.map((blog, i) => <CardBlog key={i} data={blog} path={`${blogDetailUrl}/${slug(blog.title)}-${blog.id}-${blog.cat_id}`} />)}
          </div>
          {moreButton && <Button2 button text={"Daha fazla"} onClick={handleClick} /> }
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

  const blogOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr', cat_id: id, page: 1 })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);
  const category = blogs.find(item => item?.id == id);
  const blogspagination = await fetch(`${process.env.API_URL}/blogspagination`, blogOptions).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      blogs,
      category,
      blogspagination,
    },
    revalidate: 10,
  }
}