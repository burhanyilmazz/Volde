import { Layout } from "../../layout";
import styles from "../../assets/styles/List.module.scss";
import { Card, LeftNav, Breadcrumb } from "../../components";
import slug from 'slug'

export default function SystemList({navlist, category}) {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Sistemler',
    },
    {
      title: category.title,
    },
  ]

  const systemDetailUrl = '/sistem';

  return (
    <>
      <Layout navlist={navlist}>
        <LeftNav data={navlist?.find(item => item.type === 'systems')} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={styles["list"]}>
          <div className={styles["list__content"]}>
            <h2>{category.title}</h2>
            <div className={styles["list__text"]} dangerouslySetInnerHTML={{__html: category.content}} />

            <div className={styles['card-list']}>
              {category?.contents?.map((item, index) => <Card key={index} title={item.title} image={item.listing_image} path={`${systemDetailUrl}/${slug(item.title)}-${item.id}-${category.id}`} /> )}
            </div>
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

  const systems = await fetch(`${process.env.API_URL}/systems`, options).then(r => r.json()).then(data => data.Result);

  systems.map(item => {
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
  const systems = await fetch(`${process.env.API_URL}/systems`, options).then(r => r.json()).then(data => data.Result);
  const category = systems.find(item => item?.id == id);

  return {
    props: {
      navlist,
      category,
    },
    revalidate: 10,
  }
}