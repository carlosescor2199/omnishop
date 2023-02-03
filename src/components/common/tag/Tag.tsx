import styles from "./tag.module.css";

export default function Tag({ label }: { label: string }) {
  return (
    <div className={styles.tag}>
      <span className={styles.tag}>{label.toLocaleUpperCase()}</span>
    </div>
  );
}
