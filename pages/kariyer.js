import Image from "next/image";
import classNames from "classnames";

import { Layout } from "../layout";
import styles from "../assets/styles/Career.module.scss";
import { ContactForm } from "../components";

export default function Career({navlist, hrcontents}) {
  return (
    <>
      <Layout navlist={navlist}>
        {
          hrcontents?.contents?.map((item, index) => {
            return (
              <section key={index} className={styles["career"]}>
                <div className={styles["career__content"]}>
                  <h2>{item.title}</h2>
                  <div className={"block__text"} dangerouslySetInnerHTML={{__html: item.content}} />
                </div>
                {index === 0 && hrcontents?.image && <div className={styles["career__image"]}>
                  <Image
                    src={hrcontents.image}
                    width={"940"}
                    height={"1080"}
                    alt={"İnsan Kaynakları"}
                  />
                </div>}
              </section>
            )
          })
        }
        
        <section className={classNames(styles["career"], styles['career-form'])}>
          <ContactForm
            hr
            title="Bizimle iletişime geçin"
            text={'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.'}
          />
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
  const hrcontents = await fetch(`${process.env.API_URL}/hrcontents`, options).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      hrcontents
    },
    revalidate: 10,
  }
}