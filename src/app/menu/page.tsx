import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { categories } from "@/data/menu";
import CategorySection from "./_components/CategorySection";
import styles from "./menu.module.css";

export const metadata: Metadata = {
  title: "Menu Lengkap — KA/NA Coffee",
};

const MAPS_URL =
  "https://maps.google.com/?q=KA/NA+Coffee+Jl.+Merak+No.+2+Tanah+Sareal+Bogor";

export default function MenuPage() {
  return (
    <div className={styles.page}>
      {/* NAV */}
      <div className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <Image
            src="/uploads/logo.jpg"
            alt="KA/NA"
            width={38}
            height={38}
            className={styles.navBrandLogo}
          />
          <span className={styles.navBrandText}>KA/NA</span>
        </Link>
        <div className={styles.navRight}>
          <span className={`only-desktop ${styles.navLinks}`}>
            <Link href="/" className={styles.navLink}>
              ← Beranda
            </Link>
            <Link href="/bakeyard" className={styles.navLink}>
              Bakeyard
            </Link>
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.eyebrow}>A Cup of Coffee, A Bond of Togetherness</div>
        <div className={styles.title}>
          Menu <span className={styles.titleAccent}>Lengkap</span>
        </div>
        <div className={styles.subtitle}>
          Harga dalam ribuan rupiah · belum termasuk pajak ·{" "}
          <span className={styles.subtitleStrong}>badge = wajib coba!</span>
        </div>
      </div>

      {/* CATEGORY CHIPS */}
      <div className={styles.chipsBar}>
        {categories.map((category) => (
          <a key={category.id} href={`#${category.id}`} className={styles.chip}>
            {category.chipLabel}
          </a>
        ))}
      </div>

      <div className={styles.content}>
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        {/* BAKEYARD CROSS-LINK */}
        <div className={styles.crosslink}>
          <div>
            <div className={styles.crosslinkTitle}>Cari pastry? Ke KA/NA × Bakeyard</div>
            <div className={styles.crosslinkSub}>
              Croissant &amp; cheesecake fresh tiap pagi — halamannya sendiri.
            </div>
          </div>
          <Link href="/bakeyard" className={styles.crosslinkCta}>
            Freshly Baked →
          </Link>
        </div>
        <div className={styles.priceNote}>
          Semua harga dalam ribuan rupiah dan belum termasuk pajak
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <Link href="/" className={styles.footerBrand}>
          <Image
            src="/uploads/logo.jpg"
            alt="KA/NA"
            width={36}
            height={36}
            className={styles.footerBrandLogo}
          />
          <span className={styles.footerBrandText}>KA/NA</span>
        </Link>
        <div className={styles.footerCopy}>© 2026 KA/NA Coffee · #KitaKeKana</div>
      </div>
      <div className={styles.footerStrip} />

      {/* MOBILE STICKY CTA */}
      <span className="only-mobile">
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
      </span>
    </div>
  );
}
