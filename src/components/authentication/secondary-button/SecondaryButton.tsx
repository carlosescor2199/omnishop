import styles from "./secondarybutton.module.css";
import { Link } from "react-router-dom";

export default function SecondaryButton({
  label,
  route,
}: {
  label: string;
  route: string;
}) {
  return (
    <button className={styles.buton_secundary}>
      <Link to={route}>{label}</Link>
    </button>
  );
}
