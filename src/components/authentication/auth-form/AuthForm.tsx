import styles from "./authform.module.css";
import PrimaryButton from "../primary-button/PrimaryButton";
import SecondaryButton from "../secondary-button/SecondaryButton";

export default function AuthForm({
  buttons,
  children,
  width,
  height,
}: {
  buttons: Array<any>;
  children: string | JSX.Element | JSX.Element[];
  width: number | string;
  height: number | string;
}) {
  return (
    <div>
      <fieldset className={styles.form}>
        <legend>
          {buttons.map((item) =>
            item.type === "primary" ? (
              <PrimaryButton
                key={item.label}
                route={item.route}
                label={item.label}
                width={88}
                height={42}
              />
            ) : (
              <SecondaryButton
                key={item.label}
                route={item.route}
                label={item.label}
              />
            )
          )}
        </legend>
        <div>{children}</div>
      </fieldset>
    </div>
  );
}
