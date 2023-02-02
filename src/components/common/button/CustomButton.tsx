import styles from "./custombutton.module.css";

export default function CustomButton({
  label,
  width,
  height,
}: {
  label: string;
  width: number | string;
  height: number | string;
}) {
  return (
    <button className={styles.button} style={{ width: width, height: height }}>
      {label}
    </button>
  );
}
