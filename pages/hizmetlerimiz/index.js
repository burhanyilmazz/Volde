import Image from "next/image";

import { Layout } from "../../layout";
import { Breadcrumb, LeftNav } from "../../components/";



export default function Service({navlist}) {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Sektörler',
      href: '/'
    },
    {
      title: 'Kimya',
      href: '/'
    },
    {
      title: "Karıştırıcı ve Reaktör",
      href: '/'
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
              Tasarım Merkezi<span></span>
            </div>
            <h2>Geleceğinizi Tasarlıyoruz</h2>
            <div className={"block__text"}>
              Tasarım merkezimizde, firmanızın hedefleri doğrultusunda satın
              alacağınız sistemi en ince ayrıntısına kadar inceliyor,
              tesisinizin ve isteklerinizin uygunluğuna göre detaylı bir
              yerleşim planı oluşturup, sistemin 3D modellemesini
              gerçekleştiriyoruz.
            </div>
          </div>
          <div className={"block__image"}>
            <Image
              src={"/images/img/hizmet.png"}
              width={"940"}
              height={"1080"}
              alt={"Sürdürülebilirlik"}
            />
          </div>
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

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);


  return {
    props: {
      navlist
    },
    revalidate: 10,
  }
}