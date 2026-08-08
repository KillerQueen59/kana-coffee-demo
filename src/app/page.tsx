import Image from "next/image";
import Link from "next/link";
import LandingNav from "./_components/LandingNav";
import styles from "./page.module.css";

const MAPS_URL =
  "https://maps.google.com/?q=KA/NA+Coffee+Jl.+Merak+No.+2+Tanah+Sareal+Bogor";
const IG_URL = "https://instagram.com/ka.nacoffee";

const highlights = [
  {
    name: "AmeriKana",
    desc: "Americano ala KA/NA — bold, seger, tanpa drama.",
    price: "35K",
    bg: "#8A3B1F",
    rotate: "-1deg",
    badgeColor: "#8A3B1F",
  },
  {
    name: "Seremonial Matcha",
    desc: "Matcha grade seremonial, diseduh pelan-pelan.",
    price: "38K",
    bg: "#6B7A4F",
    rotate: "-0.6deg",
    badgeColor: "#2B2320",
  },
  {
    name: "Nasi Goreng Kemangi",
    desc: "Wangi kemangi, sambal nampol. Comfort food KA/NA.",
    price: "35K",
    bg: "#5C3A28",
    rotate: "-0.9deg",
    badgeColor: "#8A3B1F",
  },
];

const events = [
  {
    title: ["Run &", "Recharge"],
    desc: "Lari pagi bareng komunitas, finish di depan mesin espresso.",
    meta: "Tiap Minggu · 07:00",
    bg: "#6B7A4F",
    color: "#F2EAD9",
    rotate: "-1.4deg",
  },
  {
    title: ["Baking", "Class"],
    desc: "Belajar bikin kue bareng tim Bakeyard, pulang bawa hasil sendiri.",
    meta: "Jadwal di IG · 210K",
    bg: "#8A3B1F",
    color: "#F2EAD9",
    rotate: "1deg",
  },
  {
    title: ["Pop-Up", "Store"],
    desc: "Brand lokal gantian mampir — dari bracelet sampai nail art.",
    meta: "Tiap bulan",
    bg: "var(--paper)",
    color: "var(--pink)",
    titleColor: "var(--accent)",
    metaColor: "var(--accent)",
    rotate: "-0.7deg",
  },
  {
    title: ["Kolab", "Brand"],
    desc: "KOLABREW & friends — kolaborasi rasa dan komunitas.",
    meta: "Ongoing",
    bg: "#5C3A28",
    color: "#F2EAD9",
    rotate: "1.2deg",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <LandingNav />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroCard}>
              <div className={styles.heroEyebrow}>Coffee shop · Tanah Sareal, Bogor</div>
              <div className={styles.heroTitle}>
                A Cup of Coffee,
                <br />
                A Bond of <span className={styles.heroAccent}>Togetherness</span>
              </div>
              <div className={styles.heroDesc}>
                #KitaKeKana — ngopi bareng di Taman Heulang.
              </div>
              <div className={styles.heroCtas}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroCtaPrimary}
                >
                  Ke KA/NA Sekarang
                </a>
                <Link href="/menu" className={styles.heroCtaSecondary}>
                  Lihat Menu
                </Link>
              </div>
            </div>
            <div className={styles.heroOpenBadge}>
              <span className={styles.heroOpenStrong}>BUKA</span>&nbsp;{" "}
              <span className={styles.heroOpenText}>
                Weekday 07:00–22:00 · Weekend 07:00–00:00
              </span>
            </div>
          </div>

          <div className={styles.heroRight}>
            <Image
              src="/uploads/bake_2.webp"
              alt="Butter croissant poster"
              width={1080}
              height={1920}
              className={styles.heroImg}
            />
            <div className={styles.heroSideCol}>
              <a href="#sec-event" className={styles.heroEventTeaser}>
                <div className={styles.heroEventTitle}>
                  Run &amp;
                  <br />
                  Recharge
                </div>
                <div className={styles.heroEventDesc}>
                  Minggu pagi · start 07:00 · pulang-pulang ngopi
                </div>
              </a>
              <div className={styles.heroBadgeCircle}>
                <div className={styles.heroBadgeTitle}>
                  WAJIB
                  <br />
                  COBA!
                </div>
                <div className={styles.heroBadgeSub}>est. Bogor</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>
            #KitaKeKana ✳ A Cup of Coffee, A Bond of Togetherness ✳ Jl. Merak No. 2, Bogor
            ✳ Freshly Baked with BAKEYARD ✳&nbsp;
          </span>
          <span className={styles.marqueeItem}>
            #KitaKeKana ✳ A Cup of Coffee, A Bond of Togetherness ✳ Jl. Merak No. 2, Bogor
            ✳ Freshly Baked with BAKEYARD ✳&nbsp;
          </span>
        </div>
      </div>

      {/* MENU HIGHLIGHTS */}
      <div id="sec-menu" className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionTitle}>
            Yang <span className={styles.sectionTitleAccent}>Wajib Coba</span>
          </div>
          <div className={styles.sectionSub}>
            Harga dalam ribuan rupiah · belum termasuk pajak
          </div>
        </div>
        <div className={styles.menuGrid}>
          {highlights.map((item) => (
            <div
              key={item.name}
              className={styles.menuCard}
              style={{ background: item.bg, transform: `rotate(${item.rotate})` }}
            >
              <div className={styles.menuCardBadge} style={{ color: item.badgeColor }}>
                WAJIB COBA!
              </div>
              <div className={styles.menuCardTitle}>{item.name}</div>
              <div className={styles.menuCardDesc}>{item.desc}</div>
              <div className={styles.menuCardPrice}>{item.price}</div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link href="/menu" className={styles.bigCta}>
            Lihat Menu Lengkap →
          </Link>
        </div>
      </div>

      {/* BAKEYARD TEASER */}
      <div id="sec-bake" className={`${styles.section} ${styles.bakeSection}`}>
        <div className={styles.bakeHead}>
          <div className={styles.bakeTitle}>KA/NA × Bakeyard</div>
          <div className={styles.bakeSubtitle}>Freshly Baked</div>
        </div>
        <div className={styles.bakeGrid}>
          <Image
            src="/uploads/bake_2.webp"
            alt="Butter Croissant 32K"
            width={1080}
            height={1920}
            className={styles.bakeImg}
            style={{ transform: "rotate(-1.2deg)" }}
          />
          <Image
            src="/uploads/bake_1.webp"
            alt="Ube Croissant 36K"
            width={1080}
            height={1920}
            className={styles.bakeImg}
            style={{ transform: "rotate(1deg)" }}
          />
          <Image
            src="/uploads/bake_3.webp"
            alt="Chocolate Almond Croissant 36K"
            width={1080}
            height={1920}
            className={styles.bakeImg}
            style={{ transform: "rotate(-0.8deg)" }}
          />
        </div>
        <div className={styles.bakeFooterRow}>
          <div className={styles.bakeNote}>
            Butter Croissant 32 · Ube Croissant 36 · Chocolate Almond Croissant 36 — masih
            ada lagi di halaman Bakeyard · harga belum termasuk pajak
          </div>
          <Link href="/bakeyard" className={styles.bakeCta}>
            Ke Halaman Bakeyard →
          </Link>
        </div>
      </div>

      {/* EVENTS */}
      <div id="sec-event" className={styles.section} style={{ backgroundImage: "var(--kaw)", backgroundSize: "96px" }}>
        <div className={styles.sectionTitle}>
          Bukan Cuma <span className={styles.sectionTitleAccent}>Ngopi</span>
        </div>
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div
              key={event.title.join(" ")}
              className={styles.eventCard}
              style={{ background: event.bg, color: event.color, transform: `rotate(${event.rotate})` }}
            >
              <div className={styles.eventCardTitle} style={{ color: event.titleColor }}>
                {event.title[0]}
                <br />
                {event.title[1]}
              </div>
              <div className={styles.eventCardDesc}>{event.desc}</div>
              <div className={styles.eventCardMeta} style={{ color: event.metaColor }}>
                {event.meta}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bigCta}
            style={{ background: "#2B2320" }}
          >
            Follow buat info event → @ka.nacoffee
          </a>
        </div>
      </div>

      {/* IG GRID */}
      <div className={`${styles.section} ${styles.igSection}`}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionTitle}>
            Dari Feed <span className={styles.sectionTitleAccent}>Kami</span>
          </div>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={styles.igFollow}>
            Follow @ka.nacoffee →
          </a>
        </div>
        <div className={styles.igGrid}>
          <div className={styles.igTile} style={{ background: "#2B2320", color: "#F2EAD9" }}>
            <div className={styles.igTileTitle}>
              Kenapa Kopi Rasanya Bisa{" "}
              <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
                Fruity?
              </span>
            </div>
            <div className={styles.igTileMeta}>#KitaKeKana</div>
          </div>
          <Image
            src="/uploads/bake_1.webp"
            alt="Ube croissant post"
            width={1080}
            height={1920}
            className={styles.igPhoto}
          />
          <div className={styles.igTile} style={{ background: "#6B7A4F", color: "#F2EAD9" }}>
            <div
              className={styles.igTileTitle}
              style={{ fontFamily: "var(--font-anton)", fontSize: 22, lineHeight: 1.05, textTransform: "uppercase" }}
            >
              Run &amp; Recharge Vol.2
            </div>
            <div className={styles.igTileMeta} style={{ opacity: 0.8 }}>
              Minggu · 07:00
            </div>
          </div>
          <Image
            src="/uploads/bake_4.webp"
            alt="Cheesecake post"
            width={1080}
            height={1920}
            className={styles.igPhoto}
          />
          <div className={styles.igTile} style={{ background: "#8A3B1F", color: "#F2EAD9" }}>
            <div
              className={styles.igTileTitle}
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 24, lineHeight: 1.15 }}
            >
              Dirty Latte
            </div>
            <div className={styles.igTileMeta} style={{ opacity: 0.8 }}>
              Harus langsung diminum?
            </div>
          </div>
          <div
            className={styles.igTile}
            style={{ background: "var(--paper)", color: "var(--pink)", backgroundImage: "var(--kaw)", backgroundSize: "64px" }}
          >
            <div
              className={styles.igTileTitle}
              style={{ fontWeight: 800, fontSize: 20, lineHeight: 1.15, color: "var(--accent)" }}
            >
              Beans of the Month
            </div>
            <div className={styles.igTileMeta} style={{ color: "var(--sub)", opacity: 1 }}>
              Behind your cup
            </div>
          </div>
        </div>
      </div>

      {/* VISIT */}
      <div id="sec-visit" className={styles.visit}>
        <div className={styles.visitLeft}>
          <div className={styles.visitTitle}>Main ke Sini</div>
          <div className={styles.visitAddress}>
            Jl. Merak No. 2, Kec. Tanah Sareal
            <br />
            Bogor 16161
          </div>
          <div className={styles.visitHours}>
            Weekday 07:00–22:00
            <br />
            Weekend 07:00–00:00
          </div>
          <div className={styles.visitCtas}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaPrimary}
            >
              Buka di Maps
            </a>
            <a
              href="https://linktr.ee/ka.nacoffee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaSecondary}
            >
              Linktree
            </a>
          </div>
        </div>
        <div className={styles.visitMap}>
          <iframe
            src="https://maps.google.com/maps?q=KA%2FNA%20Coffee%2C%20Jl.%20Merak%20No.%202%2C%20Tanah%20Sareal%2C%20Bogor&output=embed"
            className={styles.visitMapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta lokasi KA/NA Coffee"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <a href="#" className={styles.footerBrand}>
          <Image
            src="/uploads/logo.jpg"
            alt="KA/NA"
            width={36}
            height={36}
            style={{ borderRadius: "50%" }}
          />
          <span className={styles.footerBrandText}>KA/NA</span>
        </a>
        <div className={styles.footerLinks}>
          <Link href="/menu" className={styles.footerLink}>
            Menu
          </Link>
          <Link href="/bakeyard" className={styles.footerLink}>
            Bakeyard
          </Link>
          <a href="#sec-event" className={styles.footerLink}>
            Event
          </a>
          <a href="#sec-visit" className={styles.footerLink}>
            Visit
          </a>
        </div>
        <div className={styles.footerCopy}>© 2026 KA/NA Coffee · #KitaKeKana</div>
      </div>
      <div className={styles.footerStrip} />

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
          href="https://linktr.ee/ka.nacoffee"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mobileCtaLink} ${styles.mobileCtaLinktree}`}
        >
          Linktree
        </a>
      </div>
      <div className={styles.mobileCtaSpacer} />

      {/* BACK TO TOP */}
      <a href="#" title="Kembali ke atas" aria-label="Kembali ke atas" className={styles.backToTop} />
    </div>
  );
}
