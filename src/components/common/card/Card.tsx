import styles from "./card.module.css";

export default function Card({
  img,
  title,
  price,
}: {
  img: string;
  title: string;
  price: number | string;
}) {
  return (
    <div className={`${styles.container}`}>
      <img src={img} alt={title} />

      <span className={styles.title}>{title}</span>

      <span className={styles.price}>{price}</span>
    </div>
  );
}
