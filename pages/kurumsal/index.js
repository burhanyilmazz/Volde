import Image from "next/image";

import { Layout } from "../../layout";
import { LeftNav, Breadcrumb } from "../../components/";

import { navlist } from '../../utils/Nav';

export default function About() {
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
      <Layout>
        <LeftNav data={navlist.find(item => item.type === 'corporate')} />
        <Breadcrumb data={breadcrumbList} />
        <section className={"block"}>
          <div className={"block__content"}>
            <div className={"block__title"}>
              Tasarım Merkezi<span></span>
            </div>
            <h2>
              Geride Kalan 20 YIL <br />
              Önümüzde Uzanan Gelecek…
            </h2>
            <div className={"block__text"}>
              <p>
                2002 yılından bu yana sürekli başarı ve gelişim odaklı bir
                çalışma anlayışıyla Düzlem Proses olarak çıktığımız bu yolda;
                global hedeflerimiz doğrultusunda çok daha fazlasını
                yapabileceğimize olan inancımız ve yenilenen markamız VOLDE ile
                uluslararası arenalarda yolumuza devam ediyoruz.
              </p>
              <p>
                Plastik, kimya, maden, deterjan, gıda gibi çeşitli endüstriyel
                alanlarda toz, granül ve likit hammadde üretimi yapan
                müşterilerimiz için pratik stoklama, güvenli taşıma ve hassas
                dozajlama çözümlerimiz ile yüksek teknolojili tam otomasyon
                sistemleri geliştiriyoruz.
              </p>
              <p>
                Özel proje mühendisliğinden otomasyon sistemlerine, güvenli
                montaj hizmetlerinden güçlü servis ağına kadar, müşterilerimizin
                tüm endüstriyel süreçlerini özgün ve eksiksiz çözümlerle
                yöneterek anahtar teslim projeleri hayata geçiriyoruz.
              </p>
              <p>
                20 yılı aşkın profesyonel deneyimimizin ışığında her geçen gün
                daha verimli, daha yenilikçi ve daha hassas teknolojilerle
                müşterilerimiz için her zaman daha fazlasını hedefliyoruz.
              </p>

              <ul>
                <li>Gizlilik (Bilginin sadece yetkili kişiler tarafından erişilebilir olması)</li>
                <li>Bütünlük (Bilginin tam ve doğru olması, yetkisiz değiştirmelerden korunması ve değiştirildiğinde farkına varılması)</li>
                <li>Erişilebilirlik (Bilginin yetkili kullanıcılar tarafından gerek duyulduğu an kullanılabilir olması)</li>
              </ul>

              <h3>Bilgi Güvenliği Yönetim Sistemi (BGYS);</h3>

              <ul>
                <li>Gizlilik (Bilginin sadece yetkili kişiler tarafından erişilebilir olması)</li>
                <li>Bütünlük (Bilginin tam ve doğru olması, yetkisiz değiştirmelerden korunması ve değiştirildiğinde farkına varılması)</li>
                <li>Erişilebilirlik (Bilginin yetkili kullanıcılar tarafından gerek duyulduğu an kullanılabilir olması)</li>
              </ul>
            </div>
          </div>
          <div className={"block__image"}>
            <Image
              src={"/images/img/kurumsal.png"}
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
