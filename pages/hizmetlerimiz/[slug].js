import Image from "next/image";
import slug from 'slug'
import { Layout } from "../../layout";
import { Breadcrumb, LeftNav } from "../../components";

export default function Service({navlist, services}) {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Hizmetlerimiz',
    },
    {
      title: services.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <LeftNav data={navlist.find(item => item.type === 'services')} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={"block"}>
          <div className={"block__content"}>
            <div className={"block__title"}>
              {services.title} <span />
            </div>
            <h2>{services.mini_title}</h2>
            <div className={"block__text"} dangerouslySetInnerHTML={{__html: services.content}} />
          </div>
          <div className={"block__image"}>
            {services.image && <Image
              src={services.image}
              width={"940"}
              height={"1080"}
              alt={services.title}
              priority
            />}
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

  const ourservices = await fetch(`${process.env.API_URL}/ourservices`, options).then(r => r.json()).then(data => data.Result);

  ourservices.map(item =>  paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

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
  const ourservices = await fetch(`${process.env.API_URL}/ourservices`, options).then(r => r.json()).then(data => data.Result);
  const services = ourservices.find(item => item?.id == id);

  return {
    props: {
      navlist,
      services,
    },
    revalidate: 10,
  }
}