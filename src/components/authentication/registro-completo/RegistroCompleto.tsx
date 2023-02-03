import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./registrocompleto.module.css";
import logo from "../../../assets/LogoOmniNegro.png";

export default function RegistroCompleto() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }, [navigate])

  return (
    <div className={styles.ingresando}>
      <div className={`${styles.container} mr-49 ml-49`}>
        <img src={logo} alt="" />
        <h1>Registro Completo</h1>
      </div>
    </div>
  );
}