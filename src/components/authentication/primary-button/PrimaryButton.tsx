import styles from "./primarybutton.module.css";
import { Link } from "react-router-dom";

export default function SecondaryButton({
  width,
  height,
  label,
  route,
}: {
  width: number | string;
  height: number | string;
  label: string;
  route: string;
}) {
  return (
    <button className={styles.buton_primary} style={{ width: width, height: height }}>
      <Link to={route}>{label}</Link>
    </button>
  );
}
