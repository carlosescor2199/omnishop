import styles from './checkbox.module.css'

export default function CheckBox({ label }: { label: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
      <div className={styles.title}>
        <span>{label}</span>
      </div>
    </div>
  );
}
