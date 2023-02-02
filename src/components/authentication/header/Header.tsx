import styles from "./header.module.css";
import Img1 from "../../../assets/authentication/img1.png";
import Logo from "../../../assets/LogoOmniNegro.png";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.img1}>
          <img src={Img1} alt="" />
        </div>
      </div>
      <div className={styles.title}>
        <p>
          Bienvenido <span>a Omnishop</span>
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>Ingresa o registrate en Omniapp</p>
      </div>
    </>
  );
}
