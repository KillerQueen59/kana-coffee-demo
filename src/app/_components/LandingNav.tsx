"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./LandingNav.module.css";

const MAPS_URL =
  "https://maps.google.com/?q=KA/NA+Coffee+Jl.+Merak+No.+2+Tanah+Sareal+Bogor";

export default function LandingNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <div className={styles.nav}>
        <a href="#" className={styles.brand}>
          <Image
            src="/uploads/logo.jpg"
            alt="KA/NA"
            width={38}
            height={38}
            className={styles.brandLogo}
          />
          <span className={styles.brandText}>KA/NA</span>
        </a>

        <div className={styles.desktopLinks}>
          <Link href="/menu" className={styles.navLink}>
            Menu
          </Link>
          <Link href="/bakeyard" className={styles.navLink}>
            Bakeyard
          </Link>
          <a href="#sec-event" className={styles.navLink}>
            Event
          </a>
          <a href="#sec-visit" className={styles.navLink}>
            Visit
          </a>
        </div>

        <div className={styles.desktopRight}>
          <ThemeToggle />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Ke KA/NA Sekarang
          </a>
        </div>

        <div className={styles.mobileRight}>
          <ThemeToggle variant="icon" />
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={styles.backdrop}
        data-open={open}
        onClick={close}
        aria-hidden="true"
      />
      <div className={styles.drawer} data-open={open} role="dialog" aria-modal="true">
        <div className={styles.drawerHead}>
          <span className={styles.brandText}>KA/NA</span>
          <button
            type="button"
            className={styles.drawerClose}
            onClick={close}
            aria-label="Tutup menu"
          >
            ✕
          </button>
        </div>
        <Link href="/menu" className={styles.drawerLink} onClick={close}>
          Menu Lengkap
        </Link>
        <Link href="/bakeyard" className={styles.drawerLink} onClick={close}>
          Bakeyard
        </Link>
        <a href="#sec-event" className={styles.drawerLink} onClick={close}>
          Event
        </a>
        <a href="#sec-visit" className={styles.drawerLink} onClick={close}>
          Visit
        </a>
        <div className={styles.drawerSpacer} />
        <a
          href="https://instagram.com/ka.nacoffee"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.drawerCta}
        >
          @ka.nacoffee
        </a>
      </div>
    </>
  );
}
