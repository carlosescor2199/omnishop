import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./ingresando.module.css";
import logo from "../../../assets/LogoOmniNegro.png";

export default function Ingresando() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }, [navigate])

  return (
    <div className={styles.ingresando}>
      <div className={`${styles.container} mr-32 ml-32`}>
        <img src={logo} alt="" />
        <h1>Ingresando</h1>
      </div>
    </div>
  );
}
