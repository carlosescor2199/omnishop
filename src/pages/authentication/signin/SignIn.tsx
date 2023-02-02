import styles from "./signin.module.css";
import Header from "../../../components/authentication/header/Header";
import AuthForm from "../../../components/authentication/auth-form/AuthForm";
import TextField from "../../../components/authentication/text-field/TextField";
import CheckBox from "../../../components/authentication/checkbox/CheckBox";
import CustomButton from "../../../components/common/button/CustomButton";
import { Link } from "react-router-dom";
import useValues from "../../../hooks/useValues";
import useAuthentication from "../../../hooks/useAuthentication";

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

  const [onSignIn, _, error] = useAuthentication(values, initErrors);

  return (
    <div className={styles.signin}>
      <Header />
      <AuthForm buttons={SIGNIN_BUTTONS} width={312} height={276.5}>
        <form className={`${styles.form} ml-16 mr-16 mb-32`} onSubmit={onSignIn}>
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
            <div className={hasErrors() ? "" : "mb-12"}>
              <TextField
                name="password"
                value={values.password}
                type="password"
                placeholder="Ingresa contraseña"
                width={221}
                height={16}
                onChange={onChange}
                error={errors.password || error}
              />
            </div>
            {(hasErrors() || error) && (
              <div className={`${styles.error} mt-4 mb-8`}>
                {error ? "contraseña incorrecta" : "Por favor, diligencia los campos marcados"}
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
