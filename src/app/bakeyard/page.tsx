import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./bakeyard.module.css";

export const metadata: Metadata = {
  title: "KA/NA × Bakeyard — Freshly Baked",
};

const MAPS_URL =
  "https://maps.google.com/?q=KA/NA+Coffee+Jl.+Merak+No.+2+Tanah+Sareal+Bogor";
const WHATSAPP_URL = "https://wa.me/62";
const IG_URL = "https://instagram.com/ka.nacoffee";

const lineup = [
  {
    src: "/uploads/bake_2.webp",
    alt: "Butter Croissant",
    name: "Butter Croissant",
    desc: "Klasik yang nggak pernah salah — 27 lapis butter.",
    price: "32K",
  },
  {
    src: "/uploads/bake_1.webp",
    alt: "Ube Croissant",
    name: "Ube Croissant",
    badge: "MEET YOUR UBE CRUSH",
    desc: "Charcoal croissant + crumble ubi ungu yang earthy manis.",
    price: "36K",
  },
  {
    src: "/uploads/bake_3.webp",
    alt: "Chocolate Almond Croissant",
    name: "Chocolate Almond Croissant",
    desc: "Isi cokelat, selimut frangipane almond + gula halus.",
    price: "36K",
  },
  {
    src: "/uploads/bake_4.webp",
    alt: "New York Cheesecake",
    name: "New York Cheesecake",
    desc: "Padat, creamy, nggak terlalu manis — teman kopi sore.",
    price: "38K",
  },
];

export default function BakeyardPage() {
  return (
    <div className={styles.page}>
      {/* NAV */}
      <div className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/uploads/logo.jpg"
            alt="KA/NA"
            width={38}
            height={38}
            className={styles.brandLogo}
          />
          <span className={styles.brandText}>
            KA/NA <span className={styles.brandCross}>×</span> BAKEYARD
          </span>
        </Link>
        <div className={styles.navRight}>
          <span className={styles.desktopLinks}>
            <Link href="/" className={styles.navLink}>
              ← Beranda
            </Link>
            <Link href="/menu" className={styles.navLink}>
              Menu Lengkap
            </Link>
          </span>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={styles.igCta}>
            @ka.nacoffee
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroEyebrow}>KA/NA × BAKEYARD</div>
        <div className={styles.heroTitle}>
          Freshly <span className={styles.heroAccent}>Baked</span>
        </div>
        <div className={styles.heroDesc}>
          Pastry line in-house bareng BAKEYARD — dilaminasi subuh-subuh di steel counter,
          keluar oven sebelum kamu sampai.
        </div>
        <div className={styles.heroCtas}>
          <a href="#sec-lineup" className={styles.heroCtaPrimary}>
            Lihat Line-Up
          </a>
          <Link href="/menu" className={styles.heroCtaSecondary}>
            Menu Kopinya
          </Link>
        </div>
      </div>

      {/* PROMO MARQUEE */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>
            PASTRY + COFFEE CUMA TAMBAH 10K ✳ tiap pagi 07:00–10:00 ✳ beli pastry Bakeyard,
            kopinya nyusul ✳&nbsp;
          </span>
          <span className={styles.marqueeItem}>
            PASTRY + COFFEE CUMA TAMBAH 10K ✳ tiap pagi 07:00–10:00 ✳ beli pastry Bakeyard,
            kopinya nyusul ✳&nbsp;
          </span>
        </div>
      </div>

      {/* LINE-UP */}
      <div id="sec-lineup" className={styles.lineup}>
        <div className={styles.lineupHead}>
          <div className={styles.lineupTitle}>The Line-Up</div>
          <div className={styles.lineupNote}>Harga ribuan rupiah · belum termasuk pajak</div>
        </div>
        <div className={styles.lineupGrid}>
          {lineup.map((item) => (
            <div key={item.name} className={styles.lineupCard}>
              <div className={styles.lineupImgWrap}>
                <div className={styles.lineupImgGlow} />
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1080}
                  height={1920}
                  className={styles.lineupImg}
                />
              </div>
              <div className={styles.lineupInfo}>
                <div>
                  <div className={styles.lineupName}>
                    {item.name}
                    {item.badge && <span className={styles.lineupBadge}>{item.badge}</span>}
                  </div>
                  <div className={styles.lineupDesc}>{item.desc}</div>
                </div>
                <div className={styles.lineupPrice}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLLAB STRIP */}
      <div className={styles.collab}>
        <div className={styles.collabInner}>
          <div className={styles.collabLeft}>
            <div className={styles.collabEyebrow}>kolab spesial</div>
            <div className={styles.collabTitle}>Korean Garlic &amp; BBQ Brisket Croissant</div>
            <div className={styles.collabDesc}>
              Menu kolab yang gantian nongol di feed — crispy outside, creamy garlic inside,
              atau slow-cooked brisket ketemu flaky layers. Stok terbatas, cek IG buat
              jadwalnya.
            </div>
          </div>
          <div className={styles.collabRight}>
            <div className={styles.collabItem}>
              <div>
                <div className={styles.collabItemTitle}>Baking Class bareng Bakeyard</div>
                <div className={styles.collabItemSub}>Pulang bawa hasil bikinan sendiri</div>
              </div>
              <div className={styles.collabItemPrice}>210K</div>
            </div>
            <div className={styles.collabItem}>
              <div>
                <div className={styles.collabItemTitle}>Pastry + Coffee</div>
                <div className={styles.collabItemSub}>Tiap pagi 07:00–10:00, kopi cuma tambah</div>
              </div>
              <div className={styles.collabItemPrice}>+10K</div>
            </div>
          </div>
        </div>
      </div>

      {/* VISIT CTA */}
      <div className={styles.visit}>
        <div className={styles.visitTitle}>
          Ambil yang masih <span className={styles.visitAccent}>hangat</span>
        </div>
        <div className={styles.visitDesc}>
          Jl. Merak No. 2, Kec. Tanah Sareal, Bogor 16161 · Weekday 07:00–22:00 · Weekend
          07:00–00:00
        </div>
        <div className={styles.visitCtas}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCtaPrimary}
          >
            Ke KA/NA Sekarang
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitCtaSecondary}
          >
            Chat WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <Link href="/" className={styles.footerBrand}>
          <Image
            src="/uploads/logo.jpg"
            alt="KA/NA"
            width={34}
            height={34}
            className={styles.footerBrandLogo}
          />
          <span className={styles.footerBrandText}>
            KA/NA <span className={styles.brandCross}>×</span> BAKEYARD
          </span>
        </Link>
        <div className={styles.footerLinks}>
          <Link href="/" className={styles.footerLink}>
            Beranda
          </Link>
          <Link href="/menu" className={styles.footerLink}>
            Menu Lengkap
          </Link>
        </div>
        <div className={styles.footerCopy}>© 2026 KA/NA Coffee · #KitaKeKana</div>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className={styles.mobileCta}>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mobileCtaLink} ${styles.mobileCtaDirections}`}
        >
          Directions
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mobileCtaLink} ${styles.mobileCtaWhatsapp}`}
        >
          WhatsApp
        </a>
      </div>
      <div className={styles.mobileCtaSpacer} />
    </div>
  );
}
