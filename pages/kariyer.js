import Image from "next/image";
import classNames from "classnames";

import { Layout } from "../layout";
import styles from "../assets/styles/Career.module.scss";
import { ContactForm } from "../components";

export default function Career({navlist}) {
  return (
    <>
      <Layout navlist={navlist}>
        <section className={classNames(styles["career"], styles["white"])}>
          <div className={styles["career__content"]}>
            <h2>İK Politikamız</h2>
            <div className={"block__text"}>
              <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.</p>
              <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis</p>
            </div>
          </div>
          <div className={styles["career__image"]}>
            <Image
              src={"/images/img/kariyer.png"}
              width={"940"}
              height={"1080"}
              alt={"Sürdürülebilirlik"}
            />
          </div>
        </section>

        <section className={styles["career"]}>
          <div className={styles["career__content"]}>
            <h2>Etik Uygulamalar</h2>
            <div className={"block__text"}>
              <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.</p>
              <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis</p>
            </div>
          </div>
        </section>
        
        <section className={classNames(styles["career"], styles["white"])}>
          <div className={styles["career__content"]}>
            <h2>İşe Alım Süreci</h2>
            <div className={"block__text"}>
              <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit.</p>
              <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis</p>
            </div>
          </div>
        </section>
        
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


  return {
    props: {
      navlist
    },
    revalidate: 10,
  }
}