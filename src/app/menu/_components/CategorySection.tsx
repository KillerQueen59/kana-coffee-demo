import type { MenuCategory } from "@/data/menu";
import styles from "../menu.module.css";
import MenuItemRow from "./MenuItemRow";

export default function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div id={category.id} className={styles.category}>
      <div className={styles.categoryHead}>
        <div className={styles.categoryDot} style={{ backgroundColor: category.dotColor }} />
        <div className={styles.categoryTitle}>{category.title}</div>
        <div className={styles.categoryRule} />
      </div>

      <div className={styles.grid}>
        {category.items.map((item) => (
          <MenuItemRow key={item.name} item={item} dotColor={category.dotColor} />
        ))}
      </div>

      {category.footnote && (
        <div className={styles.footnote}>
          <strong className={styles.footnoteStrong}>{category.footnote.strong}</strong>{" "}
          {category.footnote.rest}
        </div>
      )}
    </div>
  );
}
