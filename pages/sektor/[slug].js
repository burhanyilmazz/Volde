import Image from "next/image";
import { Layout } from "../../layout";
import styles from "../../assets/styles/Sector.module.scss";
import { CarouselSector, Information, LeftNav, Breadcrumb, Card } from "../../components";
import slug from 'slug'

export default function Sector({navlist, sector, sectorCat}) {
  const navDataParent = navlist?.find(item => item.type === 'sectors')
  const navDataChild = navDataParent?.children[0];
  const sectorDetailUrl = '/sektor';

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Sektörler',
      href: `/${navDataParent.folder}/${slug(sectorCat.title)}-${sectorCat.id}`
    },
    {
      title: sectorCat.title,
      href: `/${navDataParent.folder}/${slug(sectorCat.title)}-${sectorCat.id}`
    },
    {
      title: sector.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <LeftNav data={navDataChild} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={"block"}>
          <div className={"block__content"}>
            <h2>{sector.title}</h2>
            <div className={"block__text"} dangerouslySetInnerHTML={{__html: sector.content}} />
          </div>
          <div className={"block__image"}>
            {sector.sliders && <CarouselSector data={sector.sliders} title={sector.title} /> }
          </div>
        </section>
        
        <section className={styles["product"]}>
          {sector.section1_image && <div className={styles["product__img"]}>
            <Image
              src={sector.section1_image}
              width={"1580"}
              height={"680"}
              alt={sector.title}
            />
          </div> }
          {/* <h2>Karıştırıcı ve Reaktör</h2> */}
          {sector.section1_content && <div className={"block__text"} dangerouslySetInnerHTML={{__html: sector.section1_content}} /> }

          {sector.section2_image && <div className={styles["product__img"]}>
            <Image
              src={sector.section2_image}
              width={"1580"}
              height={"680"}
              alt={sector.title}
            />
          </div> }
          {/* <h2>Karıştırıcı ve Reaktör</h2> */}
          {sector.section2_content && <div className={"block__text"} dangerouslySetInnerHTML={{__html: sector.section2_content}} /> }

          <div className={styles["product__content"]}>
            <div className={styles["product__image"]}>
              <Image
                src={sector.content_image1}
                width={"770"}
                height={"500"}
                alt={sector.title}
              />
            </div>
            <div className={styles["product__image"]}>
              <Image
                src={sector.content_image2}
                width={"770"}
                height={"500"}
                alt={sector.title}
              />
            </div>
          </div>

          <Information />
        </section>

        <section className={styles['systems']}>
          <h2>İlgili Sektörler</h2>
          <div className={styles['card-list']}>
            {sectorCat?.contents?.map((item, index) => <Card key={index} title={item.title} image={item.listing_image} path={`${sectorDetailUrl}/${slug(item.title)}-${sectorCat.id}`} /> )}
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

  sectors.map(item => item.contents.map(sector => {
    paths.push({ params: { slug: `${slug(sector.title)}-${sector.id}-${item.id}` } })
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
  const sectors = await fetch(`${process.env.API_URL}/sectors`, options).then(r => r.json()).then(data => data.Result);
  const sectorCat = sectors.find(item => item?.id == catid);
  const sector = sectorCat?.contents?.find(item => item?.id == id )

  return {
    props: {
      navlist,
      sector,
      sectorCat,
    },
    revalidate: 10,
  }
}