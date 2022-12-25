import { useState } from "react";
import Image from "next/image";
import slug from 'slug'

import { Layout } from "../../layout";
import styles from "../../assets/styles/Blog-detail.module.scss";
import { CardBlog, GalleryImage, ShareMedia, Modal, Breadcrumb } from "../../components";
import Link from "next/link";

export default function BlogDetail({navlist, blogs, blog, blogCat, popular}) {
  const [modalImage, setModalImage] = useState();

  const blogDetailUrl = '/blog-detay';

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
      title: blogCat.title,
      href: `/blog/${slug(blogCat.title)}-${blogCat.id}`
    },
    {
      title: blog.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <Breadcrumb data={breadcrumbList} />
        <section className={styles["blog-detail"]}>
          <div className={styles["blog-detail__block"]}>
            <div className={styles["blog-detail__title"]}>
              <h2>{blog.title}</h2>
              <h3>{new Intl.DateTimeFormat('tr', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(blog.created_at))}<br /> <span>{blogCat.title}</span></h3>
            </div>

            {blog.image && <div className={styles["blog-detail__image"]}>
              <Image
                src={blog.image}
                width={"906"}
                height={"486"}
                alt={blog.title}
                priority
              />
            </div> }
            
            <div className={styles["blog-detail__text"]} dangerouslySetInnerHTML={{__html: blog.content}} />

            { blog.gallery && <div className={styles["blog-detail__gallery"]}>
              { blog?.gallery?.map((item, index) => <GalleryImage key={index} image={item.listing_image} onClick={() => setModalImage(item.image)} />) }
            </div>}

            <div className={styles["blog-detail__share"]}>
              <ShareMedia />
            </div>
          </div>
          <div className={styles["blog-detail__right-nav"]}>
            <h4>Kategoriler</h4>
            <div className={styles["right-nav__categories"]}>
              <ul>
                {blogs.map((item, index) => <li key={index}>
                  <Link href={`/blog/${slug(blogCat.title)}-${blogCat.id}`}>
                    <span>{item.title}</span>
                    <div>({item?.blogs?.length})</div>
                  </Link>
                </li> )}
              </ul>
            </div>
            {popular && <div className={styles["right-nav__popular"]}>
              <h4>Popüler Haberler</h4>
              {popular.map((item, index) => <div key={index}><CardBlog data={item} path={`${blogDetailUrl}/${slug(item.title)}-${item.id}-${blogCat.id}`} /></div> )}
            </div> }
          </div>
          { modalImage && <Modal onClose={() => setModalImage('')}>
            <Image
              src={modalImage}
              width={"700"}
              height={"486"}
              alt={blog.title}
            />
          </Modal>}
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

  blogs.map(item => item.blogs.map(blog => {
    paths.push({ params: { slug: `${slug(blog.title)}-${blog.id}-${item.id}` } })
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export async function getStaticProps(ctx) {
  const catid = ctx.params.slug.split('-').slice(-1)[0]
  const id = ctx.params.slug.split('-').slice(-2)[0]

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);
  const popular = await fetch(`${process.env.API_URL}/blogs/populer`, options).then(r => r.json()).then(data => data.Result);
  const blogCat = blogs.find(item => item?.id == catid);
  const blog = blogCat?.blogs?.find(item => item?.id == id )

  await fetch(`${process.env.API_URL}/blogs/counter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr', blog_id: id })
  })

  return {
    props: {
      navlist,
      blogs,
      blog,
      blogCat,
      popular
    },
    revalidate: 10,
  }
}