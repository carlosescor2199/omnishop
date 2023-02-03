import styles from "./signin.module.css";
import Header from "../../../components/authentication/header/Header";
import AuthForm from "../../../components/authentication/auth-form/AuthForm";
import TextField from "../../../components/authentication/text-field/TextField";
import CheckBox from "../../../components/authentication/checkbox/CheckBox";
import CustomButton from "../../../components/common/button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import useValues from "../../../hooks/useValues";
import { FormEvent, useState } from "react";

const SIGNIN_BUTTONS = [
  {
    type: "primary",
    label: "Ingreso",
    route: "/signin",
  },
  {
    type: "secondary",
    label: "Registro",
    route: "/signup",
  },
];

export default function SignIn() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(false)

  const [values, onChange, errors, initErrors, hasErrors] = useValues({
    initialValues: {
      identifier: "",
      password: "",
    },
    initialErrors: {
      identifier: false,
      password: false,
    },
  });

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    setAuthError(false)
    e.preventDefault();
    initErrors();
    if (hasErrors()) return;
    const res = await fetch("https://apingweb.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.identifier,
        password: values.password,
        // expiresInMins: 60, // optional
      }),
    });

    const user = await res.json();
    if (user.success === false) setAuthError(true);
    else {
      localStorage.setItem("token", user.token);
      navigate("/ingresando")
    }
  }

  return (
    <div className={styles.signin}>
      <Header />
      <AuthForm buttons={SIGNIN_BUTTONS} width={312} height={276.5}>
        <form className={`${styles.form} ml-16 mr-16 mb-32`} onSubmit={handleSignIn}>
          <div className={`${styles.content} ml-16 mr-17`}>
            <div className={`${styles.title} mb-12`}>
              <h3>Ingresa con tus datos</h3>
            </div>
            <div className="mb-8">
              <TextField
                name="identifier"
                value={values.identifier}
                type="text"
                placeholder="Email o nombre de usuario"
                width={221}
                height={16}
                onChange={onChange}
                error={errors.identifier}
              />
            </div>
            <div className={hasErrors() || authError ? "" : "mb-12"}>
              <TextField
                name="password"
                value={values.password}
                type="password"
                placeholder="Ingresa contraseña"
                width={221}
                height={16}
                onChange={onChange}
                error={errors.password || authError}
              />
            </div>
            {(hasErrors() || authError) && (
              <div className={`${styles.error} mt-4 mb-8`}>
                {authError ? "contraseña incorrecta" : "Por favor, diligencia los campos marcados"}
              </div>
            )}
            <div className={styles.subscribe_section}>
              <CheckBox label="Suscríbete al newsletter" />
            </div>
            <div className="mt-12 mb-12">
              <CustomButton label="Ingresar" width={248} height={41} />
            </div>
            <div className={styles.forgot_password}>
              <Link to="/">¿Olvidaste tu contraseña?</Link>
            </div>
          </div>
        </form>
      </AuthForm>
    </div>
  );
}
