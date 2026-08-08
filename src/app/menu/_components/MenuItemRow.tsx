"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import styles from "../menu.module.css";

export default function MenuItemRow({
  item,
  dotColor,
}: {
  item: MenuItem;
  dotColor: string;
}) {
  const [open, setOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (rowRef.current && !rowRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rowRef}
      className={styles.itemWrap}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={styles.item}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
      >
        <div className={styles.itemBody}>
          <span className={styles.itemName}>{item.name}</span>{" "}
          {item.badge && <span className={styles.itemBadge}>{item.badge}</span>}
          {item.note && <span className={styles.itemNote}> {item.note}</span>}
        </div>
        <div className={styles.itemFill} />
        <div className={styles.itemPrice}>{item.price}</div>
      </button>

      <div className={styles.detailCard} data-open={open} role="dialog" aria-label={item.name}>
        <div className={styles.detailPhoto} style={{ background: dotColor }}>
          {item.photo ? (
            <Image src={item.photo} alt={item.name} fill className={styles.detailPhotoImg} />
          ) : (
            <div className={styles.detailPhotoFallback}>
              <span>Foto menyusul</span>
            </div>
          )}
        </div>
        <div className={styles.detailBody}>
          <div className={styles.detailHead}>
            <span className={styles.detailName}>{item.name}</span>
            {item.badge && <span className={styles.itemBadge}>{item.badge}</span>}
          </div>
          <p className={styles.detailDesc}>
            {item.description ?? "Deskripsi menyusul — tanya barista buat rekomendasi rasa."}
          </p>
          <div className={styles.detailPrice}>{item.price}K</div>
        </div>
      </div>
    </div>
  );
}
