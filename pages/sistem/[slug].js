import Image from "next/image";
import { Layout } from "../../layout";
import styles from "../../assets/styles/Sector.module.scss";
import { CarouselSector, Information, LeftNav, Breadcrumb, Card } from "../../components";
import slug from 'slug'

export default function System({navlist, system, systemCat}) {
  const navDataParent = navlist?.find(item => item.type === 'systems')
  const navDataChild = navDataParent?.children[0];
  const systemDetailUrl = '/sistem';

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Sistemler',
      href: `/${navDataParent.folder}/${slug(systemCat.title)}-${systemCat.id}`
    },
    {
      title: systemCat.title,
      href: `/${navDataParent.folder}/${slug(systemCat.title)}-${systemCat.id}`
    },
    {
      title: system.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <LeftNav data={navDataChild} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={"block"}>
          <div className={"block__content"}>
            <h2>{system.title}</h2>
            <div className={"block__text"} dangerouslySetInnerHTML={{__html: system.content}} />
          </div>
          <div className={"block__image"}>
            {system.sliders && <CarouselSector data={system.sliders} title={system.title} /> }
          </div>
        </section>
        
        <section className={styles["product"]}>
          {system.section1_image && <div className={styles["product__img"]}>
            <Image
              src={system.section1_image}
              width={"1580"}
              height={"680"}
              alt={system.title}
            />
          </div> }
          {system.section1_title && <h2>{system.section1_title}</h2> }
          {system.section1_content && <div className={"block__text"} dangerouslySetInnerHTML={{__html: system.section1_content}} /> }

          {system.section2_image && <div className={styles["product__img"]}>
            <Image
              src={system.section2_image}
              width={"1580"}
              height={"680"}
              alt={system.title}
            />
          </div> }
          {system.section2_title && <h2>{system.section2_title}</h2> }
          {system.section2_content && <div className={"block__text"} dangerouslySetInnerHTML={{__html: system.section2_content}} /> }

          <div className={styles["product__content"]}>
            {system.content_image1 && <div className={styles["product__image"]}>
              <Image
                src={system.content_image1}
                width={"770"}
                height={"500"}
                alt={system.title}
              />
            </div> }
            {system.content_image2 && <div className={styles["product__image"]}>
              <Image
                src={system.content_image2}
                width={"770"}
                height={"500"}
                alt={system.title}
              />
            </div> }
          </div>

          <Information />
        </section>

        {systemCat?.contents.length > 0 && <section className={styles['systems']}>
          <h2>İlgili Sistemler</h2>
          <div className={styles['card-list']}>
            {systemCat?.contents?.map((item, index) => <Card key={index} title={item.title} image={item.listing_image} path={`${systemDetailUrl}/${slug(item.title)}-${systemCat.id}`} /> )}
          </div>
        </section> }
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

  systems.map(item => item.contents.map(system => {
    paths.push({ params: { slug: `${slug(system.title)}-${system.id}-${item.id}` } })
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
  const systems = await fetch(`${process.env.API_URL}/systems`, options).then(r => r.json()).then(data => data.Result);
  const systemCat = systems.find(item => item?.id == catid);
  const system = systemCat?.contents?.find(item => item?.id == id )

  return {
    props: {
      navlist,
      system,
      systemCat,
    },
    revalidate: 10,
  }
}