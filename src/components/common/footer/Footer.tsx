import logo from "../../../assets/common/header-home/LogoOmniNegro.png"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.title}`}>
             <h5>Newsletter</h5>
            </div>
            <div className={`${styles.others}`}>
                <span>Todos los derechos reservados</span>
                <span>2023</span>
                <span>Omnishop</span>
                <img src={logo} alt="" />
            </div>
        </footer>
    )
}