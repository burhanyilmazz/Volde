import Image from "next/image";
import { Layout } from "../../layout";
import { LeftNav, Breadcrumb } from "../../components";
import slug from 'slug'

export default function About({navlist, corporate}) {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Kurumsal',
    },
    {
      title: corporate.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <LeftNav data={navlist?.find(item => item.type === 'corporate')} />
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={"block"}>
          <div className={"block__content"}>
            <div className={"block__title"}>
              {corporate.title} <span />
            </div>
            <h2>{corporate.mini_title}</h2>
            <div className={"block__text"} dangerouslySetInnerHTML={{__html: corporate.content}} />
          </div>
          <div className={"block__image"}>
            {corporate.image && <Image
              src={corporate.image}
              width={"940"}
              height={"1080"}
              alt={corporate.title}
              priority
            /> }
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

  const corporates = await fetch(`${process.env.API_URL}/corporate`, options).then(r => r.json()).then(data => data.Result);

  corporates.map(item =>  paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

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
  const corporates = await fetch(`${process.env.API_URL}/corporate`, options).then(r => r.json()).then(data => data.Result);
  const corporate = corporates.find(item => item?.id == id);

  return {
    props: {
      navlist,
      corporate,
    },
    revalidate: 10,
  }
}