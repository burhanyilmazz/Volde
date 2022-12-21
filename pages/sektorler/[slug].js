import { Layout } from "../../layout";
import styles from "../../assets/styles/List.module.scss";
import { Card, LeftNav, Breadcrumb } from "../../components";
import slug from 'slug'

export default function SectorList({navlist, category}) {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Sektörler',
    },
    {
      title: category.title,
    },
  ]

  const sectorDetailUrl = '/sektor';

  return (
    <>
      <Layout navlist={navlist}>
        <LeftNav data={navlist?.find(item => item.type === 'sectors')} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={styles["list"]}>
          <div className={styles["list__content"]}>
            <h2>{category.title}</h2>
            <div className={styles["list__text"]} dangerouslySetInnerHTML={{__html: category.content}} />

            <div className={styles['card-list']}>
              {category?.contents?.map((item, index) => <Card key={index} title={item.title} image={item.listing_image} path={`${sectorDetailUrl}/${slug(item.title)}-${item.id}-${category.id}`} /> )}
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

  const sectors = await fetch(`${process.env.API_URL}/sectors`, options).then(r => r.json()).then(data => data.Result);

  sectors.map(item => {
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
  const sectors = await fetch(`${process.env.API_URL}/sectors`, options).then(r => r.json()).then(data => data.Result);
  const category = sectors.find(item => item?.id == id);

  return {
    props: {
      navlist,
      category,
    },
    revalidate: 10,
  }
}