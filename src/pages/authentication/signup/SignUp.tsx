import styles from "./signup.module.css";
import Header from "../../../components/authentication/header/Header";
import AuthForm from "../../../components/authentication/auth-form/AuthForm";
import TextField from "../../../components/authentication/text-field/TextField";
import CustomButton from "../../../components/common/button/CustomButton";
import useValues from "../../../hooks/useValues";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SIGNUP_BUTTONS = [
  {
    type: "primary",
    label: "Registro",
    route: "/signup",
  },
  {
    type: "secondary",
    label: "Ingreso",
    route: "/signin",
  },
];

export default function SignUp() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(false);
  const [values, onChange, errors, initErrors, hasErrors] = useValues({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
    initialErrors: {
      nombre: false,
      apellido: false,
      email: false,
      password: false,
    },
  });

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    setAuthError(false);
    e.preventDefault();
    initErrors();
    if (hasErrors()) return;
    const res = await fetch("https://apingweb.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.nombre + " " + values.apellido,
        email: values.email,
        phone: "5555551234",
        password: values.password,
        password_confirmation: values.password,
      }),
    });

    const user = await res.json();
    if (user.success === false) setAuthError(true);
    else {
      localStorage.setItem("token", user.token);
      navigate("/registrocompleto")
    }
  }

  return (
    <div className={styles.signup}>
      <Header />
      <AuthForm buttons={SIGNUP_BUTTONS} width={312} height={276.5}>
        <form
          className={`${styles.form} ml-16 mr-16 mb-32`}
          onSubmit={handleSignUp}
        >
          <div className={`${styles.content} ml-16 mr-17`}>
            <div className={`${styles.title} mb-12`}>
              <h3>Completa tus datos para registrarte</h3>
            </div>
            <div className="mb-8">
              <TextField
                name="nombre"
                value={values.nombre}
                type="text"
                placeholder="Nombre"
                width={221}
                height={16}
                error={errors.nombre}
                onChange={onChange}
              />
            </div>
            <div className="mb-8">
              <TextField
                name="apellido"
                value={values?.apellido}
                type="text"
                placeholder="Apellido"
                width={221}
                height={16}
                error={errors.apellido}
                onChange={onChange}
              />
            </div>
            <div className="mb-8">
              <TextField
                name="email"
                value={values?.email}
                type="email"
                placeholder="E-mail"
                width={221}
                height={16}
                error={errors.email}
                onChange={onChange}
              />
            </div>
            <div className={hasErrors() || authError ? "" : "mb-8"}>
              <TextField
                name="password"
                value={values?.password}
                type="password"
                placeholder="Contraseña"
                width={221}
                height={16}
                error={errors.password}
                onChange={onChange}
              />
            </div>
            {(hasErrors() || authError) && (
              <div className={`${styles.error} mt-4 mb-8`}>
                {authError
                  ? "Error al intentar registraerse"
                  : "Por favor, diligencia los campos marcados"}
              </div>
            )}
            <div>
              <CustomButton label="Regístrate" width={248} height={41} />
            </div>
          </div>
        </form>
      </AuthForm>
    </div>
  );
}
