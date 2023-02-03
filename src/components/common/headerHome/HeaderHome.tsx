import styles from "./headerhome.module.css";
import logo from "../../../assets/common/header-home/LogoOmniNegro.png";
import menu from "../../../assets/common/header-home/Menu.png";

export default function HeaderHome() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <img src={menu} alt="" />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
